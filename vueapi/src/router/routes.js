import Home from "../views/Home.vue";
import episodeList from "../components/episodeList";

const routes = [
    { path: "/", component: Home },
    { path: "/episodeList", component: episodeList },
];

export default routes;