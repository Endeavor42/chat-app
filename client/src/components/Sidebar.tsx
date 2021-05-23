import React, { useRef, useState } from "react";
import {
  Avatar,
  ClickAwayListener,
  createStyles,
  Grow,
  IconButton,
  InputBase,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Theme,
} from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import DonutLargeOutlinedIcon from "@material-ui/icons/DonutLargeOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import "../styles/sidebar.scss";
import ChatDrawer from "./ChatDrawer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      cursor: "pointer",
    },
    menuItem: {
      width: 180,
      minHeight: "unset",
      [theme.breakpoints.up("sm")]: {
        minHeight: "unset",
      },
    },
  })
);

function Sidebar() {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const classes = useStyles();

  const handleToggle = () => {
    setOpenMenu((prevOpen: boolean) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef?.current?.contains(event?.target as HTMLElement)) return;

    setOpenMenu(false);
  };

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
          <IconButton ref={anchorRef} onClick={handleToggle}>
            <MoreVertOutlinedIcon />
          </IconButton>
          <Popper
            open={openMenu}
            anchorEl={anchorRef.current}
            transition
            disablePortal
            style={{ zIndex: 999 }}
          >
            {({ TransitionProps }) => (
              <Grow {...TransitionProps}>
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={openMenu}>
                      {[
                        "New group",
                        "Create a room",
                        "Profile",
                        "Archived",
                        "Starred",
                        "Settings",
                        "Log out",
                      ].map((itemName: string) => (
                        <MenuItem
                          className={classes.menuItem}
                          onClick={handleClose}
                        >
                          {itemName}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
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
