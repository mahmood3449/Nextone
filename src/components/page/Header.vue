<template>
  <div class="container-fluid">
      <div class="row">
          <div class="line col-12"></div>
      </div>
  </div>
  <div class="container">
      <header class="row">
          <div class="banner col-12 bg-light">
             <img src="../../assets/img/banner.png" alt="banner" class="img-fluid">
          </div>
      </header>
  </div>
</template>

<script>

export default {
  name: 'Header' , 
}
</script>

<style scoped>
nav.navbar{
  position: sticky;
  top: 0;
}
div.line{
    border: 8px solid #A10167;
}
</style>