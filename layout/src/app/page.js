import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Learn Routing</h1>
      <br />
      <br />
      <h2>Basic Routing</h2>
      <Link href="/knackroot">Comman Layout</Link>
      <br />
      <br />
      <h2>Nested Routing</h2>
      <Link href="/knackrootdetails/">Knackroot Layout</Link>
      <br />
      <br />
      <h2>Nested Routing</h2>
      <Link href="/login">Login Layout</Link>
    </main>
  );
}
