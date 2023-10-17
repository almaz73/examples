import {createRouter, createWebHistory} from 'vue-router'
import HelloWorld from "@/components/HelloWorld.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HelloWorld
        },
        {path: '/combo', name: 'combo', component: () => import('@/views/ComboboxCustom.vue')},



    ]
})

export default router
