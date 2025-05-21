<script setup>
import Button from "primevue/button"
</script>

<template>
  <div>
    <div><Button class="ml-4">Click Me</Button></div>
    <div><Button severity="warn" class="mt-4" @click="alert('Button clicked!')">Alert</Button></div>
    <div><Button class="mt-4">Success</Button></div>
  </div>
</template>

<style scoped>
</style>
