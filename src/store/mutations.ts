import type from './type'

export default {
    [type.commit.updateMusicList](state:any ,payload:any){

        state.musicList = payload;


    }
}