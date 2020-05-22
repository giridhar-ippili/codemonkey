<template>
    <v-row justify="center">
    <v-btn
       fab
       small
       @click.stop="dialog = true"
    >
      <v-icon class="icons">mdi-delete</v-icon>
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="400"
    >
      <v-card>
        <v-card-title class="dialog-title">Delete contact?</v-card-title>
        <v-card-text>
            This will permanantly delete the contact. Are you sure want to proceed?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="dialog = false"
          >
            No
          </v-btn>

          <v-btn
            class = "delete-button"
            @click="deleteContact(contact)"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    name: 'ConfirmDialog',
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
    }),
    methods:{
        deleteContact(contact){
            this.dialog = false
            this.$store.dispatch("deleteContact", contact);
        }
    }
  }
</script>



