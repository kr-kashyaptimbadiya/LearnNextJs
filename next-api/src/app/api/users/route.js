import { NextResponse } from "next/server";
import getUsers from "../../../../services/getUsers";

export async function GET(Request) {
  const userlist = getUsers();
  const users = await userlist;
  return NextResponse.json(users, { status: 200 });
}

export async function POST(req) {
  let payload = await req.json();
  if (
    !payload.name ||
    !payload.username ||
    !payload.email ||
    !payload.website ||
    !payload.phone
  )
    return NextResponse.json("Require Field not found");
  return NextResponse.json({ result: "New user Created", success: true });
}
