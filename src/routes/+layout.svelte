<script>
  import Sidebar from "$lib/Sidebar.svelte";
  import Feedbar from "$lib/Feedbar.svelte";
  import { authStore } from "../store/authStore.js";
  import { modalStore } from "../store/modalStore.js";
  import { auth, db } from "../lib/firebase/firebase.js";

  import { collection, doc, setDoc, getDoc } from "firebase/firestore";
  import { MenuIcon } from "svelte-feather-icons";

  import "../app.css";
  import { onMount } from "svelte";

  onMount(async () => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid.toString());
        const docSnap = await getDoc(docRef);
        const userDoc = docSnap.data();
        authStore.update((prev) => {
          return {
            ...prev,
            user: {
              name: user.displayName,
              email: user.email,
              profilePic: user.photoURL,
              uid: user.uid,
              favourites: [],
            },
          };
        });
      }
    });

    return unsubscribe;
  });

  const openSidebar = () => {
    modalStore.update((curr) => {
      return {
        ...curr,
        sidebar: true,
      };
    });
  };
</script>

<div class="app w-[100vw] h-[100vh]">
  <div
    on:click={openSidebar}
    class="hover-menu cursor-pointer hover:scale-110 transition duration-300 ease-in-out bg-dark-blue z-[1000] w-[50px] h-[50px] rounded-full fixed bottom-[10%] right-[10%] flex justify-center items-center"
  >
    <MenuIcon class="text-white" />
  </div>
  <Sidebar />
  <Feedbar>
    <slot />
  </Feedbar>
</div>

<style>
  @media (min-width: 1000px) {
    .app {
      display: flex;
    }
    .hover-menu {
      display: none;
    }
  }
</style>
