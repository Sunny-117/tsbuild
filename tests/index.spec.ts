import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { expect, it } from 'vitest'
import execa from 'execa'
import fs from 'fs-extra'
import glob from 'globby'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const cacheDir = path.resolve(__dirname, '.cache')
const bin = path.resolve(__dirname, '../dist/cli-default.js')

function getTestName() {
  const name = expect
    .getState()
    .currentTestName?.replace(/^[a-z]+/g, '_')
    .replace(/-/g, '_')
  if (!name) {
    throw new Error('No test name')
  }

  return name
}

function filenamify(input: string) {
  return input.replace(/[^a-z0-9]/gi, '-')
}

async function run(
  title: string,
  files: { [name: string]: string },
  options: {
    entry?: string[]
    flags?: string[]
    env?: Record<string, string>
  } = {},
) {
  const testDir = path.resolve(cacheDir, filenamify(title))

  // Write entry files on disk
  await Promise.all(
    Object.keys(files).map((name) => {
      return fs.outputFile(path.resolve(testDir, name), files[name], 'utf8')
    }),
  )

  const entry = options.entry || ['input.ts']
  // Run tsbuild cli
  const { exitCode, stdout, stderr } = await execa(
    bin,
    [...entry, ...(options.flags || [])],
    {
      cwd: testDir,
      env: { ...process.env, ...options.env },
    },
  )
  const logs = stdout + stderr
  if (exitCode !== 0) {
    throw new Error(logs)
  }

  // Get output
  const outFiles = await glob('**/*', {
    cwd: path.resolve(testDir, 'dist'),
  }).then(res => res.sort())

  return {
    get output() {
      return fs.readFileSync(path.resolve(testDir, 'dist/input.js'), 'utf8')
    },
    outFiles,
    logs,
    outDir: path.resolve(testDir, 'dist'),
    getFileContent(filename: string) {
      return fs.readFile(path.resolve(testDir, filename), 'utf8')
    },
  }
}

it('cli works~', async () => {
  const { outFiles } = await run(getTestName(), {
    'input.ts': `import foo from './foo';export default foo`,
    'foo.ts': `export default 'foo'`,
  })
  console.log({ outFiles })
})
