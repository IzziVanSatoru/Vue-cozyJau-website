<template>
  <div class="lifestyle">
    <canvas ref="backgroundCanvas" class="background-canvas"></canvas>
    <h1>Lifestyle</h1>
    <p>
      This is the Lifestyle page. Read about my thoughts on well-being,
      productivity, and everyday inspirations.
    </p>
    
    <!-- Carousel Section -->
    <div class="carousel-container">
      <div class="carousel" ref="carousel">
        <div class="carousel-card" v-for="(item, index) in carouselItems" :key="index" ref="carouselCards">
          <h2>{{ item.title }}</h2>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>

    <!-- Forum Section -->
    <div class="forum-section">
      <h2>Forum Rekomendasi Skincare</h2>
      <ul>
        <li v-for="(post, index) in forumPosts" :key="index">
          <h3>{{ post.title }}</h3>
          <p>{{ post.content }}</p>
        </li>
      </ul>
      <input v-model="newPostTitle" placeholder="Judul Rekomendasi" />
      <textarea v-model="newPostContent" placeholder="Isi rekomendasi"></textarea>
      <button @click="addForumPost">Tambah Rekomendasi</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue";
import gsap from "gsap";
import * as THREE from "three";

export default defineComponent({
  name: "Lifestyle",
  setup() {
    const backgroundCanvas = ref<HTMLCanvasElement | null>(null);
    const carousel = ref<HTMLDivElement | null>(null);
    const carouselCards = ref<HTMLDivElement[]>([]);

    // Carousel items
    const carouselItems = reactive([
      { title: "Well-being", content: "Tips untuk kesehatan fisik dan mental." },
      { title: "Productivity", content: "Cara tetap fokus dan mencapai tujuan." },
      { title: "Inspiration", content: "Cerita yang memicu kreativitas." },
    ]);

    // Forum posts
    const forumPosts = reactive([
      { title: "Rekomendasi Skincare A", content: "Produk ini cocok untuk kulit berminyak." },
      { title: "Rekomendasi Skincare B", content: "Cocok untuk kulit sensitif dan kering." },
    ]);
    const newPostTitle = ref("");
    const newPostContent = ref("");

    const addForumPost = () => {
      if (newPostTitle.value && newPostContent.value) {
        forumPosts.push({ title: newPostTitle.value, content: newPostContent.value });
        newPostTitle.value = "";
        newPostContent.value = "";
      }
    };

    const initBackground = () => {
      const canvas = backgroundCanvas.value;
      if (!canvas) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      const geometry = new THREE.SphereGeometry(0.5, 32, 32);
      const material = new THREE.MeshStandardMaterial({ color: 0x0070f3, emissive: 0x0056b3 });
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      const light = new THREE.PointLight(0xffffff, 1);
      scene.add(light);
      camera.position.z = 5;

      // Dynamic Light Movement
      window.addEventListener("mousemove", (event) => {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        light.position.set(x * 5, y * 5, 5);
      });

      const animate = () => {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      animate();
    };

    const initCarousel = () => {
      if (!carousel.value || !carouselCards.value.length) return;

      // Add mouse movement interaction
      window.addEventListener("mousemove", (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 20; // Adjust multiplier for sensitivity
        gsap.to(carouselCards.value, {
          xPercent: x,
          duration: 0.5,
          ease: "power3.out",
        });
      });

      // Reset to default when the mouse leaves the screen
      window.addEventListener("mouseout", () => {
        gsap.to(carouselCards.value, {
          xPercent: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    };

    onMounted(() => {
      initBackground();
      initCarousel();
    });

    return { backgroundCanvas, carousel, carouselCards, carouselItems, forumPosts, newPostTitle, newPostContent, addForumPost };
  },
});
</script>

<style scoped>
/**** General Styles ****/
.lifestyle {
  position: relative;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  min-height: 100vh;
  overflow: hidden;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #555;
}

.background-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/**** Carousel Styles ****/
.carousel-container {
  position: relative;
  overflow: hidden;
  margin: 2rem 0;
}

.carousel {
  display: flex;
  gap: 1rem;
}

.carousel-card {
  min-width: 300px;
  padding: 2rem;
  border-radius: 16px;
  background: linear-gradient(135deg, #ffffff, #f3f4f4);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
}

/**** Forum Styles ****/
.forum-section {
  margin: 2rem 0;
}

.forum-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #0070f3;
}

.forum-section ul {
  list-style: none;
  padding: 0;
}

.forum-section li {
  margin-bottom: 1rem;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.forum-section input,
.forum-section textarea {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.forum-section button {
  padding: 0.5rem 1rem;
  background: #0070f3;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.forum-section button:hover {
  background: #005bb3;
}
</style>
