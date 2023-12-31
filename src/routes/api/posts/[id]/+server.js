export const GET = async ({ params }) => {
  console.log(params);

  const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
};
