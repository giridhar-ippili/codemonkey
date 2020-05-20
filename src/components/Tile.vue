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
      <v-btn
        fab
        small
      >
        <v-icon class="icons">mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        fab
        small
      >
        <v-icon class="icons">mdi-delete</v-icon>
      </v-btn>
    </v-speed-dial>  
      </div>
      <img :src=contact.img alt='contact-img'/>
      <p>{{contact.phone}}</p>
      <p>{{contact.email}}</p>      
    </div>  
</template>
<script>
  export default {
    props: {
      contact:{
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
    }), 
    created: function() {
        console.log(this.contact)
    }  
  }
</script>



