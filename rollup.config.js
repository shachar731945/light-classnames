import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const externals = []
    .concat(Object.keys(pkg.dependencies || {}))
    .concat(Object.keys(pkg.peerDependencies || {}));

const generateConfig = format => ({
    external: path => externals.some(external => path.startsWith(external)),
    input: 'src/index.ts',
    output: {
        exports: 'auto',
        file: format === 'umd' ? 'dist/light-classnames.min.js' : `dist/bundle.${format}.min.js`,
        name: format === 'umd' ? 'light-classnames' : undefined,
        format,
        plugins: [terser()]
    },
    plugins: [
        typescript({tsconfig: './tsconfig.json'})
    ]
});

export default ['esm', 'cjs', 'umd'].map(generateConfig);