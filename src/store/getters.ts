/*
 * @Author: Norip Chan
 * @Date: 2021-09-23 14:58:50
 * @LastEditTime: 2021-09-24 13:53:16
 * @LastEditors: Norip Chan
 * @Description: 
 * @FilePath: \netease-cloud-music\src\store\getters.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */


export default {
    tracks:(state:any)=>state.playlist.tracks,
    ablumByIndex: (state: any,getters:any) => (index :number) => getters.tracks[index].al.name,
    authorByIndex: (state: any, getters: any) => (index: number) => getters.tracks[index].ar[0].name,
    currentPlayImgUrl: (state: any, getters: any) =>  getters.tracks[state.currentPlaying].al.picUrl,
    
}