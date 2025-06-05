import connectToDB from "../../../_lib/db";
import { User } from "../../../_models/User";


export async function POST(request) {
  await connectToDB();
  try {
    const { username, email, password } = await request.json();
    const isExist = await User.findOne({ email });
    if (isExist) {
      return Response.json({ message: "User already exist" }, { status: 400 });
    }
    await User.create({ username, email, password });
    return Response.json({ message: "hello" }, { status: 200 });
  } catch (err) {
    return Response.json({ message: err }, { status: 400 });
  }
}