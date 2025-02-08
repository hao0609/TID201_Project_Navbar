import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'

import Navbar_V1 from '../components/Navbar_V1.vue'
// import Navbar_V2 from '../components/Navbar_V2.vue'
import Navbar_V3 from '../components/Navbar_V3.vue'
import login from '../view/login.vue'
import alert_test from '../view/alert_test.vue'
import MissionGeneralView from '../view/MissionGeneralView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [

    // {
    //   path: '/',
    //   name: 'alert_test',
    //   component: alert_test
    // },
    {
      path: '/',
      name: 'MissionGeneralView',
      component: MissionGeneralView
    },
   
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
    {
      path: '/login',
      name: 'login',
      component: login
    },
    
  ]
})

export default router
