<template>
  <div class="home-container">
    <div class="hero-section">
      <h1>Welcome to Our Vue.js Application</h1>
      <p>A modern, responsive web application built with Vue 3 and PrimeVue components.</p>
      <Button label="Get Started" icon="pi pi-arrow-right" class="p-button-lg" />
    </div>

    <div class="features-section">
      <h2>Key Features</h2>
      <div class="features-grid">
        <Card class="feature-card">
          <template #header>
            <i class="pi pi-bolt feature-icon"></i>
          </template>
          <template #title>Fast & Responsive</template>
          <template #content>
            Built with Vue 3's Composition API and optimized for performance across all devices.
          </template>
        </Card>

        <Card class="feature-card">
          <template #header>
            <i class="pi pi-palette feature-icon"></i>
          </template>
          <template #title>Modern UI Components</template>
          <template #content>
            Leveraging PrimeVue's rich component library for a beautiful and consistent user experience.
          </template>
        </Card>

        <Card class="feature-card">
          <template #header>
            <i class="pi pi-cog feature-icon"></i>
          </template>
          <template #title>Highly Customizable</template>
          <template #content>
            Easily customize themes, layouts, and functionality to meet your specific requirements.
          </template>
        </Card>
      </div>
    </div>

    <div class="getting-started-section">
      <h2>Getting Started</h2>
      <p>Explore our application by navigating through the menu. Visit the About page to learn more about our project or contact us if you have any questions.</p>
      <div class="action-buttons">
        <Button label="About Us" icon="pi pi-info-circle" @click="navigateToAbout" class="p-button-outlined p-button-secondary mr-2" />
        <Button label="Contact" icon="pi pi-envelope" @click="navigateToContact" class="p-button-outlined" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Button from 'primevue/button';
import Card from 'primevue/card';

const router = useRouter();

const navigateToAbout = () => {
  router.push('/about');
};

const navigateToContact = () => {
  router.push('/contact');
};
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero-section {
  text-align: center;
  padding: 4rem 1rem;
  margin-bottom: 3rem;
  background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  color: white;
  border-radius: 8px;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.features-section {
  margin-bottom: 3rem;
}

.features-section h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  height: 100%;
}

.feature-icon {
  font-size: 2rem;
  color: #4facfe;
  display: block;
  text-align: center;
  padding: 1rem 0;
}

.getting-started-section {
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.getting-started-section h2 {
  margin-bottom: 1rem;
}

.getting-started-section p {
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .action-buttons .p-button {
    margin: 0.5rem 0;
  }
}
</style>
