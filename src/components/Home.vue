<template>
  <div>
    <Header/>
    <h5 class="initial-text">Your contacts looks empty. Click on + button to add.</h5>
    <Footer/>
  </div>
</template>

<script>

import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  
  name: 'Home',
  components: {
    Header,
    Footer
  },
}
</script>
