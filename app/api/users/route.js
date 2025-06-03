


export async function GET(request) {
  try {

    // const res = await request.json();
    // console.log(res);

    console.log(request);
    return Response.json({ message: "hello" }, { status: 200 });
  } catch (err) {
    console.log(err)
  }
}


export async function POST(request) {
  try {

    // const res = await request.json();
    console.log(await request.json());

    return Response.json({ message: "hello" }, { status: 200 });
  } catch (err) {
    console.log(err)
  }
}