import React from "react";
import { Avatar, IconButton, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

import "../../styles/newChat.scss";

interface Props {
  setToggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

function NewChat({ setToggleDrawer, setActiveStep }: Props) {
  const handleBack = () => {
    setToggleDrawer(false);
    setActiveStep(0);
  };

  return (
    <div className="newChat">
      <div className="newChat__top">
        <div className="bottomBox">
          <IconButton
            onClick={handleBack}
            style={{ color: "white", marginRight: 20 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">New chat</Typography>
        </div>
      </div>
      <div
        onClick={() => setActiveStep((prevStep) => prevStep + 1)}
        className="newChat__group"
      >
        <Avatar className="avatar">
          <GroupAddIcon />
        </Avatar>
        <Typography variant="h6" color="textSecondary">
          New group
        </Typography>
      </div>
    </div>
  );
}

export default NewChat;
