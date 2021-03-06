import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/reset.css';
import './JS/rem';
import '../src/assets/font_2800797_pn7mjq3e5b/iconfont.css';
import '../src/assets/font_2800797_pn7mjq3e5b/iconfont.js';
import 'default-passive-events';
import { NavBar, Swipe, SwipeItem, Lazyload } from 'vant';
createApp(App).use(store).use(router).use(NavBar).use(Swipe).use(SwipeItem).use(Lazyload).mount('#app');
//# sourceMappingURL=main.js.map