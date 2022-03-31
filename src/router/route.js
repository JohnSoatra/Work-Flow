import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "../views/HomePage";
import NotfoundPage from "../views/Notfound";


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomePage
        },
        {
            path: "/:pathMatch(.*)*",
            name: "notfound",
            component: NotfoundPage
        }
    ],
    
});

export default router;
