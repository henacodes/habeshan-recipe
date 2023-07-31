<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  export let param = "hah";
  onMount(() => {
    const unsubscribe = page.subscribe((value) => {
      if (!param) {
        param = value.params.category;
      }
    });
    return () => {
      unsubscribe();
    };
  });

  export let mealName;
  export let id;
  export let mealThumb;
</script>

<a href={`/foods/${param}/${id}`} class="  h-[220px]">
  <div
    class="meal h-[220px] rounded m-2 hover:scale-105 transition duration-300 ease-in-out cursor-pointer hover:shadow-2xl shadow-md hover:shadow-green-color/20"
  >
    <img
      src={mealThumb}
      class=" w-full rounded-md h-[150px] object-cover"
      alt=""
    />
    <div class="meal-info p-3">
      <p class=" font-bold text-dark-blue">{mealName}</p>
    </div>
  </div>
</a>
