import Vue from 'vue'
import App from './app.vue'

// 关闭vue环境提示
Vue.config.productionTip = false

// 引入i18n
import i18n from './language/index.js'

new Vue({
    i18n,
    render: (h) => h(App)
}).$mount('#app')