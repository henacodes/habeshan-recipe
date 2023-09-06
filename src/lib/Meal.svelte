<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { BookmarkIcon } from "svelte-feather-icons";
  import { db } from "../lib/firebase/firebase.js";
  import { doc, updateDoc, getDoc } from "firebase/firestore";
  import { authStore } from "..//store/authStore.js";
  export let param = "hah";
  onMount(() => {
    const unsubscribe = page.subscribe((value) => {
      if (!param) {
        param = value.params.category;
      }
    });
    return () => {
      unsubscribe();
    };
  });

  export let mealName;
  export let id;
  export let isFavourite;
  export let mealThumb;

  const addToFavs = async () => {
    console.log($authStore.user.uid);
    const docRef = doc(db, "users", $authStore.user.uid);
    try {
      const docSnap = await getDoc(docRef);
      console.log(docSnap);
      if (docSnap.exists()) {
        const currentData = docSnap.data();

        // Perform any necessary modifications to the currentData object
        // Update the document with the modified data
        await updateDoc(docRef, {
          ...currentData,
          favourites: [...currentData.favourites, id],
        });
        console.log("Document updated successfully");
      } else {
        console.log("document doesn't exist");
      }
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };
</script>

<div
  class="meal rounded m-2 hover:scale-105 transition duration-300 ease-in-out hover:shadow-2xl shadow-md hover:shadow-green-color/20"
>
  <img
    src={mealThumb}
    class=" w-full rounded-md h-[200px] object-cover"
    alt=""
  />
  <div class="meal-info p-3 flex items-center justify-between">
    <a href={`/foods/${param}/${id}`} class="  ">
      <p class=" font-bold text-dark-blue hover:text-green-color">
        {mealName.length <= 16 ? mealName : mealName.substring(0, 20) + " ..."}
      </p>
    </a>
    <p on:click={addToFavs} class="cursor-pointer">
      <BookmarkIcon
        class={isFavourite ? "text-green-color" : "text-dark-blue"}
      />
    </p>
  </div>
</div>
