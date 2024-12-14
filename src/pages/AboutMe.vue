<template>
  <div class="about-me" ref="aboutMe">
    <!-- Personalized Greeting -->
    <div class="greeting-section">
      <h1>{{ greetingMessage }}</h1>
      <p>Welcome to my personal space. Here, I share everything I love and am proud of.</p>
    </div>

    <!-- Hero Section -->
    <div class="hero-section" ref="heroSection">
      <h1>Welcome to My Profile</h1>
      <p>Explore my personal journey and passions.</p>
    </div>

    <!-- Profile Section -->
    <div class="profile-section">
      <div class="profile-wrapper" ref="profileWrapper">
        <div class="profile-container">
          <img src="../assets/furina-about me.png" alt="Furina" class="profile-picture" ref="profilePicture"/>
        </div>
      </div>
      <div class="description">
        <h2>About Me</h2>
        <p>I am Farizi like Furina, Vestia Zeta, and Mytia Badfort.</p>
      </div>
    </div>

    <!-- Pride Card Section -->
    <div class="pride-card">
      <h2>What I'm Proud Of</h2>
      <div class="pride-content">
        <p>I’m incredibly proud of who I am, my achievements, and the journey I’m on. Embracing every step of the way has shaped me into the person I am today.</p>
        <p>Being unapologetically me and pursuing my passions is what I stand for.</p>
      </div>
    </div>

    <!-- Personal Quote Section -->
    <div class="quote-section">
      <h2>Personal Quote</h2>
      <blockquote>"I'm strongest so Nah'd win"</blockquote>
    </div>

    <!-- Interests Section -->
    <div class="interests-section">
      <h2>My Interests</h2>
      <div class="interests-grid">
        <div class="interest-item">travel</div>
        <div class="interest-item">cooking</div>
        <div class="interest-item">Life style</div>
      </div>
    </div>

    <!-- Gallery Section -->
    <div class="gallery-section">
      <h2>Gallery</h2>
      <div class="gallery-grid">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM8MOgCqhPKqpyK3AD38lcnCQ03mrFYX96Wg&s" alt="Gallery Item 1" class="gallery-item"/>
        <img src="../assets/furina-about me.png" alt="Gallery Item 2" class="gallery-item"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYTbtdni8AQsVFUJbZ_TCdfVD7x4LDtiNeIQ&s" alt="Gallery Item 3" class="gallery-item"/>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="stats-section">
      <h2>My Stats</h2>
      <div class="stats-grid">
        <div class="stat-item">
          <h3>Coding</h3>
          <p>430 hours</p>
        </div>
        <div class="stat-item">
          <h3>Anime Watching</h3>
          <p>5 hours</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: "AboutMe",
  data() {
    return {
      greetingMessage: `Hello, I’m Farizi! 🌟`
    };
  },
  mounted() {
    this.animateElements();
  },
  methods: {
    animateElements() {
      // GSAP Animations
      gsap.from(this.$refs.heroSection, {
        opacity: 0,
        y: -100,
        duration: 1.5,
        delay: 0.2,
        ease: "power4.out"
      });

      gsap.from(this.$refs.profilePicture, {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: "power3.out"
      });

      gsap.from(this.$refs.aboutMe, {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.4
      });

      gsap.from(this.$refs.profileWrapper, {
        rotationY: -180,
        duration: 2,
        ease: "power3.inOut",
      });
    }
  }
};
</script>

<style scoped>
/* Overall Styles */
.about-me {
  padding: 2rem;
  font-family: "Noto Sans JP", sans-serif;
  color: #111;
  background: linear-gradient(135deg, #f2f2f2, #ffffff); /* Gradient putih ke abu-abu cerah */
  background-size: 400% 400%;
  animation: gradientAnimation 10s ease infinite;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1); /* Bayangan yang lebih lembut */
}

/* Greeting Section */
.greeting-section {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.greeting-section h1 {
  font-size: 2.5rem;
  color: #333;
  font-weight: bold;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
}

.greeting-section p {
  font-size: 1.2rem;
  color: #666;
}

/* Pride Card Section */
.pride-card {
  margin-top: 3rem;
  background: linear-gradient(135deg, #ff99cc, #ffcc66);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.pride-card h2 {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1rem;
}

.pride-content p {
  font-size: 1.2rem;
  color: #fff;
  line-height: 1.5;
}

/* Personal Quote Section */
.quote-section {
  margin-top: 2rem;
  background: #ffcc66;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.quote-section h2 {
  font-size: 2rem;
  color: #111;
  margin-bottom: 1rem;
}

.quote-section blockquote {
  font-size: 1.5rem;
  color: #333;
  font-style: italic;
  line-height: 1.5;
  margin: 0;
}

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  transform: perspective(1000px) rotateY(10deg);
}

.hero-section h1 {
  font-size: 3rem;
  color: #111;
  letter-spacing: 1px;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
}

.hero-section p {
  font-size: 1.2rem;
  color: #333;
}

/* Profile Section */
.profile-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  height: 100vh;
}

.profile-wrapper {
  perspective: 1500px;
}

.profile-container {
  width: 300px;
  height: 300px;
  margin-right: 2rem;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-picture {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
  transition: transform 0.5s ease-in-out;
}

.profile-container:hover .profile-picture {
  transform: rotateY(20deg) scale(1.05);
}

.description h2 {
  font-size: 2rem;
  color: #111;
  margin-bottom: 0.5rem;
}

.description p {
  font-size: 1.2rem;
  color: #333;
}

/* Interests Section */
.interests-section {
  text-align: center;
  padding: 2rem;
}

.interests-section h2 {
  font-size: 2.5rem;
  color: #111;
  margin-bottom: 1rem;
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.interest-item {
  padding: 1rem;
  background: #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  color: #111;
  transition: background-color 0.3s ease;
}

.interest-item:hover {
  background-color: #ffcc66;
}

/* Gallery Section */
.gallery-section {
  text-align: center;
  padding: 2rem;
}

.gallery-section h2 {
  font-size: 2.5rem;
  color: #111;
  margin-bottom: 1rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.gallery-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
}

/* Stats Section */
.stats-section {
  padding: 2rem;
}

.stats-section h2 {
  font-size: 2.5rem;
  color: #111;
  margin-bottom: 1rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.stat-item {
  padding: 1rem;
  background: #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.stat-item h3 {
  font-size: 1.5rem;
  color: #111;
}

.stat-item p {
  font-size: 1.2rem;
  color: #666;
}

/* Gradient Animation */
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

