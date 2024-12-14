<template>
  <header class="navbar">
    <div class="navbar-brand">
      <router-link to="/home" class="logo">和</router-link>
      <button class="menu-toggle" @click="toggleMenu">
        <span :class="{ 'active': isMenuOpen }"></span>
      </button>
    </div>
    <nav :class="{ 'open': isMenuOpen }">
      <router-link to="/about-me">About Me</router-link>
      <router-link to="/travel">Travel</router-link>
      <router-link to="/cooking">Cooking</router-link>
      <router-link to="/lifestyle">Lifestyle</router-link>
    </nav>
    <div class="auth-buttons">
      <router-link to="/signin">Sign In</router-link>
      <router-link to="/join" class="join-btn">Join Now</router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      toggleMenu,
    };
  },
});
</script>

<style scoped>
/* Navbar Container */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #f5f5f5, #e6e6e6);
  border-bottom: 2px solid #dcdcdc;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: "Noto Sans JP", sans-serif;
}

/* Brand Logo */
.navbar-brand {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.logo:hover {
  color: #b22222;
}

/* Menu Toggle (for mobile) */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
}

.menu-toggle span {
  display: block;
  width: 25px;
  height: 3px;
  background: #333;
  margin: 5px 0;
  transition: all 0.3s ease-in-out;
}

.menu-toggle span.active {
  background: #b22222;
}

/* Navbar Links */
nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease, transform 0.2s ease;
}

nav a:hover {
  color: #b22222;
  transform: scale(1.05);
}

.auth-buttons {
  display: flex;
  gap: 1rem;
}

.auth-buttons a {
  color: #333;
  font-size: 0.9rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.auth-buttons a:hover {
  background: #b22222;
  color: white;
  box-shadow: 0 4px 10px rgba(178, 34, 34, 0.5);
}

.join-btn {
  background: #333;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.join-btn:hover {
  background: #b22222;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(178, 34, 34, 0.5);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  nav {
    display: none;
    flex-direction: column;
    gap: 1rem;
    background: #f9f9f9;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    transform: translateY(-100%);
  }

  nav.open {
    display: flex;
    transform: translateY(0);
  }

  .auth-buttons {
    flex-direction: column;
    margin-top: 1rem;
  }
}
</style>
