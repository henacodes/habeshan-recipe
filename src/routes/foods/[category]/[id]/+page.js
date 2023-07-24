/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const res = await fetch(
    `https://themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
  );
  const data = await res.json();
  return {
    meal: data.meals[0],
  };
}
