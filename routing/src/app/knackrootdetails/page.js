"use client"
import { useRouter } from "next/navigation";
export default function page() {
    const router = useRouter();
  return (
    <>
      <h1>Knackroot Details</h1>
      <button onClick={()=>router.push("knackrootdetails/about")}>About</button>
      <button onClick={()=>router.push("/")}>Home</button>
      <button onClick={()=>router.push("/knackroot")}>Knackroot Page</button>
    </>
  );
}
