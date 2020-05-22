<template>
    <header>
      <div class="header-content">
      <h1>Buddies</h1> 
      <h2>{{timeNow}}</h2> 
      <div class ="header-greeting">
      <h5 v-if="username">Hi {{username}}</h5>
      <h5 v-else>Hi Buddy</h5>
      <AddContact/>   
      </div>
    </div>   
    </header>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AddContact from './AddContact.vue'
export default {
  name: 'Header',
  components: {
    AddContact
  },
  data() {
    return {
        timeNow:"", 
        username:'Buddy'
      };
  },
  computed: {
    ...mapState(['currentTime']),
    ...mapGetters(['getCurrentTime', 'getUser'])
  },
  created() {
     setInterval(this.getNow, 1000);
     this.username = this.getUser.name
  },
  methods:{
    getNow() {
      this.timeNow = new Date().toLocaleTimeString()
    },
  }
}
</script>

