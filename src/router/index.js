import { createRouter, createWebHistory } from 'vue-router'

const beforeLogin = (to, from, next) => {
    const token = localStorage.getItem("access_token");

    if (token)
        next()
    else
       next('login')
};

const authLogin = (to, from, next) => {
    const token = localStorage.getItem("access_token");
    if (token && checkToken()) {
        next();
    } else {
        next("login");
    }
};



const routes = [
    {
        path: '/',
        redirect : '/admin'
    },

    {
        path: '/admin',
        name: 'main',
        beforeEnter:  beforeLogin,
        component: () => import("../Layout/Layout.vue"),
        children: [
            {
                path: '/admin/dashboard',
                name: 'dashboard',
                component: () => import('../views/Dashboard/Dashboard.vue')
            },
            {
                path: '/admin/cadries',
                name: 'cadries',
                component: () => import('../views/Cadries/cadries.vue')
            },
        ]

    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/auth/login.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router