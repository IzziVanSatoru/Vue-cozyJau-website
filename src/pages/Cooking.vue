<template>
  <div class="cooking" ref="cookingSection">
    <h1 ref="title"> my Cooking</h1>
    <p ref="description">
      Discover delicious recipes to bring flavor and joy to your kitchen!
    </p>
    <div class="recipe-grid">
      <div class="recipe-card" ref="card1">
        <img
          src="https://asset.kompas.com/crops/eWh25QLGaUd83ZfRO6yvdxwygKg=/0x22:968x667/1200x800/data/photo/2023/06/02/64793cbdad978.jpg"
          alt="Recipe 1"
        />
        <div class="card-content">
          <h2>Spaghetti Bolognese</h2>
          <p>A classic Italian dish to enjoy with family.</p>
        </div>
      </div>
      <div class="recipe-card" ref="card2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAwWgJBA_QgX-L0Sk_WcwUtwDbDJL699WR1Q&s"
          alt="Recipe 2"
        />
        <div class="card-content">
          <h2>Chocolate Cake</h2>
          <p>Rich and moist chocolate cake for dessert lovers.</p>
        </div>
      </div>
      <div class="recipe-card" ref="card3">
        <img
          src="https://anakkota.com/wp-content/uploads/2019/03/seblak-sultan.jpg"
          alt="Recipe 3"
        />
        <div class="card-content">
          <h2>Vegetable Stir Fry</h2>
          <p>A quick and healthy meal perfect for busy days.</p>
        </div>
      </div>
      <div class="recipe-card" ref="card4">
        <img
          src="https://pinchofyum.com/wp-content/uploads/Blueberry-Pancakes-Feature-1.jpg"
          alt="Recipe 4"
        />
        <div class="card-content">
          <h2>Blueberry Pancakes</h2>
          <p>Fluffy pancakes filled with fresh blueberries.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import gsap from 'gsap';

export default defineComponent({
  name: 'Cooking',
  setup() {
    const cookingSection = ref(null);
    const title = ref(null);
    const description = ref(null);
    const card1 = ref(null);
    const card2 = ref(null);
    const card3 = ref(null);
    const card4 = ref(null);

    onMounted(() => {
      gsap.from(title.value, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from(description.value, {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out',
      });

      gsap.from([card1.value, card2.value, card3.value, card4.value], {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        delay: 1,
        ease: 'power2.out',
      });
    });

    return {
      cookingSection,
      title,
      description,
      card1,
      card2,
      card3,
      card4,
    };
  },
});
</script>

<style scoped>
/* Modern Recipe Page Style */
.cooking {
  padding: 2rem;
  background-color: #fdfdfd;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
}

h1 {
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

p {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: #666;
}

.recipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.recipe-card {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.recipe-card:hover {
  transform: scale(1.03);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.recipe-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.recipe-card:hover img {
  transform: scale(1.05);
}

.card-content {
  padding: 1.5rem;
  text-align: center;
}

.card-content h2 {
  font-size: 1.8rem;
  margin: 0.5rem 0;
  color: #444;
}

.card-content p {
  font-size: 1rem;
  color: #777;
}
</style>
