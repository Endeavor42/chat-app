import { createStyles, makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    avatarSize: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      marginRight: 15,
    },
  })
);
