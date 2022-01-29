<template>
  <div class="row header-hot-music p-1 border-bottom border-light">
                  <div class="col-12 text-center header p-3 fw-bold">Hot Music</div>
              </div>
              <div class="row show-hot-music pb-3" v-for="hotmusic in hotmusics" :key="hotmusic.id">
                  <div class="col-12 title text-center p-4 fw-bold">{{ hotmusic.title }}</div>
                  <div class="col-12 img">
                      <img :src="hotmusic.photo" alt="img" class="w-100">
                  </div>
                  <div class="col-12 creator">
                      <div class="row p-4 fw-bold">
                          <div class="col-12 text-center">Artist : {{ hotmusic.artist }}</div>
                          <div class="col-12 text-center">Song : {{ hotmusic.song }}</div>
                          <div class="col-12 text-center">Created_at : {{ hotmusic.created_at }}</div>
                          <div class="col-12 text-center">Type : {{ hotmusic.type }}</div>
                          <div class="col-12 text-center">Viwe : {{ hotmusic.downloads }}</div>
                      </div>
                  </div>
                  <div class="col-12 download">
                      <div class="row">
                          <div class="col-4 btn-download">
                              <a :href="hotmusic.link" target="_balnk" class="p-2 btn btn-info w-100 text-white">Download</a>
                          </div>
                          <div class="col-4 btn-like">
                              <button class="btn btn-success p-2 w-100" v-on:click.once="hotmusic.likes++">{{ hotmusic.likes }} Like</button>
                          </div>
                          <div class="col-4 btn-dislike">
                              <button class="btn btn-danger p-2 w-100" v-on:click.once="hotmusic.dislikes++">{{ hotmusic.dislikes }} Dislike</button>
                          </div>
                      </div>
                  </div>
              </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
    name: 'HotMusic' , 
    setup(){
        const store = useStore();
        const hotmusics = computed(function(){
           return store.state.hotmusic;
        });
        return{ hotmusics }
    }
}
</script>

<style>

</style>