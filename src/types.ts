export type Target =
  | 'es3'
  | 'es5'
  | 'es6'
  | 'es2015'
  | 'es2016'
  | 'es2017'
  | 'es2018'
  | 'es2019'
  | 'es2020'
  | 'es2021'
  | 'es2022'
  | 'esnext'
export type Entry = string[] | Record<string, string>

export type Format = 'cjs' | 'esm' | 'iife'

/**
 * The options available in tsbuild.config.ts
 * Not all of them are available from CLI flags
 */
export interface Options {
  /** Optional config name to show in CLI output */
  name?: string
  entry?: Entry
  /**
   * Compile target
   *
   * default to `node16`
   */
  target?: Target[]
  minify?: boolean
  watch?: boolean
  outDir?: string
  format?: Format[]
  dts?: boolean
}
