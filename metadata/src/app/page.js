import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Generate Metadata</h2>
      <Link href="/knackroot">Generate Metadata</Link>

      <br/>
      <br/>
      <h2>Using Scripttag Location</h2>
      <Link href="/userlocation">Get Use Location</Link>
    </main>
  );
}
