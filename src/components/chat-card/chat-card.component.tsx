import React from "react";

const ChatCard: React.FC<any> = (props) => {
  return (
    <>
      {props.self == 1 ? (
        <div className="flex items-center gap-[10px] justify-end pb-1">
          <h4 className="font-medium bg-[#4c7dfe] text-white px-3 py-1 rounded max-w-[80%]">
            {props.message}
          </h4>
          <div className="rounded-full h-10 w-10 bg-orange-300 max-w-[40px] w-[10%]"></div>
        </div>
      ) : (
        <div className="flex items-center gap-[10px] pb-1">
          <div className="rounded-full h-10 w-10 bg-orange-300 max-w-[40px] w-[10%]"></div>
          <h4 className="font-medium bg-[#eeeeee] px-3 py-1 rounded max-w-[80%]">
            {props.message}
          </h4>
        </div>
      )}
    </>
  );
};

export default ChatCard;
