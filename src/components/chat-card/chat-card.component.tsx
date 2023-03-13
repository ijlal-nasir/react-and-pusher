import React from "react";
import { IMessage } from "../../types/message";

const ChatCard: React.FC<IMessage> = (props) => {
  const { self, message } = props;

  if (self)
    return (
      <div className="flex items-center gap-[10px] justify-end pb-1">
        <h4 className="font-medium bg-[#4c7dfe] text-white px-3 py-1 rounded-full max-w-[80%]">
          {message}
        </h4>
        <div className="rounded-full h-10 w-10 bg-orange-300 max-w-[40px] w-[10%]"></div>
      </div>
    );

  return (
    <div className="flex items-center gap-[10px] pb-1">
      <div className="rounded-full h-10 w-10 bg-orange-300 max-w-[40px] w-[10%]"></div>
      <h4 className="font-medium bg-slate-200 px-3 py-1 rounded-full max-w-[80%]">
        {message}
      </h4>
    </div>
  );
};

export default ChatCard;
