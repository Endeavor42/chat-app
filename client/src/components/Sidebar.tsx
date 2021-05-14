import React, { useEffect, useRef, useState } from "react";
import {
  Avatar,
  createStyles,
  IconButton,
  InputBase,
  makeStyles,
  Theme,
  Drawer,
  Button,
} from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import DonutLargeOutlinedIcon from "@material-ui/icons/DonutLargeOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import "../styles/sidebar.scss";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      cursor: "pointer",
    },
    drawer: {
      width: "31vw",
      maxWidth: 582,
      minWidth: 300,
    },
  })
);

// const buttonIcons: JSX.Element[] = [
//   <DonutLargeOutlinedIcon />,
//   <ChatOutlinedIcon />,
//   <MoreVertOutlinedIcon />,
// ];

function Sidebar() {
  const [toggle, setToggle] = useState<boolean>(false);
  const classes = useStyles();

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Drawer
          BackdropProps={{ invisible: true }}
          anchor="left"
          open={toggle}
          elevation={0}
          onClose={() => setToggle(false)}
        >
          <div className={classes.drawer} />
        </Drawer>
        <Avatar className={classes.orange}>F</Avatar>
        <div className="sidebar__buttons">
          {/* Status */}
          <IconButton>
            <DonutLargeOutlinedIcon />
          </IconButton>
          {/* Message */}
          <IconButton onClick={() => setToggle(true)}>
            <ChatOutlinedIcon />
          </IconButton>
          {/* Menu */}
          <IconButton onClick={() => alert("Menu")}>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__searchContainer">
        <div className="searchBar">
          <SearchOutlinedIcon style={{ color: "#868686" }} />
          <InputBase
            className="searchInput"
            placeholder="Search or start a new chat"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
