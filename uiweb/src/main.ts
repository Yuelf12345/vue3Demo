import { createApp } from 'vue';
import App from './App.vue';

//element-puls
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElIconModules from  "@element-plus/icons-vue";
 
// echarts
import echarts from './utils/echarts';

//router
import router from '@/router';
import '@/router/permission';
//pinia
import pinia from "@/store";


const app = createApp(App);

 
for(let iconName in ElIconModules){ 
    if (Reflect.has(ElIconModules, iconName)) {
        app.component(iconName,  ElIconModules[iconName])
    }
}

//element-puls
app.use(ElementPlus);
// echarts
app.config.globalProperties.$echarts = echarts

app.use(pinia);
app.use(router);
app.mount('#app');

