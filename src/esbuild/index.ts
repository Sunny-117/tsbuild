import type { BuildResult } from 'esbuild'
import { build as esbuild } from 'esbuild'
import type { Options } from '../types'

export async function runEsbuild(options: Options) {
  const o = {
    entryPoints: options.entry,
    format: 'cjs',
    // bundle: true,
    // platform: 'node',
    sourcemap: false,
    target: 'node18',
    // tsconfig: '/Users/fuzhiqiang/Desktop/tsbuild/tsconfig.json',
    loader: {
    },
    mainFields: ['module', 'main'],
    plugins: [],
    define: { TSUP_FORMAT: '"cjs"' },
    inject: [],
    outdir: 'lib',
    outExtension: { '.js': '.js' },
    write: false,
    splitting: false,
    logLevel: 'error',
    metafile: true,
  }
  const result: BuildResult | undefined = await esbuild(o)
  console.log(result)
}
