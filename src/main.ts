import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from './plugins/apollo'
import './css/index.css' 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App).provide(DefaultApolloClient,apolloClient).use(store).use(router).mount('#app')
