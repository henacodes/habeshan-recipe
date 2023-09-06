<script>
  /** @type {import('./$types').PageData} */

  import { onMount } from "svelte";
  import { db, auth } from "../../lib/firebase/firebase.js";
  import { doc, updateDoc, getDoc } from "firebase/firestore";
  import { authStore } from "../../store/authStore.js";
  import Meal from "$lib/Meal.svelte";
  export let data;

  onMount(async () => {
    if ($authStore.user) {
      const docRef = doc(db, "users", $authStore.user.uid);
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const currentData = docSnap.data();
          const favs = currentData.favourites;
          favs.map(async (f) => {
            const res = await fetch(
              `https://themealdb.com/api/json/v1/1/lookup.php?i=${f}`
            );
            const data = await res.json();
            authStore.update((curr) => {
              return {
                user: {
                  ...curr,
                  favourites: [...curr.user.favourites, data.meals[0]],
                },
              };
            });
          });
        } else {
          console.log("document doesn't exist");
        }
      } catch (error) {
        console.log(error);
      }
    }
  });
</script>

<div>
  <p>Favorites</p>
  <div
    class="meals grid grid-cols-1 gap-5 mt-5 pb-7 px-5 sm:grid-cols-2 md:grid-cols-3"
  >
    {#each $authStore.user.favourites as meal}
      <Meal
        isFavourite={true}
        mealName={meal.strMeal}
        mealThumb={meal.strMealThumb}
        id={meal.idMeal}
      />
    {/each}
  </div>
</div>
