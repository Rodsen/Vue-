//---------------------------基础配置区
//  引入vue.js
import Vue from "vue"
//  引入vue-router.js
import VueRouter from "vue-router"
Vue.use (VueRouter)
import router from "./router"
//------------------------------底部区
//  引入首页渲染组件
import App from "./App.vue"
//  Vue实例对象
var vm = new Vue ({
    el: "#app",
    render: c=>c (App),
    router
})