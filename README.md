# light-classnames
This is a small implementation of the classnames package with a native typescript support.

In order to enable tree-shaking. This package allows two different uses of [classnames](https://www.npmjs.com/package/classnames).
One use is with an object and the second is with an array syntax (continue down to see example)

## objectClassNames
The first way of using the package is with an object. The next example is taken from the original [classnames](https://www.npmjs.com/package/classnames) package and will work on this package as well.

```js
lassNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'
```

## arraysClassNames
The second way is using an arrays like `['foo', true]` where `foo` is the className and `true` (the second argument)
