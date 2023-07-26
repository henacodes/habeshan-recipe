export async function load({ fetch, url }) {
  const query = url.searchParams.get("query");
  const res = await fetch(
    `https://themealdb.com/api/json/v1/1/search.php?s=${query}`
  );

  const data = await res.json();
  return {
    meals: data.meals,
  };
}

export let ssr = true;
export let csr = true;
