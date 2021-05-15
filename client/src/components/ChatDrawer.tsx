import { Avatar, Drawer, IconButton, Typography } from "@material-ui/core";
import React from "react";
import "../styles/chatDrawer.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

interface Props {
  toggleDrawer: boolean;
  setToggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChatDrawer({ toggleDrawer, setToggleDrawer }: Props) {
  return (
    <Drawer
      BackdropProps={{ invisible: true }}
      anchor="left"
      open={toggleDrawer}
      elevation={0}
      onClose={() => setToggleDrawer(false)}
    >
      <div className="chatDrawer">
        <div className="chatDrawer__top">
          <div className="bottomBox">
            <IconButton
              onClick={() => setToggleDrawer(false)}
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

// TODO: Move specific section using react router
// TODO: Use Chips when selecting individuals

export default ChatDrawer;
