<script>
  const shorten = (str) => {
    return str.slice(0, 100) + " .... ";
  };
</script>

<div
  class="meal border border-zinc-400/50 rounded m-2 hover:scale-105 transition duration-300 ease-in-out cursor-pointer hover:shadow-2xl"
>
  <img src="/breakfast.png" class=" w-full" alt="" />
  <div class="meal-info p-3">
    <p class=" font-bold text-dark-blue">Teriyaki Chicken Casserole</p>
    <small>
      {shorten(`Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick
        spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic
        in a small saucepan and cover. Bring to a boil over medium heat. Remove
        lid and cook for one minute once boiling.\r\nMeanwhile, stir together the
        corn starch and 2 tablespoons of water in a separate dish until smooth.
        Once sauce is boiling, add mixture to the saucepan and stir to combine.
        Cook until the sauce starts to thicken then remove from heat.\r\nPlace the
        chicken breasts in the prepared pan. Pour one cup of the sauce over top of
        chicken. Place chicken in oven and bake 35 minutes or until cooked
        through. Remove from oven and shred chicken in the dish using two
        forks.\r\n*Meanwhile, steam or cook the vegetables according to package
        directions.\r\nAdd the cooked vegetables and rice to the casserole dish
        with the chicken. Add most of the remaining sauce, reserving a bit to
        drizzle over the top when serving. Gently toss everything together in the
        casserole dish until combined. Return to oven and cook 15 minutes. Remove
        from oven and let stand 5 minutes before serving. Drizzle each serving
        with remaining sauce. Enjoy!`)}
    </small>
  </div>
  <div class="meal-bottom flex items-center justify-between border-t p-3">
    <p class="text-green-color font-bold">Chicken</p>
    <p>Japannese</p>
  </div>
</div>

<style>
</style>
