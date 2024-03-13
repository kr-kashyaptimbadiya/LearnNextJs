import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Learn Routing</h1>
      <br />
      <br />
      <h2>Basic Routing</h2>
      <Link href="/knackroot">Go to Knackroot Page</Link>
      <br />
      <br />
      <h2>Dynamic Routing</h2>
      <Link href="/knackrootlist/">Go to Knackroot Page</Link>
      <br />
      <br />
      <h2>Nested Routing</h2>
      <Link href="/knackrootdetails/">Go to Knackroot Page</Link>
      <br />
      <br />
      <h2>Catch All Segments</h2>
      <Link href="/positionname/">Go to Knackroot Page</Link>
    </main>
  );
}
