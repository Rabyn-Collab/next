import connectToDB from "../../_lib/db";
import Product from "../../_models/Product";




export async function GET(request) {

  try {

    await connectToDB();
    const products = await Product.find({});

    return Response.json(products, { status: 200 });

  } catch (err) {

    return Response.json({ message: err }, { status: 400 });

  }
}