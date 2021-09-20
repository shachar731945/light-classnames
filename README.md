# light-classnames
This package is a **very-light** ([typescript](https://www.typescriptlang.org/) written) subtitute to the [classnames](https://www.npmjs.com/package/classnames) package with only the most important and commonly used features implemented:

- literal `string` that will always be included
- objects where the key defiens the `string` and the value represents wheather to include the `string` or not.

Becasue of this, all the examples shown in the original `className` README.md file will work here too.
```js
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'
```

## Breaking from the original package
In order to keep the package light and satisfy the vast majority of the usage of the package, This package (in its base form, without plugins) will only parse literal `string` and `object`.

This means that `number`, `array`, `null`, `undefined` and any other (non-string and non-object) value will not be parsed by this.