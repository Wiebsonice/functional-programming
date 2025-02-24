import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'

export default {
    input: 'src/app.js',
    output: {
        file: 'docs/scripts/bundle.js',
        format: 'iife',
        name: 'bundle',
    },
    plugins: [
        resolve({
            main: true,
            browser: true
        }),
        json(),
        commonjs()
    ]
}
