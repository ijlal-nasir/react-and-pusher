import React from "react";
import { Channels } from "./components/channels";
import { Chat } from "./components/chat";

function App() {
  return (
    // <div className="h-screen py-20">
    //   <div className="container h-4/5 max-h-[80%] border bg-slate-50 mx-auto">
    //     <div className="grid grid-flow-row-dense grid-cols-12 gap-0 h-full	">
    //       <div className="col-span-3 h-full	overflow-y-auto	">
    //         <Channels />
    //       </div>
    //       <div className="col-span-9 bg-[#f3f3f3] h-full relative">
    //         <Chat />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="h-screen py-20">
      <div className="flex container mx-auto h-4/5">
        <div className="basis-[30%] max-h-[100%]">
          <Channels />
        </div>
        <div className="basis-[70%] bg-[#f3f3f3] max-h-[100%] relative">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default App;
