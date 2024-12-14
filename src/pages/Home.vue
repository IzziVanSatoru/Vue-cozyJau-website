<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <h1 class="hero-title">Discover & Delight</h1>
      <p class="hero-description">Exploring the world through travel, cooking, and lifestyle tips.</p>
      <div class="subscribe">
        <input type="email" placeholder="Enter your email" />
        <button class="btn-subscribe">Subscribe</button>
      </div>
      <div class="ratings">⭐⭐⭐⭐⭐ Trusted by readers worldwide</div>
    </section>

    <!-- Welcome Section -->
    <section class="welcome">
      <h2 class="welcome-title">Welcome to My Cozy Corner</h2>
      <p class="welcome-description">Join me on a delightful journey of discovery and inspiration.</p>
      <img src="../assets/3dWeb.webp" alt="Exploring the world" class="welcome-image" />
    </section>

    <!-- Interactive Timeline Section -->
    <section class="timeline">
      <h2 class="timeline-title">Our Journey</h2>
      <div class="timeline-events">
        <div class="timeline-event" v-for="(event, index) in timeline" :key="index">
          <div class="timeline-date">{{ event.date }}</div>
          <div class="timeline-description">{{ event.description }}</div>
        </div>
      </div>
    </section>

    <!-- Progress Tracker Section -->
    <section class="progress">
      <h2 class="progress-title">Visual Progress Tracker</h2>
      <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
      <div class="progress-info">
        <p>Progress: {{ progress }}%</p>
        <button @click="incrementProgress">Increase Progress</button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import gsap from "gsap";

export default defineComponent({
  name: "Home",
  setup() {
    // Timeline Data
    const timeline = [
      { date: "January", description: "Started the journey with inspiration." },
      { date: "March", description: "Explored new destinations." },
      { date: "June", description: "Dived into cooking adventures." },
      { date: "September", description: "Reached a milestone in lifestyle." }
    ];

    // Progress Tracker Data
    const progress = ref(0);

    const incrementProgress = () => {
      if (progress.value < 100) {
        progress.value += 10;
      }
    };

    onMounted(() => {
      gsap.from(".hero-title", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
      gsap.from(".hero-description", { duration: 1.2, y: -30, opacity: 0, delay: 0.3, ease: "power2.out" });
      gsap.from(".subscribe", { duration: 1.5, scale: 0.8, opacity: 0, delay: 0.6, ease: "elastic.out(1, 0.75)" });
      gsap.from(".ratings", { duration: 1.8, opacity: 0, delay: 1, ease: "power2.out" });
      gsap.from(".welcome-title", { duration: 1, x: -50, opacity: 0, ease: "power2.out" });
      gsap.from(".welcome-description", { duration: 1.2, x: 50, opacity: 0, delay: 0.3, ease: "power2.out" });
      gsap.from(".welcome-image", { duration: 1.5, scale: 0.5, opacity: 0, delay: 0.6, ease: "elastic.out(1, 0.75)" });
    });

    return { timeline, progress, incrementProgress };
  }
});
</script>

<style scoped>
/* Gaya umum */
.home {
  background-color: #f9f6f2;
  color: #333;
  padding: 2rem;
  font-family: "Noto Sans JP", sans-serif;
  line-height: 1.6;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 2rem 0;
  background: linear-gradient(135deg, #fef6e4 0%, #ffdbc5 100%);
  border-radius: 20px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 2.8rem;
  color: #b22222;
  margin-bottom: 0.5rem;
}

.hero-description {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1.5rem;
}

.subscribe {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.hero input {
  padding: 0.6rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  width: 250px;
}

.btn-subscribe {
  background-color: #ff6347;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-subscribe:hover {
  background-color: #e5533c;
  transform: scale(1.05);
}

.ratings {
  font-size: 1rem;
  color: #777;
  margin-top: 1rem;
  font-style: italic;
}

/* Welcome Section */
.welcome {
  text-align: center;
  padding: 2.5rem 0;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.05);
}

.welcome-title {
  font-size: 2.2rem;
  color: #b22222;
  margin-bottom: 0.5rem;
}

.welcome-description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
}

.welcome-image {
  max-width: 40%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.welcome-image:hover {
  transform: scale(1.05);
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.15);
}

/* Interactive Timeline Section */
.timeline {
  text-align: center;
  padding: 2rem 0;
}

.timeline-title {
  font-size: 2rem;
  color: #b22222;
  margin-bottom: 1rem;
}

.timeline-events {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.timeline-event {
  background-color: #ffdbc5;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 10px;
  width: 200px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
}

.timeline-date {
  font-weight: bold;
  color: #b22222;
}

.timeline-description {
  color: #555;
}

/* Progress Tracker Section */
.progress {
  text-align: center;
  padding: 2rem 0;
}

.progress-title {
  font-size: 2rem;
  color: #b22222;
  margin-bottom: 1rem;
}

.progress-bar-container {
  width: 100%;
  background-color: #ddd;
  border-radius: 20px;
  height: 30px;
  margin-bottom: 1rem;
}

.progress-bar {
  height: 100%;
  background-color: #ff6347;
  border-radius: 20px;
}

.progress-info p {
  font-size: 1.1rem;
  color: #555;
}

.progress-info button {
  background-color: #ff6347;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.progress-info button:hover {
  background-color: #e5533c;
  transform: scale(1.05);
}
</style>
