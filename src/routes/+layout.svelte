<script>
  import Sidebar from "$lib/Sidebar.svelte";
  import Feedbar from "$lib/Feedbar.svelte";
  import { authStore } from "../store/authStore.js";
  import { auth, db } from "../lib/firebase/firebase.js";

  import { collection, doc, setDoc, getDoc } from "firebase/firestore";

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
              favourites: userDoc?.favourites,
            },
          };
        });
      }
    });
    authStore.subscribe((user) => console.log(user));
    return unsubscribe;
  });
</script>

<div class="app w-[100vw] h-[100vh]">
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
  }
</style>
