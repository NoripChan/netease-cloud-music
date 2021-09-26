/*
 * @Author: Norip Chan
 * @Date: 2021-09-17 15:04:08
 * @LastEditTime: 2021-09-26 13:36:30
 * @LastEditors: Norip Chan
 * @Description: 
 * @FilePath: \netease-cloud-music\vue.config.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?'./':'/',
    outputDir:'docs',
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/banner': {
                target: 'http://netease-cloud-music-api-gd796d6r3-noripchan.vercel.app',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '/banner': '/banner'
                }
            },
            '/personalized': {
                target: 'http://netease-cloud-music-api-gd796d6r3-noripchan.vercel.app',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '/personalized': '/personalized'
                }
            },
            '/playlist/detail': {
                target: 'http://netease-cloud-music-api-gd796d6r3-noripchan.vercel.app',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '/playlist/detail': '/playlist/detail'
                }
            },
        }
    }
}