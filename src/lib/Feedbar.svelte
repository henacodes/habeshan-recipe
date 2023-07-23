<script>
  import { SearchIcon } from "svelte-feather-icons";
  import Category from "./Category.svelte";
</script>

<div class="feed bg-white flex-[0.8] px-6 pt-5">
  <div class="feed-top flex items-center justify-between">
    <p class="text-dark-blue font-extrabold text-2xl">
      Discover mom's creativity
    </p>
    <div class="search-form flex items-center">
      <SearchIcon class="mr-[-30px] relative z-10" size="20" />
      <input
        type="text"
        name=""
        id=""
        class=" relative w-[40vw] z-1 px-8 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-green-color focus:border-green-color"
        placeholder="search recipes"
      />
    </div>
  </div>
  <div>
    <Category />
  </div>
</div>
