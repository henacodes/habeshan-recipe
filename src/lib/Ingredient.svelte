<script>
  export let measure;
  export let name;
  export let img;
</script>

<div class="bg-white rounded-lg shadow-md flex items-center p-4 m-3">
  <img src={img} alt={name} class="w-10 h-10 mr-4" />
  <div>
    <p class="font-bold text-sm">{name}</p>
    <p class=" font-light text-sm">{measure}</p>
  </div>
</div>
