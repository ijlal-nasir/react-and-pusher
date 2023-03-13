import React from "react";
import { IChannel } from "../../types/channel";
import { channels } from "../../_mock/channels.data";
import { Channel } from "../channel";

export const Channels: React.FC = () => {
  return (
    <div className="overflow-y-auto h-full">
      <div className="flex items-center justify-between px-4 boder-t border-b border-t bg-[#f3f3f3] h-20">
        <h3 className="font-bold text-lg m-0">Channels</h3>
        <button className="px-3 py-1 border rounded-full flex items-center justify-between">
          <svg
            className=" h-5 w-5 flex-none stroke-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <span className="ml-2">Create</span>
        </button>
      </div>

      <ul className="rounded-md ">
        {channels.map((c: IChannel, idx: number) => (
          <Channel channel={c} />
        ))}
      </ul>
    </div>
  );
};
