import { ImTwitter } from "react-icons/im";
import { GoHome } from "react-icons/go";
// import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
// import { FaRegBookmark } from "react-icons/fa6";
import { BsBookmark } from "react-icons/bs";
// import { FaRegEnvelope } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";

import React from "react";
import FeedCard from "@/components/FeedCard";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <GoHome />,
  },
  {
    title: "Explore",
    icon: <HiMagnifyingGlass />,
  },
  {
    title: "Notifications",
    icon: <IoMdNotificationsOutline />,
  },
  {
    title: "Messages",
    icon: <HiOutlineEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <FaRegUser />,
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4 h-screen w-screen bg-black text-white">
      <div className="col-span-3 ml-28 p-5 ">
        <div className="flex flex-col justify-items-center pr-2 py-2">
          <div className="text-4xl mb-6 cursor-pointer hover:bg-slate-600 rounded-full p-2 w-fit transition-all">
            <ImTwitter />
          </div>
          <div>
            <ul>
              {sideBarMenuItems.map((el) => (
                <li
                  key={el.title}
                  className="flex gap-3 cursor-pointer mb-1 hover:bg-slate-600 rounded-full p-2 pr-5 transition-all"
                >
                  <div className="text-2xl ">{el.icon}</div>
                  <div className="text-lg font-semibold tracking-wide">
                    {el.title}
                  </div>
                </li>
              ))}
            </ul>
            <button className="bg-[#1d9bf0] hover:bg-[#0f89dc] w-full text-lg font-bold tracking-wider rounded-full mt-5 py-4 px-10 transition-all">
              Tweet
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-400">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
      <div className="col-span-3"></div>
    </div>
  );
}
