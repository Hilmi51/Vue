import { createApp } from 'vue'
import Vue from  'vue'
import App from './App.vue'

export const eventBus = new Vue();

createApp(App).mount('#app')
