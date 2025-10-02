import Link from "next/link";
import RemoveBtn from "./RemoveBtn";

export default function TopicsList() {
  return (
    <>
      <div className="my-2 flex justify-between items-center gap-2">
        <div className="flex-[.8]">
          <h1 className="text-4xl font-semibold">Title</h1>
          <p>des</p>
        </div>
        <div className="flex-[.2] flex gap-2">
          <Link href="/">Edit</Link>
          <RemoveBtn />
        </div>
      </div>
    </>
  );
}
