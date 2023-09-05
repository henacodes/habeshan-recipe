<script>
  import {
    HeartIcon,
    CoffeeIcon,
    PlusSquareIcon,
    InfoIcon,
  } from "svelte-feather-icons";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import {
    signInWithPopup,
    GoogleAuthProvider,
    setPersistence,
    browserLocalPersistence,
  } from "firebase/auth";
  import { auth } from "./firebase/firebase.js";
  let route = "";
  const assignClass = (menu, value) => {
    if (menu == value) {
      return "text-green-color font-bold border-r-2 border-green-color ";
    }
  };

  const handleGoogleAuth = async () => {
    try {
      // Set the persistence to local
      await setPersistence(auth, browserLocalPersistence);

      // Perform Google sign-in
      const res = await signInWithPopup(auth, new GoogleAuthProvider());
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  onMount(async () => {
    const unsubscribe = page.subscribe((value) => {
      route = value.route.id.split("/")[1];
    });
    // Check if the user is already authenticated

    return () => {
      unsubscribe();
    };
  });
</script>

<div class="sidebar bg-[#f2f3f5] flex-[0.2]">
  <div class="sidebar-top bg-dark-blue p-5">
    <p class=" text-green-color font-bold text-3xl">
      Mad<span class="text-white-grey">bet</span>
    </p>
    <p class=" text-slate-400">A home for creative moms</p>
    <button
      on:click={handleGoogleAuth}
      class="bg-[#ffffff] flex items-center rounded-md p-2 mt-5"
    >
      <img class=" w-[1vw] m-1" src="/google.png" alt="" />
      <span class="">Sign up with Google</span>
    </button>
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
