# light-classnames
This is a small implementation of the [classnames](https://www.npmjs.com/package/classnames) package with a native typescript support.

Becasue of this, all the examples shown in the `className` example will work here too.
```js
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

var arr = ['b', { c: true, d: false }];
classNames('a', arr); // => 'a b c'
```
