import axios from 'axios';

export default axios.get("/personalized",{
    params:{
        limit:10,
    }
}).then (res=>{
    return res.data.result;
})