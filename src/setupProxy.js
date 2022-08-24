const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
      "/api",
      createProxyMiddleware({
        target: "http://203.250.32.29:2200",
        changeOrigin: true,

      })
	)
}