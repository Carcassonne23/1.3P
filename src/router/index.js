import { createRouter, createWebHistory } from 'vue-router';
import CharactersComponent from './components/CharactersComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import FindRingComponent from './components/FindRingComponent.vue';
import MainComponent from './components/MainComponent.vue';
import RingsComponent from './components/RingsComponent.vue';

const routes = [
  { path: '/', component: MainComponent },
  { path: '/CharactersComponent', component: CharactersComponent },
  { path: '/ContactComponent', component: ContactComponent },
  { path: '/FindRingComponent', component: FindRingComponent },
  { path: '/RingsComponent', component: RingsComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;