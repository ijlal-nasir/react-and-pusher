import React from "react";
import ChatBox from "../chat-box/chat-box.component";

export const Chat = () => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="sticky top-0 bg-[#f3f3f3]">
        <div className="flex items-center	gap-[10px] h-20 border-b border-t px-4">
          <div className="rounded-full h-10 w-10 bg-orange-300"></div>
          <h3 className="font-medium m-0">Channel One</h3>
          <div className="active rounded-full h-2 w-2 bg-green-300"></div>
        </div>
      </div>
      <ChatBox />
      <div className="absolute bottom-0 w-full border-t px-4">
        <div className="flex items-center justify-between py-4">
          <input
            className="w-[90%] py-2 px-4 rounded-2xl mr-2 bg-[#f3f3f3]"
            type="text"
            placeholder="Enter your message..."
          />
          <button
            className=" py-2 px-4 rounded-2xl bg-[#4c7dfe] text-white"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
