"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
    const router = useRouter()
  const removeTopic = async () => {
    const confirmed = confirm("are you sure");

    if (confirmed) {
     const res =  await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if(res.ok){

          router.refresh()
        }
    }
  };
  return (
    <>
      <button href={"/"} className="text-red-600" onClick={removeTopic}>
        del
      </button>
    </>
  );
}
