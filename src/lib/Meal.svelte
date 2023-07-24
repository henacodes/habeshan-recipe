<script>
  const shorten = (str) => {
    return str.slice(0, 100) + " .... ";
  };

  export let mealName;
  export let mealThumb;
</script>

<div
  class="meal h-[220px] rounded m-2 hover:scale-105 transition duration-300 ease-in-out cursor-pointer hover:shadow-2xl hover:shadow-green-color/20"
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
