<template>
  <div>
    <Header/>
    <Tile/>
    <!-- <h5 class="initial-text">Your contacts looks empty. Click on + button to add.</h5> -->
    <Footer/>
  </div>
</template>

<script>
import Header from './Header.vue';
import Tile from './Tile.vue';
import Footer from './Footer.vue';

export default {
  
  name: 'Home',
  components: {
    Header,
    Tile,
    Footer
  },
}
</script>
