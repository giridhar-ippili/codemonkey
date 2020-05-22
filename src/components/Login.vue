<template>
  <div class="login">    
    <form class="login-form" >
    <h1 class="login-text">Welcome to Buddy Keeper</h1>
    <label>Name*</label>
    <v-text-field
      v-model="loggedUser.name"
      :error-messages="nameErrors"
      required
      outlined
      class="login-input col-6"
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <label>Email*</label>
    <v-text-field
      v-model="loggedUser.email"
      :error-messages="emailErrors"
      required
      outlined
      class="login-input col-6"
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-btn class="login-button" @click="submit">Take me in!</v-btn>
  </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'

  export default {
    name: 'Login',
    mixins: [validationMixin],
    validations: {
      name: { required},
      email: { required, email },
    },

    data: () => ({
     loggedUser:{
        name:'',
        email:''
      }
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.loggedUser.name && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.loggedUser.email && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
        if(this.loggedUser.name && this.loggedUser.email){
          this.$store.dispatch("setLoggedUser", this.loggedUser);
          this.$router.push('/home')
        }        
      },
      clear () {
        this.$v.$reset()
        this.loggedUser.name = ''
        this.loggedUser.email = ''
      },
    },
  }
</script>

