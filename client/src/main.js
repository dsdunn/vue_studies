import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPencilAlt, faTrashAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// David Starr Dunn 
// May 23, 2020
// This is the full-stack branch with dockerized server and graphql db
// Next step is seeding the database in its container
// The master branch is just the front end part of the challenge:
// https://github.com/dsdunn/vue_studies