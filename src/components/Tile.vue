<template>
    <div class='note'> 
      <div class ="row">
      <h3 class="col-10">{{contact.name}}</h3> 
      <v-speed-dial
        v-model="fab"
        :top="true"
        :right="true"
        :direction="direction"
        :transition="transition"
        class="col-2 speed-dail"
      >
      <template v-slot:activator>
        <v-btn v-model="fab" icon >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <EditContact :contact="contact"/>
      <ConfirmDialog :contact="contact"/>
    </v-speed-dial>  
      </div>
      <img :src=contact.img alt='contact-img'/>
      <p>{{contact.phone}}</p>
      <p>{{contact.email}}</p>      
    </div>  
</template>
<script>
import ConfirmDialog from './ConfirmDialog.vue'
import EditContact from './EditContact.vue'
  export default {
    name: 'Tile',
    components: {
     ConfirmDialog,
     EditContact
    },
    props: {
      contact:{
        id:'',
        name: '',
        email: '',
        phone: '',
        gender:'',
        img:''
      }
    },
    data: () => ({
      fab:false,
      direction:"bottom",
      transition:"slide-y-reverse-transition",
    })
  }
</script>



