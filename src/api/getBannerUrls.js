import axios from 'axios';
const baseUrl = 'http://netease-cloud-music-api-gd796d6r3-noripchan.vercel.app';
export default axios.get(`/banner`, {
    params: {
        type: 2
    }
}).then(res => {
    return res.data.banners.map((item) => item.pic);
});
//# sourceMappingURL=getBannerUrls.js.map