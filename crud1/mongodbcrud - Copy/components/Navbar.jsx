import Link from "next/link";

export default function Navbar(){
    return(
        <>
        <nav className="flex justify-between items-center py-4">
            <Link href={'/'} >Logo</Link>
            <Link href={'/addTopic'} >Add Topic</Link>
        </nav>
        </>
    )
}