<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  export let type;

  let param = "";
  onMount(() => {
    const unsubscribe = page.subscribe((value) => {
      param = value.params.category;
    });
    return () => {
      unsubscribe();
    };
  });
</script>

<a href={`/foods/${type}`} class="flex-grow">
  <div
    class={(param == type ? "bg-green-color" : "") +
      " category   border border-gray-300 rounded p-3 m-2 hover:scale-105 transition duration-300 ease-in-out hover:bg-green-color hover:shadow-2xl cursor-pointer hover:text-white-grey"}
  >
    <img
      src={`/foods/${type}.png`}
      class="w-[15px] lg:w-[30px]"
      alt="category"
    />
    <p class=" ">{type}</p>
  </div>
</a>

<style>
  .category {
    min-width: 100px;
  }
</style>
