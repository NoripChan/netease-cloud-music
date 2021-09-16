import axios from 'axios';
const baseUrl: string = 'http://netease-cloud-music-api-gd796d6r3-noripchan.vercel.app';


export default axios.get(`/banner`, {
    params: {
        type: 2
    }
}).then(res => {
    return res.data.banners.map((item: any) => item.pic)

})


