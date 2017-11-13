// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Auth from './plugins/Auth'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Auth)

alertify.defaults.notifier.position = 'top-right'
Vue.http.interceptors.push(function (request, next) {
    if(request.url[0] === '/') {
      request.url = process.env.API + request.url
        var token = Vue.auth.getToken()
        if(token) {
          request.headers.set('Autorization', 'Bearer ' + token)
        }
    }
    next(function (response) {
        if(response.status == 422) {
            response.body.errors.forEach(function (e) {
                alertify.error(e)
            })
        }
    })
})

// Configure route guards
router.beforeEach(function (to, from, next) {
    if(to.matched.some(function (record) {return record.meta.requiresGuest})
        && Vue.auth.loggedIn()) {
        next({
            path: '/newsfeed'
        })
    }
    else if(to.matched.some(function (record) {return record.meta.requiresAuth})
        && !Vue.auth.loggedIn()) {
        next({
            path: '/auth/login',
            query: { redirect: to.fullPath}
        })
    }
    else {
      next() // make sure to always call next()
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
