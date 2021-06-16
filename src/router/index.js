import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Create from '@/views/Create'
import Tags from '@/views/Tags'
import Board from '@/views/Board'
import Sort from '@/views/Sort'
import Login from '@/views/Login'

Vue.use(VueRouter)
const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/create" , name: "create", component: Create},
    { path: "/tags" , name: "tags", component: Tags},
    { path: "/board", name: "board", component: Board},
    { path: "/sort", name: "sort", component: Sort},
    { path: "/login", name: "login", component: Login}
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
