import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import Banner from '/src/components/Banner.vue';

const routes = [
	{
    path: '/',
    name: 'Banner',
    component: Banner,
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;