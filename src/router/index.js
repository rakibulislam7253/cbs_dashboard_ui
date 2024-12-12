import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/cbs_dashboard',
                    name: 'dashboard',
                    component: () => import('../components/Dashboard.vue')
                },
                {
                    path: '/grapg',
                    name: 'grapg',
                    component: () => import('../components/graph.vue')
                },
                {
                    path: '/test',
                    name: 'textPage',
                    component: () => import('../components/textPage.vue')
                }
            ]
        }
    ]
});

export default router;
