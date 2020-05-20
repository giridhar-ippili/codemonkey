<template>
  <div>
    <Header/>
    <div v-for="contact in getContacts" :key="getContacts.indexOf(contact)">
      <Tile :contact="contact"/>
    </div>
    <h5 v-if = "getContacts.length == 0" class="initial-text">Your contacts looks empty. Click on <v-icon>mdi-plus</v-icon> button to add.</h5>
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
   data: () => ({
      contacts: []     
    }),
  computed: {
    getContacts() {
      return this.$store.getters.getContacts;
    }
  },
}
</script>
