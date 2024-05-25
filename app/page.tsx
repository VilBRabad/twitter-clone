import React from "react";
import { FaXTwitter, FaRegBookmark } from "react-icons/fa6";
import { MdHomeFilled } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline, IoPeopleOutline, IoPersonOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import FeedCard from "@/components/FeedCard";
import GoogleLoginClient from "@/components/GoogleLoginClient";

interface TwitterSidebarButton {
  title: String,
  icon: React.ReactNode
}

const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <MdHomeFilled />
  },
  {
    title: "Explore",
    icon: <FiSearch />
  },
  {
    title: "Notifications",
    icon: <IoNotificationsOutline />
  },
  {
    title: "Messages",
    icon: <MdOutlineMailOutline />
  },
  {
    title: "Bookmark",
    icon: <FaRegBookmark />
  },
  {
    title: "Communities",
    icon: <IoPeopleOutline />
  },
  {
    title: "Profile",
    icon: <IoPersonOutline />
  },
  {
    title: "More",
    icon: <CiCircleMore />
  }
]


export default function Home() {

  return (
    <div className="overflow-x-hidden">
      <div className="h-screen w-screen grid grid-cols-12 px-36">
        <div className="col-span-2 relative w-full">
          <div className="sticky top-0 flex flex-col justify-start pt-4">
            <div className="text-3xl hover:bg-white/10 transition-all w-fit p-3 rounded-full cursor-pointer">
              <FaXTwitter />
            </div>
            <div>
              <ul>
                {
                  SidebarMenuItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-lg mt-2 hover:bg-white/10 transition-all w-fit p-2 px-3 rounded-full cursor-pointer">
                      <span className="text-3xl">{item.icon}</span>
                      <span>{item.title}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="mt-3">
              <button className="bg-[#1A8CD8] hover:bg-[#1A8CD8]/90 transition-all p-3 w-full rounded-full font-semibold">Post</button>
            </div>
          </div>
        </div>
        <div className="col-span-10 ml-12">
          <div className="grid grid-cols-10">
            <div className="relative col-span-6 border-x border-white/30">
              <div className="nav flex items-center justify-center sticky top-0 h-[3.2rem] border-b border-white/20 backdrop-blur-md bg-black/60">
                <div className="relative w-[50%] h-full hover:bg-white/10 cursor-pointer">
                  <div className="flex items-center justify-center w-full h-full">
                    <p className="font-semibold">For You</p>
                  </div>
                  <div className="absolute h-[4px] w-[3.5rem] bg-blue-400 right-[40.6%] bottom-0 rounded-full"></div>
                </div>
                <div className="w-[50%] h-full hover:bg-white/10 cursor-pointer">
                  <div className="flex items-center justify-center w-full h-full">
                    <p className="text-sm text-white/50">Following</p>
                  </div>
                </div>
              </div>
              <div>
                <FeedCard />
                <FeedCard />
                <FeedCard />
                <FeedCard />
                <FeedCard />
                <FeedCard />
                <FeedCard />
                <FeedCard />
                <FeedCard />
              </div>
            </div>
            <div className="col-span-4 relative ml-8">
              <div className="w-[95%] sticky top-0 pt-2">
                <div className="flex items-center px-4 bg-gray-800 rounded-full overflow-hidden">
                  <FiSearch size={20} />
                  <input type="text" placeholder="Search" className="w-full outline-0 bg-gray-800 p-3 px-4" />
                </div>
                <div className="w-[100%] mt-4 h-auto border border-white/30 p-5 rounded-[1rem]">
                  <h1 className="text-xl font-semibold mb-2">New to X?</h1>
                  <GoogleLoginClient />
                </div>
                <div className="w-[100%] mt-4 border border-white/30 p-5 rounded-[1rem]">
                  <h1 className="text-xl font-semibold mb-2">Subscribe to Premium</h1>
                  <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                  <button className="bg-[#1A8CD8] hover:bg-[#1A8CD8]/90 transition-all p-2 px-6 mt-2 rounded-full font-semibold">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
