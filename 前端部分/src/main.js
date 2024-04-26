import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
//引入函数createPinia()，用于创建Pinia示例对象
import {createPinia} from 'pinia'
//通过createPinia()，创建pinia实例对象
const pinia = createPinia()
const app = createApp(App)
app.use(router)
//在Vue实例中注册pinia实例对象（通常被称为插件，第三方的组件），全局可用
app.use(pinia)
app.mount('#app')
//连写形式
//createApp(App).use(router).use(pinia).mount('#app')

