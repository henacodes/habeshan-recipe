export async function load({ fetch, url }) {
  const query = url.searchParams.get("query");
  const res = await fetch(
    `https://themealdb.com/api/json/v1/1/search.php?s=${query}`
  );

  const data = await res.json();
  console.log(data.meals);
  return {
    meals: data.meals,
    query,
  };
}

export let ssr = true;
export let csr = true;
