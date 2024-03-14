import { NextResponse } from "next/server";
import getUsers from "../../../../../services/getUsers";

export async function GET(request, content) {
  const userlist = getUsers();
  const users = await userlist;
  const user = users.filter((item) => item.id == content.params.id);
  return NextResponse.json(
    user.length == 0
      ? { result: "data not found", success: false }
      : { result: user, success: true }
  );
}

export async function PUT(request, content) {
  let payload = await request.json();
  payload.id = content.params.id;
  if (
    !payload.id ||
    !payload.name ||
    !payload.username ||
    !payload.email ||
    !payload.website ||
    !payload.phone
  )
    return NextResponse.json("Require Field not found");
  return NextResponse.json({ result: payload, success: true });
}

export async function DELETE(request, content) {
  let id = content.params.id;
  if (id) return NextResponse.json({ result: "User Deleted", success: true });
  else return NextResponse.json({ result: "Error", success: False });
}
