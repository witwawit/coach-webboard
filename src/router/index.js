import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)
const routes = [
    { path: "/home", name: "home", component: Home }
];
const router = new VueRouter({
    mode: "history",
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
});

export default router;
// ประกาศเพื่อให้ไฟล์ย่อยๆอื่นใช้งาน routerได้ 
