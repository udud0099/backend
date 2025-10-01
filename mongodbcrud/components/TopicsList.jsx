import Link from "next/link";
import RemoveBtn from "./RemoveBtn";

const getTopic = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Faild to fetch data");

    return res.json();
  } catch (error) {
    console.log("error is :", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopic();

  // console.log(topics);

  return (
    <>
      {topics.map((item, index) => (
        <div key={index} className=" flex justify-between items-center gap-2 border-1 border-red-400 my-4 p-4">
          <div>
            <div className="flex-[.8]">
              <h1 className="text-4xl font-semibold">{item.title}</h1>
              <p>{item.des}</p>
            </div>
            <div className="flex-[.2] flex gap-2">
              <Link href={`/editTopic/${item._id}`}>Edit</Link>
              <RemoveBtn id={item._id}/>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
