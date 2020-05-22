<template>
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
          <v-btn text @click="clearForm">Cancel</v-btn>
          <v-btn class="add-button" @click="submitContact">Submit</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

  export default {
    name: 'ContactForm',
    props: {
      contact:{
        id:'',
        name: '',
        email: '',
        phone: '',
        gender:'',
        img:''
      },
      submit: { type: Function },
      clear: { type: Function },
    },
    mixins: [validationMixin],
    validations: {
      name: { required},
      email: { required, email },
      phone: { required},
      gender: { required },
    },
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
      submitContact() {
        this.$v.$touch()
        if(this.checkContact(this.contact)){
          this.submit()
          this.clearForm()
        }
        
      },
      checkContact(contact){
        if(contact.name && contact.email && contact.phone && contact.gender){
          return true
        }else{
          return false
        }
      },
      clearForm () {
        this.$v.$reset()
        this.clear()
      },
      
    }
  }
  
</script>
