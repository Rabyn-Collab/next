import { pinata } from "../../../config/pinata";




export async function POST(request) {
  const formData = await request.formData();

  try {
    const response = await pinata.upload.public.file(formData.get('image'));
    return Response.json({ image: response.cid, id: response.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

}



export async function DELETE(request) {
  const { id } = await request.json();
  try {
    await pinata.files.public.delete([
      id
    ]);
    return Response.json({ message: 'File deleted successfully' });
  } catch (error) {
    console.log(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request) {

  const formData = await request.formData();
  const id = formData.get('id');
  const image = formData.get('image');
  try {
    await pinata.files.public.delete([
      id
    ]);
    const response = await pinata.upload.public.file(image);
    return Response.json({ image: response.cid, id: response.id });
  } catch (error) {
    console.log(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}