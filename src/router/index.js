import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('../views/app/home/Index.vue')
        },
        {
            path: '/search/:search',
            name: 'search',
            component: () => import('../views/app/home/SearchPartComponent.vue')
        },
        {
            path: '/shop',
            name: 'shop',
            component: () => import('../views/app/shop/Shop.vue')
        },
        {
            path: '/shop/brand/:id',
            name: 'shop_brand',
            component: () => import('../views/app/shop/ShopSubCategory.vue')
        },
        {
            path: '/shop/parts/:id',
            name: 'parts',
            component: () => import('../views/app/shop/PartsComponent.vue')
        },
        {
            path: '/shop/show/:id',
            name: 'part_single',
            component: () => import('../views/app/shop/ShowPartComponent.vue')
        },
        {
            path: '/shop/order',
            name: 'order',
            component: () => import('../views/app/shop/OrderComponent.vue')
        },
        {
            path: '/shop/order/confirm',
            name: 'order_confirm',
            component: () => import('../views/app/shop/CheckoutComponent.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/app/personal/LoginComponent.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/app/personal/RegisterComponent.vue')
        },
        {
            path: '/personal',
            name: 'personal',
            component: () => import('../views/app/personal/Personal.vue')
        },
        {
            path: '/personal/profile',
            name: 'personal_profile',
            component: () => import('../views/app/personal/ProfileComponent.vue')
        },
        {
            path: '/personal/orders',
            name: 'personal_orders',
            component: () => import('../views/app/personal/OrdersComponent.vue')
        },
        {
            path: '/personal/wishlist',
            name: 'personal_wishlist',
            component: () => import('../views/app/personal/WishlistComponent.vue')
        },
        {
            path: '/personal/garage',
            name: 'personal_garage',
            component: () => import('../views/app/personal/GarageComponent.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/app/other/AboutUsComponent.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/app/other/ContactComponent.vue')
        },
        {
            path: '/:pathMatch(.*)',
            name: '404',
            component: () => import('../views/app/etc/404.vue')
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return {top: 0}
    },
})

router.beforeEach((to, from, next) => {
    const accessToken = localStorage.getItem('token')

    if (to.name === 'personal' ||
        to.name === 'personal_profile' ||
        to.name === 'personal_orders' ||
        to.name === 'personal_wishlist' ||
        to.name === 'personal_garage') {
        if (!accessToken) {
            return next({name: 'login'})
        }
    }

    if (to.name === 'login' ||
        to.name === 'register') {
        if (accessToken) {
            return next({name: 'index'})
        }
    }

    next()
})

export default router
