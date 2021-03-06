import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {useNavigate, Link} from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {styled} from "@mui/material/styles";
import useAuth from "../hooks/useAuth";
import Logo from '../assets/Pixabay-logo.png';

const HeaderBar = styled(AppBar)(() => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
}));

function Header(): JSX.Element {
  const auth = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await auth.signout(() => {
      navigate('/login', { replace: true });
    });
  };

  return (
    <HeaderBar position="static">
      <Toolbar className="flex flex--justify-sb">
        <Link to="/">
          <img height="23" src={Logo} alt="logo" />
        </Link>
        {auth.user && (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle sx={{ color: '#333' }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem disabled onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </HeaderBar>
  );
}

export default Header;