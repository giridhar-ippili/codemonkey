<template>
<div data-app>
  <v-row justify="center">
      <v-dialog v-model="dialog" class= "add-contact-form" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" class="add-button" fab><v-icon>mdi-plus</v-icon></v-btn>
        </template>
        <v-card>
        <v-card-title class="dialog-title">
          <span>Add Contact</span>
        </v-card-title>        
        <br/>
        <v-card-text> 
                <v-text-field 
                    label="Full name" 
                    v-model="contact.name"
                    :error-messages="nameErrors"
                    required 
                    outlined            
                    class="col-12">
                </v-text-field>
                <v-text-field 
                    label="Email" 
                    v-model="contact.email"
                    :error-messages="emailErrors"
                    required
                    outlined
                    class="col-12">
                </v-text-field>
                <v-text-field 
                    label="Mobile Number" 
                    v-model="contact.phone"
                    :error-messages="phoneErrors"
                    required
                    outlined
                    Number
                    class="col-12">
                </v-text-field>
                <v-select
                  :items="['Male', 'Female', 'I dont know']"
                  :error-messages="genderErrors"
                  v-model="contact.gender"
                  label="Gender"
                  required
                  outlined
                  class="col-12"
                ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="clear">Cancel</v-btn>
          <v-btn class="add-button" @click="submit">Add Contact</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </div>
</template>
<script>
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],
    validations: {
      name: { required},
      email: { required, email },
      phone: { required},
      gender: { required },
    },

    data: () => ({
      dialog: false,
      contact:{
        name: '',
        email: '',
        phone: '',
        gender:'',
        img:''
      }
     
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.contact.name && errors.push('Please name your contact.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email && errors.push('Must be valid e-mail!')
        !this.contact.email && errors.push('You cant skip email.')
        return errors
      },
      phoneErrors () {
        const errors = []
        if (!this.$v.phone.$dirty) return errors
        !this.contact.phone && errors.push('Mobile number is required.')
        return errors
      },
      genderErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.contact.gender && errors.push('Please pick one option.')
        return errors
      },
    },

   methods:{
      submit () {
        this.$v.$touch()
        console.log(this.contact)
      },
      clear () {
        this.$v.$reset()
        this.contact = {
        name: '',
        email: '',
        phone: '',
        gender:'',
        img:''
      }
        this.dialog = false
      },
    }
  }
</script>

