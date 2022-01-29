<template>
  <div class="row header-new-music-video p-1 border-bottom border-light">
                  <div class="col-12 text-center header p-3 fw-bold">New Music Video</div>
              </div>
              <div class="row show-new-music-video pb-3" v-for="newmusicvideo in newmusicvideos" :key="newmusicvideo.id">
                  <div class="col-12 title text-center p-4 fw-bold">{{ newmusicvideo.title }}</div>
                  <div class="col-12 img">
                      <img :src="newmusicvideo.photo" alt="img" class="w-100">
                  </div>
                  <div class="col-12 creator">
                      <div class="row p-4 fw-bold">
                          <div class="col-12 text-center">Artist : {{ newmusicvideo.artist }}</div>
                          <div class="col-12 text-center">Song : {{ newmusicvideo.song }}</div>
                          <div class="col-12 text-center">Created_at : {{ newmusicvideo.created_at }}</div>
                          <div class="col-12 text-center">Type : {{ newmusicvideo.type }}</div>
                          <div class="col-12 text-center">Viwe : {{ newmusicvideo.views }}</div>
                      </div>
                  </div>
                  <div class="col-12 download">
                      <div class="row">
                          <div class="col-4 btn-download">
                              <a :href="newmusicvideo.link" target="_balnk" class="p-2 btn btn-info w-100 text-white">Download</a>
                          </div>
                          <div class="col-4 btn-like">
                              <button class="btn btn-success p-2 w-100" v-on:click.once="newmusicvideo.likes++">{{ newmusicvideo.likes }} Like</button>
                          </div>
                          <div class="col-4 btn-dislike">
                              <button class="btn btn-danger p-2 w-100" v-on:click.once="newmusicvideo.dislikes++">{{ newmusicvideo.dislikes }} Dislike</button>
                          </div>
                      </div>
                  </div>
              </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
    name: 'NewMusicVodeo' , 
    setup(){
        const store = useStore();
        const newmusicvideos = computed(function(){
           return store.state.newmusicvideos;
        });
        return{ newmusicvideos }
    }
}
</script>

<style>

</style>