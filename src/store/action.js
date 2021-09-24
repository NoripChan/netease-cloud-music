/*
 * @Author: Norip Chan
 * @Date: 2021-09-17 15:04:08
 * @LastEditTime: 2021-09-22 14:02:41
 * @LastEditors: Norip Chan
 * @Description:
 * @FilePath: \netease-cloud-music\src\store\action.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import type from "./type";
import getMusicListReslove from '../api/getMusicList';
export default {
    async [type.actions.getMusicList]({ ...context }) {
        let payload = await getMusicListReslove;
        console.log(payload);
        context.commit(type.commit.updateMusicList, payload);
    },
};
//# sourceMappingURL=action.js.map