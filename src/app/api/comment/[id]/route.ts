import { redirect } from "next/navigation";
import { data } from "../data";

// written "_request" instead of "request" : just a convention for variables which weare not using.

const handleRedirect = (id: string) => {
  if (!id || parseInt(id) > data.length) {
    redirect("/404");
  }
};

export async function GET(_request: Request, context: any) {
  const {
    params: { id },
  } = context;
  handleRedirect(id);

  const oneData = data.find((elem) => elem.id === parseInt(id));
  return Response.json(oneData);
}

export async function PATCH(request: Request, context: any) {
  const {
    params: { id },
  } = context;
  handleRedirect(id);

  const body = await request.json();

  const updateIndex = data.findIndex((elem) => elem.id === parseInt(id));
  data[updateIndex].comment = body.text;

  return Response.json(data[updateIndex]);
}

export async function DELETE(_request: Request, context: any) {
  const {
    params: { id },
  } = context;
  handleRedirect(id);

  const deleteIndex = data.findIndex((elem) => elem.id === parseInt(id));
  data.splice(deleteIndex, 1);

  return Response.json({ id });
}
