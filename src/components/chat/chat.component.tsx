import React from "react";
import ChatBox from "../chat-box/chat-box.component";

export const Chat = () => {
  return (
    <div className="pb-4  h-full overflow-y-auto">
      <div className="sticky top-0 bg-[#f3f3f3] pt-4 px-4">
        <div className="flex items-center	gap-[10px] pb-1 ">
          <div className="rounded-full h-10 w-10 bg-orange-300"></div>
          <h3 className="font-medium">Channel One</h3>
          <div className="active rounded-full h-2 w-2 bg-green-300"></div>
        </div>
        <hr className="pb-2" />
      </div>
      <ChatBox />
      <div className="absolute bottom-[0px] w-full z-10 bg-[#f3f3f3] pb-4 px-4">
        <hr className="pb-3" />
        <div className="flex">
          <input className="w-[90%] py-2 px-4 rounded-2xl" type="text" />
          <button
            className="w-[10%] py-2 px-4 rounded-2xl bg-[#4c7dfe] text-white"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
