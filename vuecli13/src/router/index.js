import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'
import Hello from '@/components/Hello'
import index0 from '@/components/index0'
import index1 from '@/components/index1'
import index2 from '@/components/index2'
import index3 from '@/components/index3'
import index4 from '@/components/index4'
import index5 from '@/components/index5'
import index6 from '@/components/index6'
import err from '@/components/err'
import index7 from '@/components/index7'

Vue.use(Router);
Vue.prototype.$http = Axios;
Vue.prototype.$Api = "/api";

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components:{
         default:Hello,
         left:index4,
         right:index5
      }
    },
    {
      path:"/index0",
      component:index0,
      children:[
        {path:"/",component:index3},
        {path:"/index1",component:index1},
        {path:"/index2",component:index2}
      ]
    },
    {
      path:"/index6/:a/:b",
      name:"index6",
      component:index6
    },
    {
      path:"/index20",
      redirect:"/"
    },
    {
      path:"*",
      name:"err",
      component:err
    },
    {
      path:"/index7",
      name:"index7",
      component:index7
    }
  ]
})
