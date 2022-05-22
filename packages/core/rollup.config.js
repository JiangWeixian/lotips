import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import alias from '@rollup/plugin-alias'
import externals from 'rollup-plugin-node-externals'
import nodeResolve from '@rollup/plugin-node-resolve'
import ce from 'rollup-plugin-condition-exports'
import { defineConfig } from 'rollup'

export default defineConfig([
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: ['src/index.ts', 'src/do-highlight.ts', 'src/do-search.ts', 'src/ua.ts', 'src/exports-template.ts'],
    plugins: [
      typescript({
        tsconfigOverride: {
          exclude: ["test"]
        }
      }), // so Rollup can convert TypeScript to JavaScript
      commonjs(),
      externals({
        devDeps: false,
      }),
      nodeResolve(),
      alias({
        resolve: ['.ts', '.js', '.tsx', '.jsx'],
        entries: [{ find: '@/', replacement: './src/' }],
      }),
      ce()
    ],
    output: [
      { dir: 'dist', format: 'cjs', entryFileNames: '[name].cjs' },
      { dir: 'dist', format: 'es', entryFileNames: '[name].mjs' },
    ],
  },
])
