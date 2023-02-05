import * as React from "react";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import { Avatar } from "@mui/joy";
import PersonIcon from "@mui/icons-material/Person";

export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Avatar
        alt='user profile img'
        src={props.user?.photoURL || <PersonIcon />}
        size='lg'
        onClick={handleClick}
      ></Avatar>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby='basic-demo-button'
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={props.logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
