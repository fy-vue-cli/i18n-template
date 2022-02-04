import VueI18n from 'vue-i18n'
import Vue from 'vue'
import messages from './messages'

if(!localStorage.getItem('language')){
    //初始化语言
    localStorage.setItem('language', 'cn')
}

Vue.use(VueI18n)



// 暴露i18的实例化对象
export default new VueI18n({
    locale: localStorage.getItem('language'),
    messages,
    silentTranslationWarn: true
})