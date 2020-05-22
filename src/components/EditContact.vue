<template>
<div data-app>
  <v-row justify="center">
      <v-dialog v-model="dialog" class= "add-contact-form" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" fab small @click="submit"><v-icon class="icons">mdi-pencil</v-icon></v-btn>
        </template>
        <ContactForm 
            :contact='editedContact'
            :submit="submit"
            :clear="clear"
        />
    </v-dialog>
  </v-row>
  </div>
</template>
<script>
  import ContactForm from './ContactForm.vue'

  export default {
    name: 'EditContact',
    components: {
      ContactForm
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
      dialog: false,
      editedContact:{}
      
    }),
    created() {
     this.editedContact = {
        id: this.contact.id,
        name: this.contact.name,
        email: this.contact.email,
        phone: this.contact.phone,
        gender: this.contact.gender,
        img:this.contact.img
      }
    },
   methods:{
      submit () {
        this.editContact(this.editedContact)
      },
      editContact(contact) {
       this.$store.dispatch("editContact", contact);
      },
      clear () {
        this.dialog = false
      },
    }
  }
</script>

