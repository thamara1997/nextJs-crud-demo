import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-3 bg-cyan-800 rounded-xl">
      <Link className="font-bold text-white text-[20px]" href={"/"}>
        CS BLOG
      </Link>
      <Link className="p-2 px-3 bg-white rounded-lg" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
};

export default NavBar;
