<script>
  import Sidebar from "$lib/Sidebar.svelte";
  import Feedbar from "$lib/Feedbar.svelte";
  import { authStore } from "../store/authStore.js";
  import { auth } from "../lib/firebase/firebase.js";
  import "../app.css";
  import { onMount } from "svelte";

  onMount(async () => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        authStore.update((prev) => {
          return {
            ...prev,
            user: {
              name: user.displayName,
              email: user.email,
              profilePic: user.photoURL,
              uid: user.uid,
            },
          };
        });
      }
    });
    authStore.subscribe((user) => console.log(user));
    return unsubscribe;
  });
</script>

<div class="app flex w-full h-[100vh]">
  <Sidebar />
  <Feedbar>
    <slot />
  </Feedbar>
</div>
