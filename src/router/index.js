import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import Favourites from "../views/Favourites.vue";
import MovieDetails from "../views/MovieDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/favourites",
      name: "favourites",
      // route level code-split../views/Favourites.vue
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Favourites,
    },
    // eslint-disable-next-line prettier/prettier
      { path: '/movies/:id', name:"MovieDetails", component: MovieDetails },
    
  ],
});

export default router;
