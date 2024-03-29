import {createApp} from 'vue'
import App from './App.vue'
import router from './router';
import {IonicVue} from '@ionic/vue';
import './tailwind.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './plugins/storage'
import {store} from "@/store";

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import './assets/fonts.css'


/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
axios.defaults.baseURL = 'https://priem.kgsxa.ru/'
// axios.defaults.baseURL = 'http://192.168.103:8075/'

const app = createApp(App)
    .use(IonicVue)
    .use(router)
    .use(VueAxios, axios)
    .use(store)

router.isReady().then(() => {
    app.mount('#app');
});