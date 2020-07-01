import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'ClothingDetail',
        redirect: '/shoes',
        component: () =>
            import(
                /* webpackChunkName: "clothing-detail" */ '@/views/ClothingDetail.vue'
            ),
        children: [
            {
                path: 'shirt',
                name: 'Shirt',
                component: () =>
                    import(
                        /* webpackChunkName: "shirt" */ '@/components/forms/shirt/Shirt.vue'
                    ),
            },
            {
                path: 'shorts',
                name: 'Shorts',
                component: () =>
                    import(
                        /* webpackChunkName: "shorts" */ '@/components/forms/shorts/Shorts.vue'
                    ),
            },
            {
                path: 'socks',
                name: 'Socks',
                component: () =>
                    import(
                        /* webpackChunkName: "socks" */ '@/components/forms/socks/Socks.vue'
                    ),
            },
            {
                path: 'shoes',
                name: 'Shoes',
                component: () =>
                    import(
                        /* webpackChunkName: "shoes" */ '@/components/forms/shoes/Shoes.vue'
                    ),
            },
            {
                path: 'overview',
                name: 'Overview',
                component: () =>
                    import(
                        /* webpackChunkName: "overview" */ '@/components/forms/overview/Overview.vue'
                    ),
            },
        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
