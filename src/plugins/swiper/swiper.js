import 'swiper/swiper.less';
import { Swiper, SwiperSlide } from 'swiper/vue';
const plugins = [Swiper, SwiperSlide];
const swiper = {
    install: function (app) {
        plugins.forEach(item => {
            app.component(item.name, item);
        });
    }
};
export default swiper;
//# sourceMappingURL=swiper.js.map