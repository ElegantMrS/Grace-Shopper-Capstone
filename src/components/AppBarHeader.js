import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 10,
    position: 'fixed'
  },
  tab: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
  leftAlign: {
    marginRight: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const AppBarHeader = () => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar color="white">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.leftAlign} variant="h2" component="h2" >
            JJRt
          {/* wrap button/link inside or outside typography to redirect to /merchandise */}
          </Typography>
          {auth && (
            <div className={classes.tab}>

            <Link className={classes.tab}
              to="/merchandise/contemporary"
            >
            <Button color="inherit">
              Contemporary
            </Button>
          </Link>

          <Link className={classes.tab}
              to="/merchandise/cubism"
            >
            <Button color="inherit">
              Cubism
            </Button>
          </Link>

          <Link className={classes.tab}
              to="/merchandise/popart"
            >
            <Button color="inherit">
              Popart
            </Button>
          </Link>

          <Link className={classes.tab}
              to="/merchandise/impressionism"
            >
            <Button color="inherit">
              Impressionism
            </Button>
          </Link>

          <Link className={classes.tab}
              to="/merchandise/post-impressionalism"
            >
            <Button color="inherit">
            Post-Impressionalism
            </Button>
          </Link>

          <Link className={classes.tab}
          to="/cart"
          >
            <IconButton
            color="inherit"
            >
              <ShoppingCartIcon />
            </IconButton>
          </Link>

              <IconButton
                className={classes.tab}

                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppBarHeader;