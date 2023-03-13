import React from "react";
import { Channels } from "./components/channels";
import { Chat } from "./components/chat";

function App() {
  return (
    <div className="h-screen py-20 bg-slate-50">
      <div className="flex container mx-auto h-4/5">
        <div className="basis-[20%] h-[100%] bg-white border-l border-b">
          <Channels />
        </div>
        <div className="basis-[80%] bg-white h-[100%] border-r border-l border-b relative">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default App;
