export const GET = async ({ request }) => {
  const authHeader = request.headers.get("Authorization");
  console.log(authHeader);

  if (!authHeader) {
    return new Response(
      JSON.stringify({ message: "Not authorized to access this endpoint" }),
      { status: 401 }
    );
  }

  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();

  return new Response(JSON.stringify(data, { status: 200 }));
};

export const POST = async ({ request }) => {
  const body = await request.json();
  console.log(body);

  return new Response(JSON.stringify(body), { status: 201 });
};
