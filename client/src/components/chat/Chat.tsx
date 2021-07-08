import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

import { messagesSelector } from "../../redux/slices/messages.slice";
import "../../styles/chat.scss";

function Chat() {
  const { messages } = useSelector(messagesSelector);

  return (
    <div className="chat">
      {messages.map(({ message, type }) => (
        <div
          className="chat__messageContainer"
          style={
            type === "user"
              ? { justifyContent: "flex-end" }
              : { justifyContent: "flex-start" }
          }
        >
          <div
            className="message"
            style={
              type === "user"
                ? { backgroundColor: "#dcf8c6" }
                : { backgroundColor: "#fff" }
            }
          >
            <Typography>{message}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chat;
