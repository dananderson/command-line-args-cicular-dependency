import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default [
  {
    input: 'index.js',
    output: {
      file: 'one.js',
      strict: true,
      format: 'cjs'
    },
    plugins: [
      resolve({
        jsnext: true,
        main: true,
        preferBuiltins: true
      }),
      commonjs({
        include: ['./node_modules/**'],
        ignore: true,
      })
    ]
  }
]
