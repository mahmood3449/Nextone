<template>
  <div class="row header-new-music p-1 border-bottom border-light">
                  <div class="col-12 text-center header p-3 fw-bold">New Music</div>
              </div>
              <div class="row show-new-music pb-3" v-for="newmusic in newmusics" :key="newmusic.id">
                  <div class="col-12 title text-center p-4 fw-bold">{{ newmusic.title }}</div>
                  <div class="col-12 img">
                      <img :src="newmusic.photo" alt="img" class="w-100">
                  </div>
                  <div class="col-12 creator">
                      <div class="row p-4 fw-bold">
                          <div class="col-12 text-center">Artist : {{ newmusic.artist }}</div>
                          <div class="col-12 text-center">Song : {{ newmusic.song }}</div>
                          <div class="col-12 text-center">Created_at : {{ newmusic.created_at }}</div>
                          <div class="col-12 text-center">Type : {{ newmusic.type }}</div>
                          <div class="col-12 text-center">Viwe : {{ newmusic.downloads }}</div>
                      </div>
                  </div>
                  <div class="col-12 download">
                      <div class="row">
                          <div class="col-4 btn-download">
                              <a :href="newmusic.link" target="_balnk" class="p-2 btn btn-info text-white w-100">Download</a>
                          </div>
                          <div class="col-4 btn-like">
                              <button class="btn btn-success p-2 w-100" v-on:click.once="newmusic.likes++">{{ newmusic.likes }} Like</button>
                          </div>
                          <div class="col-4 btn-dislike">
                              <button class="btn btn-danger p-2 w-100" v-on:click.once="newmusic.dislikes++">{{ newmusic.dislikes }} Dislike</button>
                          </div>
                      </div>
                  </div>
              </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'NewMusic' , 
    setup(){
        const store = useStore();
        const newmusics = computed(function(){
           return store.state.newmusic;
        });
        return{ newmusics }
    }
}
</script>

<style scoped>



</style>