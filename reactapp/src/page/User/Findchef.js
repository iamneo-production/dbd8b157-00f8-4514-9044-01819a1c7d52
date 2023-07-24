import React from 'react'
import '../../css-components/Findch.css';
import { useState } from "react";
// import survey from './cheffinder-logo.png';
import { AppBar, Avatar, IconButton,Box,Tooltip,Menu,TextField, InputBase,Button, MenuList,MenuItem,Divider,ListItemIcon} from '@mui/material'
import Typography from '@mui/material/Typography';
import {Logout,Settings,PersonAdd} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {Link} from "react-router-dom"
import Findchefser from './Findchefser';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redex/userSlice";

function Findchef() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
    const images = [
        { src: "fruitsandveg.webp", p: "Fruits & Vegetables" },
        { src: "snacksandbiscuits.jpg", p: "Snacks & Biscuits" },
        { src: "instantfood.jpg", p: "Instant Food" },
        { src: "diaryandbread.jpg", p: "Dairy & Bread" },
        { src: "chocoandice.jpg", p: "Chocolates & Icecreams" },
        { src: "riceattadal.jpg", p: "Rice, Atta, Dal" },
        // { src: "teaandcoffee.jpg", p: "Tea & Coffee" },
        // { src: "eggsmeatfish.jpg", p: "Eggs, Meat & Fish" },
        // { src: "oilmasala.webp", p: "Oil, Masala, Sauces" },
        // { src: "drinksandjuices.jpg", p: "Drinks & Juices" },
        // { src: "petsupply.jpg", p: "Pet Supplies" },
        // { src: "healthandnutri.jpg", p: "Health & Nutrition" },
        // { src: "bfood.jpg", p: "Breakfast Food" },
        // { src: "babycare.jpg", p: "Baby Care " },
        // { src: "clandhouse.webp", p: "Cleaning & Household" },
        // { src: "handpcare.jpg", p: "Hygiene & Personal care" },
        // { src: "bathandbody.jpg", p: "Bath & Body" },
        // { src: "bandmakeup.webp", p: "Beauty & Makeup" },
        // { src: "kandhome.jpg", p: "Kitchen & Home" },
      ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
    <div className="bodyf">
        <header class="headerf">
        <nav className="uhomenavf">
        <Link to="/Usehome"><div className="log22f"></div></Link>
            <div>
            <ul id="navbarf">
                    {/* <li><a className="active" href="index.html">MENU</a></li> */}
                    {/* <li><a href="index.html">VIEW DETAILS</a></li>
                    <li><a href="index.html">EDIT DETAILS</a></li> */}
                    {/* <li><a href="index.html">About</a></li>
                     <li><a href="index.html">Contact</a></li> */}
                     <Box sx={{ flexGrow: 0 }}>
                     <li>
                      <IconButton
                        onClick={handleClick} sx={{ p: 0}}
                        size="small"
                      >
                      <Avatar sx={{ width: 42, height: 42 ,bgcolor : "black"  }}></Avatar>
                      </IconButton></li></Box>
                </ul>
                <Menu
        anchorEl={anchorEl}
        id="account-menued"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> {user.name}
        </MenuItem>
        <Divider />
        
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon><Link to="/login">
          <div className='logoutf'>Logout</div></Link>
        </MenuItem>
      </Menu>
            </div>
        </nav>
        </header>
        <main>
        <div class="introf">
        <div className="categories">
          <Findchefser/>
          <Findchefser/>
          <Findchefser/>
          <Findchefser/>
          <Findchefser/>
          <Findchefser/>
          </div>
            </div>
        </main>
        </div>
    </>
  )
}

export default Findchef;

