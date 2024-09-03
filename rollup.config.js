const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser")

const pkg = require("./package.json")

const externals = []
    .concat(Object.keys(pkg.dependencies || {}))
    .concat(Object.keys(pkg.peerDependencies || {}));

const generateConfig = format => ({
    external: path => externals.some(external => path.startsWith(external)),
    input: 'src/index.ts',
    output: {
        exports: 'auto',
        file: `dist/bundle.${format}.min.js`,
        name: format === 'umd' ? 'lcn' : undefined,
        format
    },
    plugins: [
        typescript({tsconfig: './tsconfig.json'}),
        terser()
    ]
});

module.exports = ['esm', 'cjs', 'umd'].map(generateConfig);