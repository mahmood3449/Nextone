<template>
  <footer class="container mt-2">
      <div class="row bg-white rounded rounded-3 justify-content-around">
          <div class="col-12 col-lg-9 text-center">
              <p class="Copyright p-2 mt-2 fw-bold">all Copyright Reserved By Mahmood Karimi</p>
          </div>
          <div class="d-none d-lg-block col-lg-2 top-btn text-end">
              <button class="btn btn-outline-dark mt-3" v-on:click="goToTop">Go To Top</button>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
    name: 'Footer' , 
    setup(){
        function goToTop(){
            document.documentElement.scrollTop = 0;
        }
        return { goToTop }
    }
}
</script>

<style>
p.Copyright{
    margin-left: 28%;
}
</style>