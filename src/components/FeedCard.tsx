import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";

import { LuUpload } from "react-icons/lu";

const x = "#";
interface feedCardButtons {
  id: number;
  icon: React.ReactNode;
  color: string;
}
const feedCardButtonArr: feedCardButtons[] = [
  {
    id: 1,
    icon: <FaRegComment />,
    color: "#1d9bf0",
  },
  {
    id: 2,
    icon: <AiOutlineRetweet />,
    color: "#00ba7c",
  },
  {
    id: 3,
    icon: <FaRegHeart />,
    color: "#f91880",
  },
  {
    id: 4,
    icon: <LuUpload />,
    color: "#1d9bf0",
  },
];
const FeedCard: React.FC = () => {
  return (
    <div className="w-full py-4 px-5 border-t border-t-gray-600 hover:bg-[#171719] cursor-pointer transition-all">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="col-span-11">
          <h5 className="font-bold">Morty Sanchez</h5>
          <p className="text-sm">
            Microsoft today became a $3 trillion company, overtaking Apple to
            become the most valuable company in the world. This morning, the
            company laid off 1,900 employees.
          </p>
          <div className="flex justify-between item mt-5 w-[80%]">
            {feedCardButtonArr.map((el) => {
              return (
                <div
                  key={el.id}
                  className={`text-[#71767b] hover:text-[${el.color}] text-lg cursor-pointer`}
                >
                  {el.icon}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
