import { PrettyError } from './errors'
import { runEsbuild } from './esbuild'
import type { Options } from './types'

function normalizeOptions(_options: Options): Options {
  const entry = _options.entry

  if (!entry || Object.keys(entry).length === 0) {
    throw new PrettyError(`No input files, try "tsup <your-file>" instead`)
  }
  return _options
}

export async function build(_options: Options) {
  console.log('build start', _options)
  const options = await normalizeOptions(_options)
  const dtsTask = async () => {}
  const mainTask = async () => {
    await runEsbuild(options)
  }
  await Promise.all([dtsTask(), mainTask()])
}
