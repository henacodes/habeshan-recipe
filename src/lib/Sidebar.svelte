<script>
  import {
    HeartIcon,
    CoffeeIcon,
    PlusSquareIcon,
    InfoIcon,
    UserIcon,
    LogOutIcon,
  } from "svelte-feather-icons";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { authStore } from "../store/authStore.js";
  import {
    signInWithPopup,
    GoogleAuthProvider,
    setPersistence,
    browserLocalPersistence,
    signOut,
  } from "firebase/auth";
  import { collection, doc, setDoc, getDoc } from "firebase/firestore";
  import { auth, db } from "./firebase/firebase.js";
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

      // Access user information from the response
      const { user } = res;

      // Assuming you have the document reference
      const docRef = doc(db, "users", user.uid);

      // Fetch the document
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("document exists", data);
        } else {
          console.log("document doesn't exist");
          // Create a user document in the "users" collection
          const userDocRef = doc(db, "users", user.uid);
          const userData = {
            name: user.displayName,
            email: user.email,
            favourites: [],
            // Add any additional user data you want to store
          };
          await setDoc(userDocRef, userData);
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
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

<div class="sidebar bg-[#f2f3f5] flex-[0.2] flex justify-between flex-col">
  <div>
    <div class="sidebar-top bg-dark-blue p-5">
      <p class=" text-green-color font-bold text-3xl">
        E-<span class="text-white-grey">Kushna</span>
      </p>
      <p class=" text-slate-400">A home for creative moms</p>
      {#if !$authStore?.user}
        <button
          on:click={handleGoogleAuth}
          class="bg-[#ffffff] flex items-center rounded-md p-2 mt-5"
        >
          <img class=" w-[1vw] m-1" src="/google.png" alt="" />
          <span class="">Sign up with Google</span>
        </button>
      {/if}
    </div>
    <div class="sidebar-menu px-5">
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

  {#if $authStore.user}
    <div class="sidebar-bottom p-5">
      <div class="group relative">
        <div
          class="flex items-center bg-white py-4 px-4 rounded-xl cursor-pointer hover:bg-slate-200 transition duration-300 ease-in-out"
        >
          <img
            src={$authStore.user?.profilePic}
            alt=""
            class="w-7 rounded-full"
          />
          <p class="ml-2">{$authStore.user?.name}</p>
        </div>
        <div
          class="absolute bottom-full mb-1 left-0 bg-white text-gray-700 py-2 px-3 rounded-md opacity-0 transform scale-0 group-hover:opacity-100 group-hover:scale-100 transition duration-300 ease-in-out"
        >
          <!-- Tooltip content -->
          <p
            class="flex items-center mt-2 hover:bg-slate-100 p-2 rounded-md cursor-pointer"
          >
            <UserIcon size="20" class=" text-dark-blue mr-4" />
            <span>Profile</span>
          </p>
          <p
            on:click={handleLogOut}
            class="flex items-center mt-2 hover:bg-slate-100 p-2 rounded-md cursor-pointer"
          >
            <LogOutIcon size="20" class=" text-dark-blue mr-4" />
            <span>Logout</span>
          </p>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  @media (max-width: 1000px) {
    .sidebar {
      display: none;
    }
  }
</style>
