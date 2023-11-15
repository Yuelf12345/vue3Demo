import router from '@/router';
import { UserStore } from "@/store/modules/user";
import { setToken, getToken } from '@/utils/token';
import { asyncRoutes, constantRoutes } from '@/router';

// 进度条
import NProgress from 'nprogress'
import "nprogress/nprogress.css";

const userStore = UserStore();

//白名单
let whiteList: Array<string> = ['/404', '/login'];
let allRouter = constantRoutes

NProgress.configure({ showSpinner: false });

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  let AccessToken = getToken('AccessToken');
  console.log('AccessToken',AccessToken);
  
  if (AccessToken) {
    if (to.path == '/login') {
      next({
        path: '/'
      });
      NProgress.done();
    } else {
      let isRouter = getToken("userRouter", false);
      if (userStore.$state.user.router && isRouter) {
        next();
        NProgress.done();
      } else {
        //刷新
        try {
            // 获取用户信息
            let uID = getToken('uID', false);            
            await userStore.userGetInfo(uID)
            // 获取路由信息
            await userStore.GenerateRoutes(asyncRoutes).then((res) => {
              const userRouter = res
              userRouter.forEach(i => {
                allRouter.push(i)
                router.addRoute(i)
              })
              router.addRoute({
                path: "/:pathMatch(.*)",
                redirect: '/404'
              })
              console.log('constantRoutes',allRouter);
              setToken('userRouter', JSON.stringify(allRouter), false);
              allRouter = []
              next({...to,replace: true});
              NProgress.done();

            })
        } catch (error) {
          await userStore.resetUser()
          next({
            path: '/login'
          })
        }
      }
    }
  } else {
    // 未登录
    if (whiteList.includes(to.path)) {
      next();
      NProgress.done();
    } else {
      next({
        path: '/login'
      })
      NProgress.done();
    }
  }
})