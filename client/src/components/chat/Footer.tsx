import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, InputBase } from "@material-ui/core";
import MicOutlinedIcon from "@material-ui/icons/MicOutlined";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";

import "../../styles/footer.scss";
import { addMessage } from "../../redux/slices/messages.slice";

const iconButtons: JSX.Element[] = [
  <EmojiEmotionsOutlinedIcon />,
  <AttachFileOutlinedIcon />,
];

function Footer() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState<string>(undefined!);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addMessage({ message, type: "user" }));
    setMessage("");
  };

  return (
    <div className="footer">
      <div className="footer__left">
        {iconButtons.map((Icon: JSX.Element, i: number) => (
          <IconButton key={i}>{Icon}</IconButton>
        ))}
      </div>
      <div className="footer__messageBar">
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <InputBase
            onChange={handleChange}
            value={message}
            className="searchInput"
            placeholder="Type a message"
          />
        </form>
      </div>
      <div className="footer__right">
        <IconButton>
          <MicOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Footer;
