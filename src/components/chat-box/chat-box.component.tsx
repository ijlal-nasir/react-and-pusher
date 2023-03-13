import React from "react";
import ChatCard from "../chat-card/chat-card.component";

const ChatBox = () => {
  return (
    <div className="mb-14 px-4">
      <ChatCard message={"message from other 1"} />
      <ChatCard
        self={1}
        message={
          "message from self message from self message from self message from self "
        }
      />
      <ChatCard message={"message from other 2"} />
      <ChatCard message={"message from other 1"} />
      <ChatCard
        self={1}
        message={
          "message from self message from self message from self message from self "
        }
      />
      <ChatCard message={"message from other 2"} />
      <ChatCard message={"message from other 1"} />
      <ChatCard
        self={1}
        message={
          "message from self message from self message from self message from self "
        }
      />
      <ChatCard message={"message from other 2"} />
      <ChatCard message={"message from other 1"} />
      <ChatCard
        self={1}
        message={
          "message from self message from self message from self message from self "
        }
      />
      <ChatCard message={"message from other 2"} />
    </div>
  );
};

export default ChatBox;
