<template>
  <section class="container">
      <nav class="navbar navbar-expand-lg navbar-light rounded sticky-top">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 menu fw-bold">
        <li class="nav-item">
          <router-link class="nav-link active" :to="{name: 'NewMusic'}">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" :to="{name: 'HotMusic'}">Hot Music</router-link>
        </li>
        <li class="nav-item dropdown">
          <router-link class="nav-link active" :to="{name: 'NewMusicVideo'}">New Music Video</router-link>
        </li>
        <li class="nav-item">
           <router-link class="nav-link active" :to="{name: 'HotMusicVideo'}">Hot Music Video</router-link>
        </li>
      </ul>
      <div class="d-flex" >
        <input class="form-control me-2" type="search" placeholder="Enter Name Artist" v-model="itemsearch" aria-label="Search" ref="inputtag">
        <button class="btn btn-success" type="submit" v-on:click="searchItem">Search</button>
      </div>
    </div>
  </div>
</nav>
      <div class="row best-music-video d-none d-lg-block mt-2 p-3 bg-white rounded rounded-3">
          <div class="col-12">
              <div class="row header-best-music-video pb-3 border-bottom border-light">
                  <div class="col-6 header pt-1">New Music Video</div>
                  <div class="col-6 show-more-btn text-end">
                      <button class="btn btn-outline-danger" v-on:click="goToNewMusicVideo">Show More</button>
                  </div>
              </div>
              <div class="col-12 mt-3">
                  <div class="row best-music-video">
                      <Carousel :items-to-show="2.5" :wrap-around="true" :autoplay="6000">
    <Slide v-for="newmusicvideo in newmusicvideos" :key="newmusicvideo.id">
      <div class="carousel__item">
          <div class="col-3 img-box1 position-relative text-center w-75">
                          <img :src="newmusicvideo.thumbnail" alt="img" class="rounded rounded-3 img-fluid">
                          <p class="caption">{{ newmusicvideo.title }}</p>
                      </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
                  </div>
              </div>
          </div>
      </div>
      <div class="d-flex mt-3 bg-white rounded rounded-3">
          <div class="w-25 hot-video d-none d-lg-block me-2 border-end">
              <div class="row header-hot-video p-1 border-bottom border-light">
                  <div class="col-6 header p-3 text-dark fs-6">Hot Video</div>
                  <div class="col-6 show-more-btn text-end">
                      <button class="btn btn-outline-danger m-1" v-on:click="showMoreHotMusicVideo">Show More</button>
                  </div>
              </div>
              <div class="row show-hot-video mt-2" v-for="hotmusicvideo in hotmusicvideos" :key="hotmusicvideo.id">
                  <div class="col-3 img">
                      <img :src="hotmusicvideo.thumbnail" alt="img" class="ms-1 w-100">
                  </div>
                  <div class="col-9 title-hot-video">{{ hotmusicvideo.title }} <p class="text-muted">{{ hotmusicvideo.views }} viwe</p></div>
              </div>
          </div>
          <div class="new-music col-12 col-lg-6">
              <router-view></router-view>
          </div>
          <div class="w-25 hot-music d-none d-lg-block ms-2 border-start">
              <div class="row header-hot-music p-1 border-bottom border-light">
                  <div class="col-6 header p-3 text-dark">Hot Music</div>
                  <div class="col-6 show-more-btn text-end">
                      <button class="btn btn-outline-danger m-1" v-on:click="showMoreHotmusic">Show More</button>
                  </div>
              </div>
                  <div class="row show-hot-music mt-2" v-for="hotmusic in hotmusics" :key="hotmusic.id">
                  <div class="col-3 img-hot-music">
                      <img :src="hotmusic.thumbnail" alt="img" class="ms-1 w-100">
                  </div>
                  <div class="col-9 title-hot-music">{{ hotmusic.title }} <p class="text-muted">{{ hotmusic.plays }} viwe</p></div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
import {ref} from 'vue';
import { Carousel , Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { useRouter } from 'vue-router';
export default {
    name: 'Section' , 
    components: {
    Carousel,
    Slide,
  },
    setup(){
        const inputtag = ref();
        const router = useRouter(); 
        const store = useStore();
        const hotmusics = computed(function(){
           return store.state.hotmusic;
        });
        const hotmusicvideos = computed(function(){
           return store.state.hotmusicvideos;
        });
        const newmusicvideos = computed(function(){
            return store.state.newmusicvideos;
        });
      function getNewmusic(){
       async function getData(){
            let response = await fetch('https://one-api.ir/radiojavan/?token=343050:60d87b72a4b9e8.68277188&action=new_songs');
            let data = response.json();
            return data;
        }
        getData().then(function(data){
            store.dispatch('changeNewmusic' , data);
        });
    }
    function getHotmusic(){
       async function getData(){
           let response = await fetch('https://one-api.ir/radiojavan/?token=343050:60d87b72a4b9e8.68277188&action=hot_songs');
           let data = response.json();
           return data;
        }
        getData().then(function(data){
            store.commit('changehotmusic' , data);
        });
    }
    function getHotmusicvideos(){
       async function getData(){
           let response = await fetch('https://one-api.ir/radiojavan/?token=343050:60d87b72a4b9e8.68277188&action=hot_videos');
           let data = response.json();
           return data;
        }
        getData().then(function(data){
            store.dispatch('changeHotmusicvideos' , data);
        });
    }
    function getNewmusicvideos(){
       async function getData(){
            let response = await fetch('https://one-api.ir/radiojavan/?token=343050:60d87b72a4b9e8.68277188&action=new_videos');
            let data = response.json();
            return data;
        }
        getData().then(function(data){
            store.dispatch('changeNewmusicvideos' , data);
        });
    }
    function showMoreHotmusic(){
        router.push({ name: 'HotMusic'})
    }
    function showMoreHotMusicVideo(){
        router.push({ name: 'HotMusicVideo'})
    }
    function goToNewMusicVideo(){
        router.push({name: 'NewMusicVideo'})
    }
    const itemsearch = ref();
    function searchItem(){
        inputtag.value.value = '';
     async function search(){
       let response = await fetch(`https://one-api.ir/radiojavan/?token=343050:60d87b72a4b9e8.68277188&action=search&q=${itemsearch.value}`);
       let data = response.json();
       return data;
      }
      search().then(function(data){
        store.dispatch('changeSearchItem' , data);
      });
      router.push({name: 'ShowSearchResult'});
    }
    getNewmusic();
    getHotmusic();
    getHotmusicvideos();
    getNewmusicvideos();
    return{ inputtag , searchItem , itemsearch , hotmusics , hotmusicvideos , showMoreHotmusic , showMoreHotMusicVideo , newmusicvideos , goToNewMusicVideo}
    }
}
</script>

<style scoped>
nav.navbar {
    background-color: #A10167;
}
ul.menu li a{
    color: white !important;
}
ul.menu li:hover{
    background-color: #860057;
}
a.router-link-exact-active{
  background-color: #540036;
}
div.header{
    color: #A10167;
    font-weight: bold;
}
p.caption{
    position: absolute;
    top: 85%;
    left: 10%;
    background-color: rgb(158, 0, 100 , 0.4);
    width: 80%;
    color: white;
    display: none;
    z-index: 1;
}
div.img-box1:hover p.caption{
    display: block;
}
div.btn-download button{
    background-color: #A10167;
    color: white;
    width: 100%;
    border: none;
}
div.btn-like button{
    background-color: gray;
    color: white;
    width: 100%;
    border: none;
}

 div.title-hot-music , div.title-hot-music p , div.title-hot-video , div.title-hot-video p{
    font-size: 0.8rem;
}
li.carousel__slide{
    width: 33% !important;
}

</style>