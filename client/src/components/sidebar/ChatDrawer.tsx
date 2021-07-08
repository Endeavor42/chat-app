import React, { useState } from "react";
import { Drawer } from "@material-ui/core";
import NewChat from "./NewChat";
import NewGroup from "./NewGroup";

import SwipeableViews from "react-swipeable-views";
import NameGroup from "./NameGroup";

interface Props {
  toggleDrawer: boolean;
  setToggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChatDrawer({ toggleDrawer, setToggleDrawer }: Props) {
  const [openNewGroup, setOpenNewGroup] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <Drawer
      BackdropProps={{ invisible: true }}
      anchor="left"
      open={toggleDrawer}
      elevation={0}
      onClose={() => setToggleDrawer(false)}
      disableBackdropClick
      hideBackdrop
    >
      <div
        style={{
          width: "31vw",
          height: "100%",
          maxWidth: 581,
          minWidth: 300,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SwipeableViews
          containerStyle={{ height: "100%" }}
          style={{ height: "100%" }}
          index={activeStep}
          springConfig={{
            duration: "0.2s",
            easeFunction: "cubic-bezier(0.22, 0.65, 0.56, .95)",
            delay: "0s",
          }}
        >
          <NewChat
            setToggleDrawer={setToggleDrawer}
            setActiveStep={setActiveStep}
          />
          <NewGroup setOpen={setOpenNewGroup} setActiveStep={setActiveStep} />
          <NameGroup
            setToggleDrawer={setToggleDrawer}
            setActiveStep={setActiveStep}
          />
        </SwipeableViews>
      </div>
    </Drawer>
  );
}

export default ChatDrawer;
