import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import externalGlobals from "rollup-plugin-external-globals";

export default {   
    external: ["lodash", "jquery", 'toastr'],
    input: ["app/main.js"],
    output: [
        {
            dir: "public",
            format: "iife",
            sourcemap: "inline"
        }
    ],
    plugins: [
        commonjs(),
        babel({ babelHelpers: 'bundled' }),
        externalGlobals({
            jquery: "$",
            lodash: "lodash",
            toastr: "toastr"
        })
    ],
   
}