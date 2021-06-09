import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PresentationProjet from '../views/PresentationProjet.vue'
import QuiSommeNous from '../views/QuiSommeNous.vue'
import NosActions from '../views/NosActions.vue'
import NousAider from '../views/NousAider.vue'
import NosRecettes from '../views/NosRecettes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
        name: "Home"
    }
  },
  {
    path: "/Home",
    name: "Home",
    component: Home
  },
  {
    path: "/PresentationProjet",
    name: "PresentationProjet",
    component: PresentationProjet
  },
  {
    path: "/QuiSommeNous",
    name: "QuiSommeNous",
    component: QuiSommeNous
  },
  {
    path: "/NosActions",
    name: "NosActions",
    component: NosActions
  },
  {
    path: "/NousAider",
    name: "NousAider",
    component: NousAider
  },
  {
    path: "/NosRecettes",
    name: "NosRecettes",
    component: NosRecettes
  },
  ]

  const router = new VueRouter({
    routes
  })

export default router
