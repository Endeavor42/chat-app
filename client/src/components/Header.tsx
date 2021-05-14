import "../styles/header.scss";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Avatar, IconButton, Typography } from "@material-ui/core";

const buttonIcons: JSX.Element[] = [
  <SearchOutlinedIcon />,
  <MoreVertOutlinedIcon />,
];

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar />
        <div className="infoContainer">
          <Typography style={{ marginBottom: -3 }}>Coders</Typography>
          <Typography variant="caption" color="textSecondary">
            Julia, Falzar, Endeavor, Gregar
          </Typography>
        </div>
      </div>
      <div className="header__right">
        {buttonIcons.map((Icon: JSX.Element, i: number) => (
          <IconButton key={i}>{Icon}</IconButton>
        ))}
      </div>
    </div>
  );
}

export default Header;
