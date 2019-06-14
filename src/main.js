import Vue from 'vue'
import App from './App'
import ls from './utils/localStorage'
import http from './utils/http'
import store from './store'

// 引入colorUi_CSS类库
import '../static/colorui/main.wxss'
import '../static/colorui/icon.wxss'


Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$ls = ls
Vue.prototype.$http = http
Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()
