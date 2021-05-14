import React from "react";
import { IconButton, InputBase } from "@material-ui/core";
import MicOutlinedIcon from "@material-ui/icons/MicOutlined";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";

import "../styles/footer.scss";

const iconButtons: JSX.Element[] = [
  <EmojiEmotionsOutlinedIcon />,
  <AttachFileOutlinedIcon />,
];

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        {iconButtons.map((Icon: JSX.Element, i: number) => (
          <IconButton key={i}>{Icon}</IconButton>
        ))}
      </div>
      <div className="footer__messageBar">
        <InputBase className="searchInput" placeholder="Type a message" />
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
