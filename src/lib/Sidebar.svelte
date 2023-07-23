<script>
  import {
    HeartIcon,
    CoffeeIcon,
    PlusSquareIcon,
    InfoIcon,
  } from "svelte-feather-icons";
</script>

<div class="sidebar bg-[#f2f3f5] flex-[0.2]">
  <div class="sidebar-top bg-dark-blue p-5">
    <p class=" text-green-color font-bold text-3xl">
      Mad<span class="text-white-grey">bet</span>
    </p>
    <p class=" text-slate-400">A home for creative moms</p>
    <button class="bg-green-color p-1 w-full mt-5 mb-1 rounded-sm"
      >sign in</button
    >
  </div>
  <div class="sidebar-menu p-5">
    <p class="my-5 font-bold text-xl">Menu</p>
    <div class="menu">
      <div class="flex items-center my-4">
        <CoffeeIcon size="20" class=" text-dark-blue mr-4" />
        <span clas>Foods</span>
      </div>
      <div class="flex items-center my-4">
        <HeartIcon size="20" class=" text-dark-blue mr-4" />
        <span>Favorites</span>
      </div>

      <div class="flex items-center my-4">
        <PlusSquareIcon size="20" class=" text-dark-blue mr-4" />
        <span>Create</span>
      </div>
      <div class="flex items-center my-4">
        <InfoIcon size="20" class=" text-dark-blue mr-4" />
        <span>About</span>
      </div>
    </div>
  </div>
</div>
