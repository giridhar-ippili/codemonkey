<template>
  <footer>
      <p>Copyright Ⓒ {{getYear()}}</p>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    getYear(){
      const currentDate = new Date();
      return currentDate.getFullYear();       
    }
  }
}
</script>
