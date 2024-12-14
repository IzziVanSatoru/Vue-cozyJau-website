<template>
  <div id="app" class="page-wrapper">
    <Navbar />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Footer
  },
});
</script>

<style>
/* Mengatur seluruh konten untuk memenuhi tinggi layar dengan footer di bagian bawah */
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1; /* Mengisi ruang antara Navbar dan Footer */
}

#app {
  font-family: Arial, sans-serif;
}
</style>
