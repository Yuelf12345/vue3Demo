const Koa = require('koa')
const Router = require('koa-router')    //路由管理
const { koaBody } = require('koa-body') //获取参数
const cors = require('koa2-cors')       //cors跨域
const static = require('koa-static');
var User = require('./api/user')        //路由模块化


const app = new Koa()
const router = new Router()
app.use(cors());
app.use(static('./dist'));
app.use(koaBody({
    multipart: true
}))
app.use(router.routes())



app.use((ctx, next) => {
    ctx.body = '后台'
    next()
})  
router.post('/123',ctx=>{
    ctx.body = '1234'
})

router.post('/login', User.userLogin)
router.get('/getUserInfo', User.getUserInfo)


app.listen(7070, () => {
    console.log('服务器已启动,请访问http://localhost:7070/');
})