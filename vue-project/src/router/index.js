import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'

import Navbar_V1 from '../components/Navbar_V1.vue'
// import Navbar_V2 from '../components/Navbar_V2.vue'
import Navbar_V3 from '../components/Navbar_V3.vue'
import login from '../view/login.vue'
import alert_test from '../view/alert_test.vue'
import MissionGeneralView from '../view/MissionGeneralView.vue'
import red_line from '../view/line/red.vue'
import green_line from '../view/line/green.vue'
import blue_line from '../view/line/blue.vue'
import yellow_line from '../view/line/yellow.vue'
import brown_line from '../view/line/brown.vue'

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
      component: MissionGeneralView,
      redirect: '/red', // 讓 `/` 預設導向 `/red
      children: [
        {
          path: 'red', // 這裡是子路由，不要加 `/`
          name: 'Red',
          component: red_line,
        },
        {
          path: 'green', // 這裡是子路由，不要加 `/`
          name: 'Green',
          component: green_line,
        },
        {
          path: 'blue', // 這裡是子路由，不要加 `/`
          name: 'Blue',
          component: blue_line,
        },
        {
          path: 'yellow', // 這裡是子路由，不要加 `/`
          name: 'Yellow',
          component: yellow_line,
        },
        {
          path: 'brown', // 這裡是子路由，不要加 `/`
          name: 'Brown',
          component: brown_line,
        },

        

      ]
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
