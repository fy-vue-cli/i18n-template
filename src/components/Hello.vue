<template>
    <div id="hello">
        <h2>{{$t('hello.hello')}}</h2>
        <button @click="switchLanguage">{{$t('hello.switch')}}</button>
    </div>
</template>

<script>

export default {
    name: 'hello',
    methods: {
        // 切换语言
        switchLanguage(){
            let lang = window.localStorage.getItem('language')

            lang == 'en' ? lang = 'cn' : lang = 'en'

            window.localStorage.setItem('language', lang)

            this.$i18n.locale = lang
        }
    },
    mounted(){
        console.log(this)
    }
}

</script>

<style>
    #app{
        margin: 0 auto;
        text-align: center;
    }
    button{
        position: absolute;
        top: 20px;
        right: 50px;
    }
</style>