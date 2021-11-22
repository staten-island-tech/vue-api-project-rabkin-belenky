import Home from "../views/Home.vue";
import characterGrid from "../components/characterGrid";

const routes = [
    { path: "/", component: Home },
    { path: "/characterGrid", component: characterGrid },
];

export default routes;