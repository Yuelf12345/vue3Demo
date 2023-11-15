const mysql = require("mysql2");
const jwt = require('jsonwebtoken');

// 连接数据库
// let db;
// ~async function(){
//     db = await mysql.createConnection({
//         host:'localhost',
//         user:'root',
//         password:'123456',
//         database:'db1'
//     })
// }()

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'db1',
    connectionLimit: 10,
})

let secretkey = 'yue'  //密钥
// 生成tokrn
const sign = (data = {}) => {
    const AccessToken = jwt.sign(data, secretkey, {
        expiresIn: 360 * 60,
    })
    const RefreshToken = jwt.sign(data, secretkey, {
        expiresIn: 12 * 360 * 60
    })
    return { AccessToken, RefreshToken }
}

const user = {
    userLogin: async (ctx, next) => {
        const { username, password } = ctx.request.body;
        try {
            const [res] = await db.promise().query("select * from `sys_user` where `username`= ? AND `password`= ? AND `status` = ?", [
                username, password, 1
            ]);
            if (res) {
                console.log(res);
                let { AccessToken, RefreshToken } = sign({ username, password });
                let uID = res[0].uID;
                ctx.body = {
                    code: 2000,
                    msg: '用户存在',
                    data: {
                        uID,
                        AccessToken,
                        RefreshToken
                    }
                };
            } else {
                ctx.body = {
                    code: 2002,
                    msg: '用户不存在'
                };
            }
        } catch (error) {
            console.log(error);
        } finally {
           
        }
    },
    getUserInfo: async (ctx) => {
        let { uID } = ctx.query;
        let [[userInfo]] = await db.promise().query("select * from `sys_user`where `uID`= ? ", [
            uID
        ]);
        console.log('userInfo', userInfo.roles);
        let [[route]] = await db.promise().query("select * from `router`where `roles`= ?", [
            userInfo.roles
        ]);
        console.log('----------------',route.router);
        ctx.status = 200;
        ctx.body = {
            code: 2000,
            msg: '用户信息',
            data: {
                uID: userInfo.uID,
                name: userInfo.username,
                password: userInfo.password,
                status: userInfo.status,
                remark: userInfo.remark,
                avatar: userInfo.avatar,
                roles: userInfo.roles,
                router: route.router
            }
        }
    }
}
module.exports = user;