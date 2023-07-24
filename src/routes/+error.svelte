<script>
  import { page } from "$app/stores";

  console.log($page.status);
</script>

<div class="flex flex-col items-center">
  <img
    src={$page.status == 404 ? "/404.svg" : "/500.svg"}
    alt="error page"
    class="w-[50vw]"
  />
  <p class="text-2xl font-bold text-green-color">{$page.error.message}</p>
</div>
