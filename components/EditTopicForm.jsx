"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  console.log(newTitle);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });
      if (!res.ok) {
        throw new Error("Failed to update topic");
      }
      const responseData = await res.json(); // Add this to inspect the response data
      console.log("API Response Data:", responseData);
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        defaultValue={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        type="text"
        placeholder="Topic Title"
        className="border border-slate-200 px-8 py-2 rounded-lg bg-[#01162a] text-white"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        type="text"
        placeholder="Topic Description"
        className="border border-slate-200 px-8 py-2 rounded-lg bg-[#01162a] text-white"
      />

      <button type="submit" className="p-2 px-3 bg-white rounded-lg">
        Update Topic{" "}
      </button>
    </form>
  );
};

export default EditTopicForm;
