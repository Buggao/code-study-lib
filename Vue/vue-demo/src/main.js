import { createApp } from 'vue'
import SeconeLevel from './components/SeconeLevel.vue'
import 'virtual:uno.css'
import './style.css'
import App from './App.vue'

import router from './router'

const app = createApp(App);
app.component('SeconeLevel', SeconeLevel);
app.use(router);
app.mount('#app');
