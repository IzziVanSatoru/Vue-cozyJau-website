import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import AboutMe from '../pages/AboutMe.vue';
import Travel from '../pages/Travel.vue';
import Cooking from '../pages/Cooking.vue';
import Lifestyle from '../pages/Lifestyle.vue';

const routes = [
  { path: '/home', component: Home },
  { path: '/', component: Home },
  { path: '/about-me', component: AboutMe },
  { path: '/travel', component: Travel },
  { path: '/cooking', component: Cooking },
  { path: '/lifestyle', component: Lifestyle },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
