import { createRouter, createWebHashHistory } from 'vue-router';
import Borrow from '../pages/Borrow';
import Leverage from '../pages/Leverage'
import Positions from '../pages/Positions'

const routes = [
    {
        path: '/',
        component: Borrow,
    },

    {
        path: '/leverage',
        component: Leverage,
    },

    {
        path: '/positions',
        component: Positions,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

export default router;