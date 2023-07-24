<script>
  export let type;
</script>

<a href={`/foods/${type}`} class="flex-grow">
  <div
    class="category border border-gray-300 rounded p-3 m-2 hover:scale-105 transition duration-300 ease-in-out hover:bg-green-color hover:shadow-2xl cursor-pointer hover:text-white-grey"
  >
    <img src={`/foods/${type}.png`} width="30px" alt="category" class="" />
    <p class=" ">{type}</p>
  </div>
</a>
