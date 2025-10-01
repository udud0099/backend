"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function addTopic() {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !des) {
      alert("all field not empty");
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, des }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("fail to creati topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Add Topic</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            type="text"
            placeholder="des"
            onChange={(e) => setDes(e.target.value)}
            value={des}
          />
          <button type="submit">Add Topic</button>
        </form>
      </div>
    </>
  );
}
