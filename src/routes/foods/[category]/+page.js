export async function load({ fetch, params }) {
  const res = await fetch(
    `https://themealdb.com/api/json/v1/1/filter.php?c=${params.category}`
  );
  const data = await res.json();
  return {
    meals: data.meals,
  };
}

export let ssr = true;
export let csr = true;
