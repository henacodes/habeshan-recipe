<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import Loading from "$lib/Loading.svelte";
  onMount(() => {
    goto("/foods/breakfast");
  });
</script>

<Loading />
