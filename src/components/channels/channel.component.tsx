import React from "react";
import { channels } from "../../_mock/channels.data";

export const Channels = () => {
  return (
    <div className="overflow-y-auto h-full">
      <div className="flex items-center justify-between px-4 boder-t border-b border-t bg-[#f3f3f3] h-20">
        <h3 className="font-bold text-lg m-0">Channel One</h3>
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
          <span className="ml-2">Add new channel...</span>
        </button>
      </div>

      <ul role="list" className="rounded-md ">
        {channels.map((c: any, idx: number) => (
          <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm border-b cursor-pointer">
            <div className="flex w-0 flex-1 items-center">
              <div className="rounded-full h-10 w-10 bg-orange-300"></div>
              <span className="ml-2 w-0 flex-1">{c.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
