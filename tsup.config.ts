import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'tsup',
  target: 'node18',
  format: ['cjs', 'esm'],
  entry: ['src/cli-*.ts'],
  clean: true,
  splitting: true,
  dts: {
    resolve: true,
  },
})
