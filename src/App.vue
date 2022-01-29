<template>
<div class="bg-light">
  <Header />
  <Section />
  <Footer />
</div>
</template>

<script>
import Header from './components/page/Header.vue';
import Section from './components/page/Section.vue';
import Footer from './components/page/Footer.vue';
export default {
  name: 'App',
  components: {
    Header , 
    Section , 
    Footer
  }
}
</script>

<style scoped>

</style>
