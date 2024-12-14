<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">和 cozy Blog</div>
      <nav class="footer-nav">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
        <a href="#">FAQs</a>
        <a href="#">Sitemap</a>
      </nav>
      <div class="footer-text">© 2023 Harmony Blog. All Rights Reserved.</div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style scoped>
/* Footer Base */
.footer {
  background: linear-gradient(135deg, #222, #333);
  color: #e0e0e0;
  height: 48px; /* Tinggi sedang */
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans JP", sans-serif;
  box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1000;
}

/* Container for Layout */
.footer-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem; /* Memastikan isi tidak keluar */
  margin: 0 auto;
}

/* Footer Brand */
.footer-brand {
  font-size: 1rem;
  font-weight: bold;
  color: #ffd700; /* Golden accent */
  text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
  white-space: nowrap; /* Mencegah teks melipat */
}

/* Navigation Links */
.footer-nav {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-nav a {
  color: #e0e0e0;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: bold;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;
}

/* Hover Effects */
.footer-nav a:hover {
  color: #ffcc00;
  transform: translateY(-2px);
}

.footer-nav a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background: #ffcc00;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.footer-nav a:hover::after {
  transform: scaleX(1);
}

/* Footer Text */
.footer-text {
  color: #aaa;
  font-size: 0.75rem;
  text-align: center;
  text-shadow: 0 0 3px rgba(255, 255, 255, 0.2);
}

/* Responsive Design */
@media (min-width: 768px) {
  .footer-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .footer-nav {
    gap: 1.5rem;
  }
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .footer-nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .footer-brand {
    font-size: 0.85rem;
  }

  .footer-text {
    font-size: 0.65rem;
  }
}
</style>
