const path = require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const ws = require('./ws');

const resolve = file => path.resolve(__dirname, file);

const app = new Koa();

// 将请求体转换为 JSON 的中间件
app.use(bodyParser());


app.listen(8080, () => {
    console.log('application start');
});
