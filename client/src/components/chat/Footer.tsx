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
  const [text, setText] = useState<string>(undefined!);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addMessage({ text, type: "user" }));
    setText("");
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
            value={text}
            className="searchInput"
            placeholder="Type a text"
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
