import { useState } from "react";
import {
  Avatar,
  createStyles,
  IconButton,
  InputBase,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import DonutLargeOutlinedIcon from "@material-ui/icons/DonutLargeOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import "../../styles/sidebar.scss";
import ChatDrawer from "./ChatDrawer";
import SidebarMenu from "./SidebarMenu";
import SidebarGroups from "./SidebarGroups";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      cursor: "pointer",
    },
  })
);

function Sidebar() {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
  const classes = useStyles();

  return (
    <div className="sidebar">
      <ChatDrawer
        toggleDrawer={toggleDrawer}
        setToggleDrawer={setToggleDrawer}
      />
      <div className="sidebar__header">
        <Avatar className={classes.orange}>F</Avatar>
        <div className="sidebar__buttons">
          {/* Status */}
          <IconButton>
            <DonutLargeOutlinedIcon />
          </IconButton>
          {/* Message */}
          <IconButton onClick={() => setToggleDrawer(true)}>
            <ChatOutlinedIcon />
          </IconButton>
          {/* Menu */}
          <SidebarMenu />
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
      <SidebarGroups />
    </div>
  );
}

export default Sidebar;
