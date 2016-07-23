# <%= projectName %>
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]

<%= transformerName %> transformer for panto.

```js
panto.loadTransformer('<%= transformerNameLowerCase %>');

panto.pick('**/*.js').<%= transformerNameLowerCase %>();
```

## options

[npm-url]: https://npmjs.org/package/<%= projectName %>
[downloads-image]: http://img.shields.io/npm/dm/<%= projectName %>.svg
[npm-image]: http://img.shields.io/npm/v/<%= projectName %>.svg
[travis-url]: https://travis-ci.org/pantojs/<%= projectName %>
[travis-image]: http://img.shields.io/travis/pantojs/<%= projectName %>.svg
[david-dm-url]:https://david-dm.org/pantojs/<%= projectName %>
[david-dm-image]:https://david-dm.org/pantojs/<%= projectName %>.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/<%= projectName %>#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/pantojs/<%= projectName %>/dev-status.svg
[coveralls-image]:https://coveralls.io/repos/github/pantojs/<%= projectName %>/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/pantojs/<%= projectName %>?branch=master
