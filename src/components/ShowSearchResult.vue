<template>
  <div class="row header-new-music p-1 border-bottom border-light">
                  <div class="col-12 text-center header p-3 fw-bold">Show Search Result</div>
              </div>
              <div class="shownotfound text-center fs-3 fw-bold text-danger mt-5" v-if="searchitems.length == 0">
                  <p>Sorry, no results were found</p>
              </div>
              <div v-else class="row show-new-music pb-3" v-for="searchitem in searchitems" :key="searchitem.id">
                  <div class="col-12 title text-center p-4 fw-bold">{{ searchitem.title }}</div>
                  <div class="col-12 img">
                      <img :src="searchitem.photo" alt="img" class="w-100">
                  </div>
                  <div class="col-12 creator">
                      <div class="row p-4 fw-bold">
                          <div class="col-12 text-center">Artist : {{ searchitem.artist }}</div>
                          <div class="col-12 text-center">Song : {{ searchitem.song }}</div>
                          <div class="col-12 text-center">Created_at : {{ searchitem.created_at }}</div>
                          <div class="col-12 text-center">Type : {{ searchitem.type }}</div>
                          <div class="col-12 text-center">Viwe : {{ searchitem.downloads }}</div>
                      </div>
                  </div>
                  <div class="col-12 download">
                      <div class="row">
                          <div class="col-4 btn-download">
                              <a :href="searchitem.link" target="_balnk" class="p-2 btn btn-info w-100 text-white">Download</a>
                          </div>
                          <div class="col-4 btn-like">
                              <button class="btn btn-success p-2 w-100" v-on:click.once="searchitem.likes++">{{ searchitem.likes }} Like</button>
                          </div>
                          <div class="col-4 btn-dislike">
                              <button class="btn btn-danger p-2 w-100" v-on:click.once="searchitem.dislikes++">{{ searchitem.dislikes }} Dislike</button>
                          </div>
                      </div>
                  </div>
              </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex';
export default {
    name: 'ShowSearchResult' , 
    setup(){
        const store = useStore();
        const searchitems = computed(function(){
           return store.state.searchitem;
        });
        return{ searchitems }
    }
}
</script>

<style>

</style>