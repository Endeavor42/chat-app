import React, { useRef, useState } from "react";
import {
  ClickAwayListener,
  createStyles,
  Grow,
  IconButton,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Theme,
} from "@material-ui/core";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuItem: {
      width: 180,
      minHeight: "unset",
      [theme.breakpoints.up("sm")]: {
        minHeight: "unset",
      },
    },
  })
);

function SidebarMenu() {
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
    <>
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
    </>
  );
}

export default SidebarMenu;
