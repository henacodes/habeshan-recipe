<script>
  import { goto } from "$app/navigation";
  import { SearchIcon, MenuIcon } from "svelte-feather-icons";
  import Category from "../../../lib/Category.svelte";
  import Meal from "../../../lib/Meal.svelte";
  import { authStore } from "../../../store/authStore.js";
  export let data;

  let searchQuery = "";

  const categories = [
    "breakfast",
    "chicken",
    "seafood",
    "dessert",
    "vegan",
    "beef",
    "starter",
  ];

  const handleSubmit = (e) => {
    console.log("submit ");
    goto(`/foods/search?query=${searchQuery}`);
  };
</script>

<div class="feed-top flex items-center justify-between">
  <div class="flex items-center justify-between mb-5">
    <p class="text-dark-blue font-extrabold text-md">
      Discover mom's creativity
    </p>
    <p class="menu-icon hidden"><MenuIcon /></p>
  </div>
  <form
    class="search-form flex items-center"
    on:submit|preventDefault={handleSubmit}
  >
    <SearchIcon class="mr-[-30px] relative z-10" size="20" />
    <input
      bind:value={searchQuery}
      type="text"
      name=""
      id=""
      class=" relative w-[40vw] z-1 px-8 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-ss-md rounded-es-md focus:outline-none focus:ring-green-color focus:border-green-color"
      placeholder="search recipes"
    />
    <button
      class="bg-green-color text-white px-2 py-2 rounded-se-md rounded-ee-md"
      type="submit">search</button
    >
  </form>
</div>

<div class="flex categories items-center w-full justify-between mt-5">
  {#each categories as cat}
    <Category type={cat} />
  {/each}
</div>
<div>
  <span />
  <span />
</div>
<div
  class="meals grid grid-cols-1 gap-5 mt-5 pb-7 px-5 sm:grid-cols-2 md:grid-cols-3"
>
  {#each data.meals as meal (meal.idMeal)}
    <Meal
      isFavourite={$authStore.user?.favourites.includes(meal.idMeal)
        ? true
        : false}
      mealName={meal.strMeal}
      mealThumb={meal.strMealThumb}
      id={meal.idMeal}
    />
  {/each}
</div>

<style>
  .meals {
    overflow-y: auto;
    height: 32rem;
  }

  @media (max-width: 700px) {
    .categories {
      display: none;
    }
    .meals {
      height: 40rem;
    }
    .feed-top {
      flex-direction: column;
    }

    .search-form > input {
      width: 70vw;
    }
    .menu-icon {
      display: flex;
    }
  }
</style>
