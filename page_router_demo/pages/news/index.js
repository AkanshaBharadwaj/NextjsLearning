import Link from "next/link";

export default function NewsPage(){
    return <>
    <h1 className="heading">The News page</h1>
    <ul>
        <li> <Link href='/news/next'>NextJs is a great framework</Link></li>
        <li><Link href='/news/2'>Something else</Link></li>
    </ul>
    </>
}