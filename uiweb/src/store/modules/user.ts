import { defineStore } from 'pinia'
import { RouteRecordRaw } from "vue-router";
import store from "@/store"
import { Login, GetInfo } from "@/api/user";
import { setToken, getToken, removeToken } from '@/utils/token';

interface User {
    uID: Number,
    username: String,
    password: String | Number,
    status: Number,
    remark: String,
    avatar: String,
    roles: any,
    router: any,
    AccessToken: String,
    RefreshToken: String
}

interface Config {
    isCollapse: boolean,
    historyList: Array<RouteRecordRaw>
}

export const userStore = defineStore('user', {
    state: () => {
        return {
            user: <User>{
                uID: 0,
                username: '张三',
                password: 123,
                status: 0,
                remark: '',
                avatar: '',
                roles: '',
                router: '',
                AccessToken: '',
                RefreshToken: ''
            },
            config: <Config>{
                isCollapse: false,
                historyList: [{
                    path: "/",
                    name: 'dashboard',
                    meta: {
                        requiresAuth: true,
                        roles: ['admin', 'user'],
                        title: '首页'
                    },
                    children: []
                }
                ]

            }
        }
    },
    getters: {
        getUser: (state) => state
    },
    actions: {
        // 侧边栏
        async switchCollapse(isCollapse: boolean) {
            this.config.isCollapse = isCollapse
        },
        // 面包屑
        async selectMenu(item: any) {
            if (item.path !== '/') {
                const index = this.config.historyList.findIndex(i => i.name === item.name);
                if (index === -1) {
                    this.config.historyList.push(item);
                }
            }
        },
        async closeTag(item: any) {
            const index = this.config.historyList.findIndex(i => i.name === item.name);
            if (index === -1) return
            this.config.historyList.splice(index, 1);
        },
        async userLogin(username: any, password: any) {
            await Login({ username, password }).then(res => {
                const data = res.data
                console.log(JSON.stringify(data));
                
                if (data.code == 2000) {
                    this.user.uID = data.data.uID;
                    setToken('AccessToken', data.data.AccessToken);
                    setToken('RefreshToken', data.data.RefreshToken);
                    setToken('uID', data.data.uID, false);
                }
            })
        },
        async userGetInfo(uID: any) {
            await GetInfo({ uID }).then(res => {
                const data = res.data.data
                this.user.uID = data.uID
                this.user.status = data.status
                this.user.remark = data.remark
                this.user.avatar = data.avatar
                this.user.roles = data.roles
                this.user.router = JSON.parse(data.router)
            })
        },
        async resetUser() {
            removeToken('AccessToken')
            removeToken('RefreshToken')
            removeToken('uID', false)
            removeToken('userRouter', false)
            this.user.router = ''
        },
        //对比路由
        async GenerateRoutes(asyncRoutes: any, router = this.user.router) {
            let res: any[] = [];
            asyncRoutes.forEach((i: { name: any; children: Promise<any[]>; }) => {
                router.forEach(async (j: { name: any; children: any; }) => {
                    if (i.name == j.name) {
                        if (i.children && j.children) {
                            i.children = await this.GenerateRoutes(i.children, j.children)
                        }
                        res.push(i)
                    }
                })
            })
            return res;
        }
    }
})

/** 在 setup 外使用 */
export function UserStore() {
    return userStore(store)
}
