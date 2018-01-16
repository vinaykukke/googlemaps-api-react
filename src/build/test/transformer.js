const babel = require('babel-core')
const tsc = require('typescript');
const babelConfig = require('./.babelrc.test.js')
const tsConfig = require('../../../tsconfig.json');


module.exports = {
  /*
  NOTE: From [this example](http://facebook.github.io/jest/docs/en/webpack.html#mocking-css-modules)
  deduced that process can take four arguments:
  `process(src, path, config, options)`.
  From [this example](https://github.com/facebook/jest/blob/master/examples/typescript/preprocessor.js)
  deduced that `path` is an object that contains an `endsWith()` method. The
  object must contain a `toString()` method too because from testing and as seen
  in first example, can be called directly and will print file path.

  Could not find any additional documentation as to how the rest of the
  arguments behave.
  */
  process(src, path) {
    if (path.endsWith(".js") || path.endsWith(".jsx")) {
      return babel.transform(src, babelConfig).code
    } else if (path.endsWith(".ts") || path.endsWith(".tsx")) {
      const srcTransformedByTS = tsc.transpile(src, tsConfig.compilerOptions, path, [])
      return babel.transform(srcTransformedByTS, babelConfig).code
    } else {
      console.log("Unknown file extension received for transforming.")
    }
    return src
  }
}
