/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and Description Required");
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("failed to create topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} action=" " className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Topic Title"
        className="border border-slate-200 px-8 py-2 rounded-lg bg-[#01162a] text-white"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="Topic Description"
        className="border border-slate-200 px-8 py-2 rounded-lg bg-[#01162a] text-white"
      />

      <button type="submit" className="p-2 px-3 bg-white rounded-lg">
        Add Topic{" "}
      </button>
    </form>
  );
};

export default page;
