/*
 * @Author: your name
 * @Date: 2021-09-17 15:04:08
 * @LastEditTime: 2021-09-23 23:33:51
 * @LastEditors: Norip Chan
 * @Description: In User Settings Edit
 * @FilePath: \netease-cloud-music\src\store\state.ts
 */

const musicList: any[] = [];
const playlist = {
    id: "",
    creator: {},
    tracks: [
        {
            id:0,
            al: {
                name: "",
            },
            ar: [
                {
                    id: 0,
                    name: "",
                    tns: [],
                    alias: []
                }
            ],
        }
    ],

};

export default {
    musicList,
    playlist,

}