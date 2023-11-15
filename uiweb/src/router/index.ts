import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";

const Layout = () => import('@/layout/index.vue')

// constantRoutes
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    meta: {
      title:'首页',
      icon:'HomeFilled',
      requiresAuth: true,
      roles: ['admin', 'user']
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          requiresAuth: true,
          roles: ['admin', 'user']
        },
        children: []
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      requiresAuth: true,
    },
    children: []
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    meta: {
      requiresAuth: true
    },
    children: []
  },
  //  {
  //   path: "/:pathMatch(.*)",
  //   redirect: '/404'
  // },
  // {
  //   path: '/one',
  //   name: 'one',
  //   component: Layout,
  //   meta: {
  //     requiresAuth: true,
  //     roles: ['admin', 'user']
  //   },
  //   redirect: "/one/oneItem1",
  //   children: [
  //     {
  //       path: "/one/oneItem1",
  //       component: () => import("@/views/NavOne/itemOne.vue"),
  //       name: "oneItem1",
  //       meta: {
  //         requiresAuth: true,
  //         roles: ['admin', 'user']
  //       }
  //     },
  //     {
  //       path: "/one/oneItem2",
  //       component: () => import("@/views/NavOne/itemTwo.vue"),
  //       name: "oneItem2",
  //       meta: {
  //         requiresAuth: true,
  //         roles: ['admin', 'user']
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/two',
  //   name: 'two',
  //   component: Layout,
  //   meta: {
  //     requiresAuth: true,
  //     roles: ['admin', 'user']
  //   },
  //   redirect: "/two/oneItem1",
  //   children: [
  //     {
  //       path: "/two/twoItem1",
  //       component: () => import("@/views/NavTwo/itemOne.vue"),
  //       name: "twoItem1",
  //       meta: {
  //         requiresAuth: true,
  //         roles: ['admin', 'user']
  //       }
  //     },
  //     {
  //       path: "/two/twoItem2",
  //       component: () => import("@/views/NavTwo/itemTwo.vue"),
  //       name: "twoItem2",
  //       meta: {
  //         requiresAuth: true,
  //         roles: ['admin', 'user']
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/three',
  //   name: 'three',
  //   component: Layout,
  //   meta: {
  //     requiresAuth: true,
  //     roles: ['admin', 'user']
  //   },
  //   redirect: "/three/threeItem1",
  //   children: [
  //     {
  //       path: "/three/threeItem1",
  //       component: () => import("@/views/NavThree/itemOne.vue"),
  //       name: "threeItem1",
  //       meta: {
  //         requiresAuth: true,
  //         roles: ['admin', 'user']
  //       }
  //     },
  //     {
  //       path: "/three/threeItem2",
  //       component: () => import("@/views/NavThree/itemTwo.vue"),
  //       name: "threeItem2",
  //       meta: {
  //         requiresAuth: true,
  //         roles: ['admin', 'user']
  //       }
  //     },
  //   ]
  // },
  // {
  //   path: '/four',
  //   name: 'four',
  //   component: Layout,
  //   meta: {
  //     requiresAuth: true,
  //     roles: ['admin', 'user']
  //   },
  //   redirect: "/four/oneItem1",
  //   children: [
  //     {
  //       path: "/four/oneItem1",
  //       component: () => import("@/views/NavFour/itemOne.vue"),
  //       name: "oneItem1",
  //       meta: {
  //         requiresAuth: true,
  //         roles: ['admin', 'user']
  //       }
  //     },
  //     {
  //       path: "/four/twoItem2",
  //       component: () => import("@/views/NavFour/itemTwo.vue"),
  //       name: "twoItem2",
  //       meta: {
  //         requiresAuth: true,
  //         roles: ['admin', 'user']
  //       }
  //     }
  //   ]
  // }
]
// asyncRoutes
export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/one',
    name: 'one',
    component: Layout,
    meta: {
      icon:'Management',
      title:'数据管理',
      requiresAuth: true,
      roles: ['admin', 'user']
    },
    redirect: "/one/oneItem1",
    children: [
      {
        path: "/one/oneItem1",
        component: () => import("@/views/NavOne/itemOne.vue"),
        name: "oneItem1",
        meta: {
          title:'用户数据',
          requiresAuth: true,
          roles: ['admin', 'user']
        },
        children:[]
      },
      {
        path: "/one/oneItem2",
        component: () => import("@/views/NavOne/itemTwo.vue"),
        name: "oneItem2",
        meta: {
          title:'角色数据',
          requiresAuth: true,
          roles: ['admin', 'user']
        },
        children:[]
      }
    ]
  },
  {
    path: '/two',
    name: 'two',
    component: Layout,
    meta: {
      title:'菜单管理',
      icon:'menu',
      requiresAuth: true,
      roles: ['admin', 'user']
    },
    redirect: "/two/oneItem1",
    children: [
      {
        path: "/two/twoItem1",
        component: () => import("@/views/NavTwo/itemOne.vue"),
        name: "twoItem1",
        meta: {
          title:'用户菜单',
          requiresAuth: true,
          roles: ['admin', 'user']
        },
        children:[]
      },
      {
        path: "/two/twoItem2",
        component: () => import("@/views/NavTwo/itemTwo.vue"),
        name: "twoItem2",
        meta: {
          title:'角色菜单',
          requiresAuth: true,
          roles: ['admin', 'user']
        },
        children:[]
      }
    ]
  },
  {
    path: '/three',
    name: 'three',
    component: Layout,
    meta: {
      title:'权限管理',
      icon:'Tools',
      requiresAuth: true,
      roles: ['admin', 'user']
    },
    redirect: "/three/threeItem1",
    children: [
      {
        path: "/three/threeItem1",
        component: () => import("@/views/NavThree/itemOne.vue"),
        name: "threeItem1",
        meta: {
          title:'用户权限',
          requiresAuth: true,
          roles: ['admin', 'user']
        },
        children:[]
      },
      {
        path: "/three/threeItem2",
        component: () => import("@/views/NavThree/itemTwo.vue"),
        name: "threeItem2",
        meta: {
          title:'角色权限',
          requiresAuth: true,
          roles: ['admin', 'user']
        },
        children:[]
      },
    ]
  },
  {
    path: '/four',
    name: 'four',
    component: Layout,
    meta: {
      requiresAuth: true,
      roles: ['admin', 'user']
    },
    redirect: "/four/oneItem1",
    children: [
      {
        path: "/four/oneItem1",
        component: () => import("@/views/NavFour/itemOne.vue"),
        name: "oneItem1",
        meta: {
          requiresAuth: true,
          roles: ['admin', 'user']
        },
        children:[]
      },
      {
        path: "/four/twoItem2",
        component: () => import("@/views/NavFour/itemTwo.vue"),
        name: "twoItem2",
        meta: {
          requiresAuth: true,
          roles: ['admin', 'user']
        },
        children:[]
      }
    ]
  },
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

export default router