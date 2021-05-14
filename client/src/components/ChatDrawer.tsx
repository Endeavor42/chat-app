import { Avatar, Drawer, IconButton, Typography } from "@material-ui/core";
import React from "react";
import "../styles/chatDrawer.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

interface Props {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChatDrawer({ toggle, setToggle }: Props) {
  return (
    <Drawer
      BackdropProps={{ invisible: true }}
      anchor="left"
      open={toggle}
      elevation={0}
      onClose={() => setToggle(false)}
    >
      <div className="chatDrawer">
        <div className="chatDrawer__top">
          <div className="bottomBox">
            <IconButton
              onClick={() => setToggle(false)}
              style={{ color: "white", marginRight: 20 }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6">New chat</Typography>
          </div>
        </div>
        <div className="chatDrawer__group">
          <Avatar className="avatar">
            <GroupAddIcon />
          </Avatar>
          <Typography variant="h6" color="textSecondary">
            New group
          </Typography>
        </div>
      </div>
    </Drawer>
  );
}

export default ChatDrawer;
