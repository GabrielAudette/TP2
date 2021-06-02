import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Accueil from '../views/Accueil';
import Panier from '../views/Panier';

const routes = [{
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/panier',
    name: 'Panier',
    component: Panier,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router