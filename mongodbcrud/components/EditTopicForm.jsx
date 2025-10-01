"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTopicForm({ id, title, des }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDes, setNewDes] = useState(des);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ newTitle, newDes }),
      });

      if (!res.ok) {
        throw new Error("faile to update topic");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>edit Topic</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="des"
            value={newDes}
            onChange={(e) => setNewDes(e.target.value)}
          />
          <button type="submit">edit Topic</button>
        </form>
      </div>
    </>
  );
}
