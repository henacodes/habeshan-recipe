<script>
  /** @type {import('./$types').PageData} */
  import Ingredient from "$lib/Ingredient.svelte";
  export let data;
  const { meal } = data;
  const getImageUrl = (ingredient) => {
    return `https://www.themealdb.com/images/ingredients/${ingredient}.png`;
  };
  const ingredients = [
    { name: meal.strIngredient1, measure: meal.strMeasure1 },
    { name: meal.strIngredient2, measure: meal.strMeasure2 },
    { name: meal.strIngredient3, measure: meal.strMeasure3 },
    { name: meal.strIngredient4, measure: meal.strMeasure4 },
    { name: meal.strIngredient5, measure: meal.strMeasure5 },
    { name: meal.strIngredient6, measure: meal.strMeasure6 },
    { name: meal.strIngredient7, measure: meal.strMeasure7 },
    { name: meal.strIngredient8, measure: meal.strMeasure8 },
  ];
</script>

<div class=" h-[95vh] overflow-auto">
  <p class="font-bold text-2xl">{meal.strMeal}</p>
  <div class="top flex mt-5">
    <img
      src={meal.strMealThumb}
      alt={meal.strMeal}
      class="w-[50vw] h-[60vh] object-cover rounded-md"
    />
    <div>
      <h1 class=" mx-7">Ingredients</h1>
      <div class="grid grid-cols-3 p-5">
        {#each ingredients as ing}
          <Ingredient
            name={ing.name}
            img={getImageUrl(ing.name)}
            measure={ing.measure}
          />
        {/each}
      </div>
    </div>
  </div>
  <div>
    <h1 class="text-3xl font-bold mb-4">{meal.strMeal}</h1>
    <p class="text-lg mb-4">
      <span class="font-bold">Category:</span>
      {meal.strCategory}
    </p>
    <p class="text-lg mb-4">
      <span class="font-bold">Area:</span>
      {meal.strArea}
    </p>
    <h2 class="text-xl font-bold mb-2">Instructions:</h2>
    <p class="mb-4">{meal.strInstructions}</p>
    <a
      href={meal.strYoutube}
      target="_blank"
      class="bg-green-color text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
      >Watch Video</a
    >
  </div>
</div>

<!-- 
<main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div class="md:flex">
    <div class="md:w-1/2 pr-4">
      <img
        class="w-full h-auto mb-4"
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />
    </div>
    <div class="md:w-1/2">
      <h2 class="text-xl font-bold mb-2">Ingredients:</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        {#each ingredients as ingredient}
          <div class="bg-white rounded-lg shadow-md flex items-center p-4">
            <img
              src={getImageUrl(ingredient.name)}
              alt={ingredient.name}
              class="w-12 h-12 mr-4"
            />
            <div>
              <p class="font-bold">{ingredient.name}</p>
              <p>{ingredient.measure}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <div>
    <h1 class="text-3xl font-bold mb-4">{meal.strMeal}</h1>
    <p class="text-lg mb-4">
      <span class="font-bold">Category:</span>
      {meal.strCategory}
    </p>
    <p class="text-lg mb-4">
      <span class="font-bold">Area:</span>
      {meal.strArea}
    </p>
    <h2 class="text-xl font-bold mb-2">Instructions:</h2>
    <p class="mb-4">{meal.strInstructions}</p>
    <a
      href={meal.strYoutube}
      target="_blank"
      class="bg-green-color text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
      >Watch Video</a
    >
  </div>
</main> -->
