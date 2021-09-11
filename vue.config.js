module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'http://netease-cloud-music-api-gd796d6r3-noripchan.vercel.app',
                changeOrigin:true,
                ws:true,
                pathRewrite:{
                    '/api':'/banner'
                }
            }
        }
    }
}