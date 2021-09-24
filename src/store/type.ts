/*
 * @Author: Norip Chan
 * @Date: 2021-09-17 15:04:08
 * @LastEditTime: 2021-09-22 13:59:03
 * @LastEditors: Norip Chan
 * @Description: 
 * @FilePath: \netease-cloud-music\src\store\type.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */

export default {
    actions :{
        getMusicList:'getMusicList',
        getPlayList:'getPlayList',

    },
    commit:{
        updateMusicList:'UPDATEMUSICLIST',
        updatePlayList:'UPDATEPLAYLIST',

    }
}