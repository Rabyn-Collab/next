



const posts = [
  {
    id: 1,
    title: "hello",
  },
  {
    id: 2,
    title: "hello",
  },
];

export async function GET(request) {

  try {

    return Response.json(posts, { status: 200 });
  } catch (err) {

    return Response.json({ message: `hello ${err}` }, { status: 400 });
  }


}


