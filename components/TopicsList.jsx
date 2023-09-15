import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics", error);
  }
};

const TopicsList = async () => {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map((t) => (
        // eslint-disable-next-line react/jsx-key
        <div className="p-4 border-slate-300 border-[1px] rounded-xl flex justify-between gap-5 items-start my-3">
          <div className="text-white ">
            <h2 className="text-2xl font-bold">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`editTopic/${t._id}`}>
              <BiEdit size={24} className="text-white" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
