import type from "./type"
import getMusicListReslove from '../api/getMusicList'



export default {
    async [type.actions.getMusicList]({ ...context }) {
        let payload: any = await getMusicListReslove;
        console.log(payload);
        context.commit(type.commit.updateMusicList, payload)
    }
}



