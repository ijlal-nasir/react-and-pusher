import React from "react";
import { IMessage } from "../../types/message";
import { messages } from "../../_mock/messages.data";
import ChatCard from "../chat-card/chat-card.component";

const ChatBox = () => {
  return (
    <div className="mb-14 px-4 py-6">
      {messages.map((m: IMessage, idx: number) => (
        <ChatCard key={idx} message={m.message} self={m.self} />
      ))}
    </div>
  );
};

export default ChatBox;
