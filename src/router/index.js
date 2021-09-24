import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import musicListInfo from '../views/musicListInfo.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/musicListInfo',
        name: 'musicListInfo',
        component: musicListInfo
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
//# sourceMappingURL=index.js.map