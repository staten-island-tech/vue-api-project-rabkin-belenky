import Home from "../views/Home.vue";
import characterGrid from "../components/characterGrid";
import search from "../components/Search"

const routes = [
    { path: "/", component: Home },
    { path: "/characterGrid/:type/:field", component: characterGrid, props: true },
    { path: "/search", component: search},
];

export default routes;