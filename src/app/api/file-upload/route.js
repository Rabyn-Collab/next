import { pinata } from "../../../config/pinata";




export async function POST(request) {
  const formData = await request.formData();
  console.log(formData.get('image'));


  try {
    const response = await pinata.upload.public.file(formData.get('image'));
    return Response.json({ image: response.cid });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

}