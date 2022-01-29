import { createRouter , createWebHistory } from 'vue-router';
import NewMusic from './components/NewMusic.vue';
import HotMusic from './components/HotMusic.vue';
import HotMusicVideo from './components/HotMusicVideo.vue';
import NewMusicVideo from './components/NewMusicVideo.vue';
import ShowSearchResult from './components/ShowSearchResult.vue';
const routes = [
    {path: '/' , component: NewMusic , name: 'NewMusic'} , 
    {path: '/HotMusic' , component: HotMusic , name: 'HotMusic'} , 
    {path: '/HotMusicVideo' , component: HotMusicVideo , name: 'HotMusicVideo'} ,
    {path: '/NewMusicVideo' , component: NewMusicVideo , name: 'NewMusicVideo'} ,
    {path: '/ShowSearchResult' , component: ShowSearchResult , name: 'ShowSearchResult'}
];

const router = new createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes 

})


export default router;