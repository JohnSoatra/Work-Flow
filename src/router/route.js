import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage";
import CreatePage from "../views/CreatePage";
import ResetPage from "../views/ResetPage";
import LaboPage from "../views/LaboPage";
import DocumentPage from "../views/DocumentPage";
import WelcomePage from "../views/WelcomePage";
import TestPage from "../views/TestPage";
import Notfound from "../views/Notfound";
import { checkCookie } from "../helpers/cookie";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage
    },
    {
        path: "/create-account",
        name: "Create account",
        component: CreatePage
    },
    {
        path: "/reset-password",
        name: "Reset password",
        component: ResetPage
    },
    {
        path: "/labo",
        name: "Labo",
        component: LaboPage
    },
    {
        path: "/docs",
        name: "Document",
        component: DocumentPage
    },
    {
        path: "/labo/:folder",
        name: "Labo folder",
        component: LaboPage
    },
    {
        path: "/profile",
        name: "Profile",
        component: WelcomePage
    },
    {
        path: "/test",
        name: "Test",
        component: TestPage
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: Notfound
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes,
    
});

export default router;
