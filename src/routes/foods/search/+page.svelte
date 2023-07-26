<script>
  import Meal from "$lib/Meal.svelte";
  export let data;

  $: console.log(data);
</script>

<div>
  <p class=" text-dark-blue font-bold text-2xl">
    Search results for <span class=" text-green-color">'{data.query}'</span>
  </p>
  <div class="  meals grid grid-cols-4 gap-5 mt-5 pb-7 px-5">
    {#each data.meals as meal (meal.idMeal)}
      <Meal
        mealName={meal.strMeal}
        mealThumb={meal.strMealThumb}
        id={meal.idMeal}
      />
    {/each}
  </div>
</div>

<style>
  .meals {
    overflow-y: auto;
    height: 40rem;
  }
</style>
