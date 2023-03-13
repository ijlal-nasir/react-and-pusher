import React from "react";
import { Channels } from "./components/channels";

function App() {
  return (
    <div className="h-screen w-100 py-20">
      <div className="container h-4/5 border bg-slate-50 w-100 mx-auto">
        <div className="grid grid-flow-col gap-0">
          <div className="col-span-1 h-100">
            <Channels />
          </div>
          <div className="col-span-11 bg-red-300 h-100">Chat Here</div>
        </div>
      </div>
    </div>
  );
}

export default App;
