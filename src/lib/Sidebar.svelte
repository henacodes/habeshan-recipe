<script>
  import {
    HeartIcon,
    CoffeeIcon,
    PlusSquareIcon,
    InfoIcon,
  } from "svelte-feather-icons";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  let route = "";
  const assignClass = (menu, value) => {
    if (menu == value) {
      return "text-green-color font-bold border-r-2 border-green-color ";
    }
  };
  onMount(() => {
    const unsubscribe = page.subscribe((value) => {
      route = value.route.id.split("/")[1];
    });

    return () => {
      unsubscribe();
    };
  });
  console.log(route);
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
      <a href="/foods/breakfast"
        ><div class={"flex items-center my-4 " + assignClass("foods", route)}>
          <CoffeeIcon size="20" class=" text-dark-blue mr-4" />
          <span>Foods</span>
        </div></a
      >
      <a href="/favorites">
        <div
          class={"flex items-center my-4 " + assignClass("favorites", route)}
        >
          <HeartIcon size="20" class=" text-dark-blue mr-4" />
          <span>Favorites</span>
        </div></a
      >
      <a href="/create">
        <div class={"flex items-center my-4 " + assignClass("create", route)}>
          <PlusSquareIcon size="20" class=" text-dark-blue mr-4" />
          <span>Create</span>
        </div>
      </a>
      <a href="/about">
        <div class={"flex items-center my-4 " + assignClass("about", route)}>
          <InfoIcon size="20" class=" text-dark-blue mr-4" />
          <span>About</span>
        </div></a
      >
    </div>
  </div>
</div>
