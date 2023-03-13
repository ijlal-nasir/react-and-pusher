import React from "react";
import { IChannel } from "../../types/channel";

interface IProps {
  channel: IChannel;
}

export const Channel: React.FC<IProps> = (props) => {
  const { channel } = props;
  return (
    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm border-b cursor-pointer">
      <div className="flex w-0 flex-1 items-center">
        <div className="rounded-full h-10 w-10 bg-orange-300"></div>
        <span className="ml-2 w-0 flex-1">{channel.name}</span>
      </div>
    </li>
  );
};
