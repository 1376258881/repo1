import Vue from 'vue'
import Router from 'vue-router'
import aaa from '../views/aaa.vue'
import bbb from '../views/bbb.vue'
import ccc from '../views/ccc.vue'
import ddc from '../views/ddc.vue'
import eee from '../views/eee.vue'
import fff from '../views/fff.vue'
Vue.use(Router)

export default new Router({
  routes: [
      {
        component:aaa,
        path:'/',      
      },
      {
        component:aaa,
        path:'/aaa',      
      },
      {
        component:bbb,
        path:'/bbb',
        children: [
          {
          name:'ccc',
          path: 'ccc',
          component:ccc,
          children:[
            {
              component:eee,
              path:'eee/:id',      
            },
            {
              component:fff,
              path:'fff/:id',      
            },
          ]
          },
          {
          name:'ddc',
          path: 'ddc',
          component:ddc
          }
        ]
      },
      
  ]
})
