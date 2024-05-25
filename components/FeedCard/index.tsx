import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiRepost } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiBarChartGroupedFill } from "react-icons/ri";
import { GoBookmark } from "react-icons/go";
import { FiUpload } from "react-icons/fi";

const FeedCard: React.FC = ()=>{
    return <div className="">
        <div className="grid grid-cols-12 px-5 py-3 border-b border-white/20 hover:bg-white/5 transition-all">
            <div className="col-span-1">
                <Image src={"https://avatars.githubusercontent.com/u/107883820?v=4"} alt="user-image" height={45} width={45} className="rounded-full"/>
            </div>
            <div className="col-span-11 ml-3">
                <div className="flex gap-1 items-center">
                    <h1 className="font-semibold">Vilas Rabad</h1>
                    <p className="text-white/30 text-sm">@rabadvilas11</p>
                </div>
                <p className="text-sm mt-2">
                    मेरे विचार में घरेलू एसी में LG का कोई मुकाबला नहीं है।
                    ड्यूल इनवर्टर वाला 5 स्टार लीजिए बहुत ही बेहतरीन रिलियाबिलिटी और सबसे लो पावर कंजप्शन है और सर्विस वाइज भी बेहतरीन है।
                </p>
                <div className="flex w-full justify-between mt-2">
                    <div className="text-white/50 hover:text-sky-400 flex items-center -ml-2 cursor-pointer">
                        <div className="hover:bg-sky-400/10 transition-all p-2 rounded-full">
                            <BiMessageRounded size={18}/>
                        </div>
                        <span className="text-xs transition-all font-extralight -ml-1">16</span>
                    </div>
                    <div className="text-white/50 hover:text-green-400 flex items-center cursor-pointer">
                        <div className="hover:bg-green-400/10 transition-all p-2 rounded-full">
                            <BiRepost size={18}/>
                        </div>
                        <span className="text-xs transition-all font-extralight -ml-1">5</span>
                    </div>
                    <div className="text-white/50 hover:text-pink-500 flex items-center cursor-pointer">
                        <div className="hover:bg-pink-500/10 transition-all p-2 rounded-full">
                            <IoMdHeartEmpty size={18}/>
                        </div>
                        <span className="text-xs transition-all font-extralight -ml-1">21</span>
                    </div>
                    <div className="text-white/50 hover:text-sky-400 flex items-center cursor-pointer">
                        <div className="hover:bg-sky-400/10 transition-all p-2 rounded-full">
                            <RiBarChartGroupedFill size={18}/>
                        </div>
                        <span className="text-xs transition-all font-extralight -ml-1">81k</span>
                    </div>
                    <div className="text-white/50 flex items-center cursor-pointer">
                        <div className="hover:bg-sky-400/10 hover:text-sky-400 transition-all p-2 rounded-full">
                            <GoBookmark size={18}/>
                        </div>
                        <div className="hover:bg-sky-400/10 hover:text-sky-400 transition-all p-2 rounded-full">
                            <FiUpload size={18}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default FeedCard
