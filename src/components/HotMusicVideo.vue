<template>
  <div class="row header-hot-music-video p-1 border-bottom border-light">
                  <div class="col-12 text-center header p-3 fw-bold">Hot Music Video</div>
              </div>
              <div class="row show-hot-music-video pb-3" v-for="hotmusicvideo in hotmusicvideos" :key="hotmusicvideo.id">
                  <div class="col-12 title text-center p-4 fw-bold">{{ hotmusicvideo.title }}</div>
                  <div class="col-12 img">
                      <img :src="hotmusicvideo.photo" alt="img" class="w-100">
                  </div>
                  <div class="col-12 creator">
                      <div class="row p-4 fw-bold">
                          <div class="col-12 text-center">Artist : {{ hotmusicvideo.artist }}</div>
                          <div class="col-12 text-center">Song : {{ hotmusicvideo.song }}</div>
                          <div class="col-12 text-center">Created_at : {{ hotmusicvideo.created_at }}</div>
                          <div class="col-12 text-center">Type : {{ hotmusicvideo.type }}</div>
                          <div class="col-12 text-center">Viwe : {{ hotmusicvideo.views }}</div>
                      </div>
                  </div>
                  <div class="col-12 download">
                      <div class="row">
                          <div class="col-4 btn-download">
                              <a :href="hotmusicvideo.link" target="_balnk" class="p-2 btn btn-info text-white w-100">Download</a>
                          </div>
                          <div class="col-4 btn-like">
                              <button class="btn btn-success p-2 w-100" v-on:click.once="hotmusicvideo.likes++">{{ hotmusicvideo.likes }} Like</button>
                          </div>
                          <div class="col-4 btn-dislike">
                              <button class="btn btn-danger p-2 w-100" v-on:click.once="hotmusicvideo.dislikes++">{{ hotmusicvideo.dislikes }} Dislike</button>
                          </div>
                      </div>
                  </div>
              </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
    name: 'HotMusicVideo' , 
    setup(){
        const store = useStore();
        const hotmusicvideos = computed(function(){
           return store.state.hotmusicvideos;
        });
        return{ hotmusicvideos }
    }
}
</script>

<style>

</style>