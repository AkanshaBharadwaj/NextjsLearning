import Link from "next/link";
export default function Home() {
  return (
    <>
   <h1 className="heading">The homepage</h1>
   <Link href="/news">News page</Link>
      </>
  );
}
