# light-classnames

This package is a **very-light** ([typescript](https://www.typescriptlang.org/) written) substitute to the [classnames](https://www.npmjs.com/package/classnames) & [clsx](https://www.npmjs.com/package/clsx) packages with only the most important and commonly used features implemented in order to keep it [the fastest](https://www.measurethat.net/Benchmarks/Show/17041/classnames-vs-clsx-vs-light-classnames):

- literal `string` that will always be included.
- objects where the key defines the `className` and the value represents whether to include the className or not.
-  `null` and `undefined` values are ignored.
-  `number` will be included if it is not a 0.

Because of this, all the examples shown in the original `classNames` [README.md](https://github.com/JedWatson/classnames#readme) file will work here too.

```js
// esm importing
import  lcn  from  'light-classnames';
// cjs importing
const  lcn = require('light-classnames');
// or include the script tag and it will be included globally
<script src="https://cdn.jsdelivr.net/npm/light-classnames@0.0.3/dist/bundle.umd.min.js"></script>

lcn('foo', 'bar'); // => 'foo bar'
lcn('foo', { bar:  true }); // => 'foo bar'
lcn({ 'foo-bar':  true }); // => 'foo-bar'
lcn({ 'foo-bar':  false }); // => ''
lcn({ foo:  true }, { bar:  true }); // => 'foo bar'
lcn({ foo:  true, bar:  true }); // => 'foo bar'
// lots of arguments of various types
lcn('foo', { bar:  true, duck:  false }, 'baz', { quux:  true }); // => 'foo bar baz quux'
// other falsy values are just ignored
lcn(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
```

## Breaking from the original package
### why?
I started working on the project after noticing that the bundle size and the amount of features `classnames` offers is quite big. In my experience working in a large team developing `react` apps, There was no need for the `nested-array` functionality and for `boolean` values. Moreover, the need for `binding` and `dedup` was not really there for me and my friends. Combining this with me wanting a passion project of an [npm](https://www.npmjs.com/)-library and [typescript](https://www.typescriptlang.org/) this is what came up!

### what?
In order to keep the package light and satisfy the vast majority of the usage of the package, This package (in its base form, without plugins) will only parse literal `string`, `number`, `object`, `null` and `undefined`.

This means that `array`, `boolean` and any other value will not be parsed by this.
More than that, special functionality like binding and dedup will not be here. The original [classnames](https://www.npmjs.com/package/classnames) package will do the job greatly!
