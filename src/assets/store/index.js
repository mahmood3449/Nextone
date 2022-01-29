import { createStore } from 'vuex';
const store = createStore({
    state: {
        newmusic: '', 
        hotmusic: '',
        newmusicvideos: '',
        hotmusicvideos: '' , 
        searchitem: ''
    } ,
    mutations: {
        changeNewmusic(state , data){
            state.newmusic = data.result;
        } ,
        changehotmusic(state , data){
            state.hotmusic = data.result;
        } ,
        changeHotmusicvideos(state , data){
            state.hotmusicvideos = data.result;
        } , 
        changeNewmusicvideos(state , data){
            state.newmusicvideos = data.result;
        } , 
        changeSearchItem(state , data){
            state.searchitem = data.result.mp3s;
        }
    } , 
    actions: {
        changeNewmusic(context , data){
            context.commit('changeNewmusic' , data);
        } ,
        changehotmusic(context , data){
            context.commit('changehotmusic' , data);
        } ,
        changeHotmusicvideos(context , data){
            context.commit('changeHotmusicvideos' , data);
        } ,
        changeNewmusicvideos(context , data){
            context.commit('changeNewmusicvideos' , data);
        } ,
        changeSearchItem(context , data){
            context.commit('changeSearchItem' , data)
        }
    }
});
export default store;