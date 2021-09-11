import axios from 'axios';
const baseUrl: string = 'http://netease-cloud-music-api-gd796d6r3-noripchan.vercel.app';


export default axios.get(`/api`, {
    params: {
        type: 2
    }
}).then(res => {
    console.log(res.data.banners);
    return res.data.banners.map((item: any) => item.pic)

})


