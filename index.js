require('dotenv').config();
const app = require("express")();
const { createProxyMiddleware } = require("http-proxy-middleware");

const API_SERVICE_URL = "https://jsonplaceholder.typicode.com/posts";

app.use('/json_placeholder', createProxyMiddleware({
  target: API_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    [`^/json_placeholder`]: '',
  },
}));

// Start the Proxy
app.listen(process.env.PORT);