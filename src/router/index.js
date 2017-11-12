import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Auth from '@/components/auth/Auth.vue'
import Login from '@/components/auth/Login.vue'
import Register from '@/components/auth/Register.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/auth',
      name: 'Auth',
        redirect: '/auth/login',
      component: Auth,
        children: [
            {
              path: "login",
              component: Login,
                meta: { requiresGuest: true} // Route for only Guest
            },
            {
                path: "register",
                component: Register,
                meta: { requiresGuest: true} // Route for only Guest
            },
        ]
    }
  ]
})
