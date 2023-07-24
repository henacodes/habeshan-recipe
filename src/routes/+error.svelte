<script>
  import { page } from "$app/stores";
</script>

<h1>Error page</h1>
<h1>{$page.status}: {$page.error.message}</h1>
