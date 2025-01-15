import { createRouter, createWebHistory } from 'vue-router'

import Navbar_V1 from '../components/Navbar_V1.vue'
// import Navbar_V2 from '../components/Navbar_V1.vue'
import Navbar_V3 from '../components/Navbar_V3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/Navbar_V1',
      name: 'Navbar_V1',
      component: Navbar_V1
    },
    // {
    //   path: '/Navbar_V2',
    //   name: 'Navbar_V2',
    //   component: Navbar_V2
    // },
    {
      path: '/Navbar_V3',
      name: 'Navbar_V3',
      component: Navbar_V3
    },
    
  ]
})

export default router
