import process from 'node:process'
import { cac } from 'cac'
import { version } from '../package.json'
import type { Options } from './types'
import { slash } from './utils'

export async function main(options: Options = {}) {
  const cli = cac('tsup')
  cli
    .command('[...files]', 'Bundle files', {
      ignoreOptionDefaultValue: true, // 什么意思
    }).action(async (files: string[], flags) => {
      const { build } = await import('.')
      Object.assign(options, {
        ...flags,
      })
      if (!options.entry && files.length > 0) {
        options.entry = files.map(slash)
      }
      await build(options)
    })
  cli.help()

  cli.version(version)

  cli.parse(process.argv, { run: false })
  await cli.runMatchedCommand()
}
