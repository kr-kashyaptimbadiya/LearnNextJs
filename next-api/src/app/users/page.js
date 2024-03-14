import Link from "next/link";
import getUsers from "../../../services/getUsers";
import DeleteUser from "../../../components/DeleteUser";

export default async function Page() {
  const getUserList = getUsers();
  const users = await getUserList;

  return (
    <div>
      <h1>UserList</h1>
      {users.map((user) => (
        <h2 key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link> &nbsp;&nbsp;
          <Link href={`users/${user.id}/update`}>Edit</Link> &nbsp;&nbsp;
          <DeleteUser id={user.id} />
        </h2>
      ))}
    </div>
  );
}
