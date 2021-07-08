import { Fragment } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  List,
  Divider,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { groupSelector } from "../../redux/slices/groups.slice";
import makeGlobalStyles from "../../styles/makeGlobalStyles";

function SidebarGroups() {
  const { groups } = useSelector(groupSelector);
  const classes = makeGlobalStyles();

  return (
    <List>
      {groups.map((group, i) => (
        <Fragment key={i}>
          <ListItem className="listItem">
            <ListItemAvatar>
              <Avatar
                className={classes.avatarSize}
                src={group.uploadedImage}
              />
            </ListItemAvatar>
            <ListItemText
              primary={group.groupName}
              secondary={group.groupName}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Fragment>
      ))}
    </List>
  );
}

export default SidebarGroups;
