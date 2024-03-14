import Link from "next/link";


export default function Home() {
  return (
    <main>
        <h1>Next API</h1>
        <Link href={"users"}>Users</Link>
    </main>
  );
}
