import Link from "next/link";
export default function page() {
  return (
    <>
      <h1>This is knackroot Employee page</h1>
      <ul>
        <li>
          <Link href="/knackrootlist/Kashyap">Kashyap</Link>
        </li>
        <li>
          <Link href="/knackrootlist/Jay">Jay</Link>
        </li>
        <li>
          <Link href="/knackrootlist/Vismay">Vismay</Link>
        </li>
      </ul>
    </>
  );
}
