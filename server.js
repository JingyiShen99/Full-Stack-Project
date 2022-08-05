//导入express模块，并创建了一个express应用“app”,它可以进行路由HTTP请求，配置中间件，渲染HTML视图，注册模块引擎 及修改应用程序设置等操作，从而控制应用的行为
const express = require('express');
const connectDB = require('./config/db');
const app = express();

//connect database
connectDB();

//Init Middleware
app.use(express.json({extended: false}));

//路由定义。get指定了一个回调callback函数，该函数在每监听到一个关于站点根目录路径"/"的HTTP get请求时调用。
//该回调函数以一个请求和一个响应对象为参数，并直接调用相应的send来返回字符串api running
app.get('/', (req,res) => res.send('API Running'));

//define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

//在5000端口启动服务器，并在控制台打印日志。
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));