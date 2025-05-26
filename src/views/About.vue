<template>
<<<<<<< HEAD
    About me
    <Counter />
</template>

<script setup>
import Counter from '../components/Counter.vue'
</script>
=======
  <div class="about-container">
    <div class="about-section">
      <h1>About Our Application</h1>
      <p>This is a Vue 3 application template with Pinia state management, PrimeVue components, and Vue Router.</p>
      <p>Below you can see our interactive counter component that demonstrates Pinia store usage.</p>
    </div>
    
    <div class="counter-section">
      <h2>Try Our Interactive Counter</h2>
      <Counter />
    </div>
  </div>
</template>

<script setup>
import Counter from '@/components/Counter.vue';
</script>

<style scoped>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.about-section {
  margin-bottom: 3rem;
  text-align: center;
}

.about-section h1 {
  margin-bottom: 1rem;
}

.counter-section {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
}

.counter-section h2 {
  margin-bottom: 2rem;
}
</style>
>>>>>>> 3a350fe089462ad99160dbc29e89dbbaa2085d77
