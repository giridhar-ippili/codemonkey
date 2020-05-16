<template>
    <header>
      <div class="header-content">
      <h1>Buddies</h1> 
      <h2>{{timeNow}}</h2> 
      <div class ="header-greeting">
      <h5>Hi Buddy</h5> 
      <v-btn class="add-button" fab><v-icon>+</v-icon></v-btn>       
      </div>
    </div>   
    </header>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
        timeNow:""
      };
  },
  computed: {
    ...mapState(['currentTime']),
    ...mapGetters(['getCurrentTime'])
  },
  created() {
     setInterval(this.getNow, 1000);
  },
  methods:{
    getNow() {
      this.timeNow = new Date().toLocaleTimeString()
    }
  }
}
</script>

