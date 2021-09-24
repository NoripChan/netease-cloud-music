/*
 * @Author: Norip Chan
 * @Date: 2021-09-17 15:04:08
 * @LastEditTime: 2021-09-22 12:59:21
 * @LastEditors: Norip Chan
 * @Description: 
 * @FilePath: \netease-cloud-music\src\store\mutations.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import type from './type'

export default {
    [type.commit.updateMusicList](state:any ,payload:any){

        state.musicList = payload;


    },
    [type.commit.updatePlayList](state:any,payload:any) {
        state.playlist = payload;
    }
}