import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

const externals = []
    .concat(Object.keys(pkg.dependencies || {}))
    .concat(Object.keys(pkg.peerDependencies || {}));

const generateConfig = format => ({
    external: path => externals.some(external => path.startsWith(external)),
    input: 'src/index.ts',
    output: {
        exports: 'auto',
        file: `dist/bundle.${format}.js`,
        format
    },
    plugins: [
        typescript({ tsconfig: './tsconfig.json' })
    ]
});

export default [ 'esm', 'cjs' ].map(generateConfig);