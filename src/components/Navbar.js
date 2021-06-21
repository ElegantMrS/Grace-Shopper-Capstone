import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";


const SimpleMenu = ({loggedIn}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MenuIcon className='menuIcon'/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}><Link to="/" className='routeLinks'>Home</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/merchandise" className='Products'>Art</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/" className='routeLinks'>About Us</Link></MenuItem>
          {loggedIn ? <MenuItem onClick={handleClose}><Link to="/Cart" className='routeLinks'>My Cart</Link></MenuItem> : ''}
          
        </Menu>
      </div>
    );
  }

const useStyles = makeStyles({
    root: {
        padding: 10,
        flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
    },
    leftAlign: {
        marginRight: 'auto',
    }
});

function TabPanel(props) {
  const { children, 
 // value, 
    index, ...other } = props;
  const classes = useStyles();
  const [value, setValues] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const NavTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          indicatorColor="primary"
          textColor="primary"
          centered
        >
        <Typography>
          <SimpleMenu />
        </Typography>
        <Typography className={classes.leftAlign} variant="h2" component="h2" >
          JJRt
        </Typography>
          <LinkTab label="Contemporary" href="/api/merchandise/contemporary" {...a11yProps(0)} />
          <LinkTab label="Impressionism" href="/" {...a11yProps(1)} />
          <LinkTab label="Cubism" href="/" {...a11yProps(2)} />
          <LinkTab label="Post-Impressionalism" href="/" {...a11yProps(3)} />
          <LinkTab label="Popart" href="/" {...a11yProps(4)} />
          <LinkTab label href="/" icon={<ShoppingCartIcon/>} {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Page One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Page Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Page Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Page Five
      </TabPanel>
      <TabPanel value={value} index={4}>
        Page Six
      </TabPanel>
    </Paper>
  );
}

export default NavTabs;