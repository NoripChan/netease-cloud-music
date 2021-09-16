import getMusicList from "@/api/getMusicList";
import type from "./type";
export default {
    [type.actions.getMusicList]({ ...context }) {
        let musicList;
        (async () => await getMusicList)().then((res) => {
            console.log(res);
            musicList = res.data.result;
            console.log(musicList);
            console.log('In the action!');
            context.commit(type.commit.updateMusicList, musicList);
        });
    }
};
//# sourceMappingURL=action.js.map