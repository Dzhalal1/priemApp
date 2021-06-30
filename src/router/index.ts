import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/tabs/home'
    },
    {
        name: 'Login',
        path: '/login',
        component: () => import('@/views/SignIn.vue')
    },
    {
        path: '/tabs/',
        component: Tabs,
        children: [
            {
                path: '',
                redirect: '/home'
            },
            {
                path: 'home',
                name: 'Home',
                component: () => import('@/views/Home.vue')
            },
            {
                path: 'profile',
                name: 'Profile',
                component: () => import('@/views/Profile.vue')
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {
    const store = localStorage.getItem('vuex')
    if (to.name !== 'Login' && (store === null || JSON.parse(`${store}`).authToken === null)) {
        next({name: 'Login'})
    } else {
        next()
    }
})

export default router
