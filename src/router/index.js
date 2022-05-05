import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList'
import EventDetails from '../views/EventDetails'
import AboutView from '../views/AboutView'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
