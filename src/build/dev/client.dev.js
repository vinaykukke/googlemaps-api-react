const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.dev.client.config.js')

const compiler = webpack(config)

const server = new WebpackDevServer(compiler, {
  historyApiFallback:   {
    rewrites: [
      {from: /^\/$/, to: '/'},
      {from: /^.*$/, to: '/index.html'},
    ]
  },
  hot: true,
  proxy: {
    '/api': {
      target: 'http://localhost:5002/',
      secure: false,
    }
  },
})

server.listen(4000, 'localhost', () => {
  console.log('Client dev bundle now available at localhost:4000')
})
