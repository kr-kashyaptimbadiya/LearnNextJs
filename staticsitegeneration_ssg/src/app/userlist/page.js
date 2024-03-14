import Link from "next/link";
import getUsers from "../../../services/getUsers";

export default async function Page() {
  const getUserList = getUsers();
  const users = await getUserList;

  return (
    <div>
        <h1>UserList</h1>
        {
            users.map((user) => (
                <h2 key={user.id}>
                <Link href={`/userlist/${user.id}`}>{user.name}</Link>
                </h2>
            ))
        }
    </div>
  );
}
