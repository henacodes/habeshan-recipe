<script>
  import Sidebar from "$lib/Sidebar.svelte";
  import Feedbar from "$lib/Feedbar.svelte";
  import "../app.css";
</script>

<div class="app flex w-full h-[100vh]">
  <Sidebar />
  <Feedbar>
    <slot />
  </Feedbar>
</div>
