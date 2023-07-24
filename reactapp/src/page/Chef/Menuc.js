import React from 'react'
import '../../css-components/Menuc.css';
import { useState } from "react";
// import survey from './cheffinder-logo.png';
import { AppBar, Avatar, IconButton,Box,Tooltip,Menu,TextField, InputBase,Button, MenuList,MenuItem,Divider,ListItemIcon} from '@mui/material'
import Typography from '@mui/material/Typography';
import {Logout,Settings,PersonAdd} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redex/userSlice";
import axios from 'axios';

function Menuc() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  const[foodno,setno]=useState('');
  const[foodname,setname]=useState('');
  const [foodprice,setprice]=useState('');


  const handleno=(event)=>{
    setno(event.target.value);
  }
  const handlename=(event)=>{
    setname(event.target.value);
  }
  const handleprice=(event)=>{
    setprice(event.target.value);
  }

  const navigate=useNavigate();
  const handleSubmit= async(event)=>{
    event.preventDefault();
    let token=localStorage.getItem('token');
    let id=localStorage.getItem('id');
    console.log(id);
    try{
      const response = await axios.post(`http://localhost:8081/api/v1/auth/cheffood/post`,
      {
        "chefid":id,
        "chef_food_no":foodno,
          "chef_food_name":foodname,
          "chef_food_price":foodprice
      },
      {
        headers:{
          "Authorization":`Bearer ${token}`,
          "cache-control":'no-cache',
        }
      }

      );
      setno('');
      setname('');
      setprice('');

      console.log(response.data);
    }catch(error){
      console.error("Error : ",error);
    }
    // navigate('/Uhome')
  }
  return (
    <>
    <div className="bodyedm">
        <header class="headeredm">
        <nav className="uhomenavedm">
        <div className="log22edm"></div>
            <div>
                <ul id="navbaredm">
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
        {/* <MenuItem onClick={handleClose}>
          <FavoriteIcon>
            <Settings fontSize="small" />
          </FavoriteIcon>
          &nbsp;&nbsp;&nbsp;Favorites
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <BookmarkBorderIcon>
            <Settings fontSize="small" />
          </BookmarkBorderIcon>
          &nbsp;&nbsp;&nbsp;Favorites
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon><Link to="/login">
          <div className='logoutedm'>Logout</div></Link>
        </MenuItem>
      </Menu>
            </div>
        </nav>
        </header>
        <main>
        <div class="introedm">
        <div className="caedm">
          <form onSubmit={handleSubmit}>
            <br></br><br></br>
            <label htmlFor="username">FOOD NO :</label><br></br>
            <input type="text" className="usedm" placeholder='Enter Food no' height="50"
              value={foodno}
              onChange={handleno}/>
              <br></br><br></br>
            <label htmlFor="name">DISH NAME :</label><br></br>
            <input type="text" className="usedm" placeholder="Enter Dish name"
              value={foodname}
              onChange={handlename}
            /><br></br><br></br>
            <label htmlFor="username">DISH PRICE :</label><br></br>
            <input type="text" className="usedm" placeholder='Enter Dish price' height="50"
              value={foodprice}
              onChange={handleprice}
            /><br></br><br></br>
            
            <div className="cened">
              <button className="btedm" type="submit">ADD ITEMS</button>
              <h2 className="dot">...............................</h2>
              <Link to="/Uhome"><button className="btedm" type="submit">CONFIRM ITEMS</button></Link>
            </div>
          </form>
        </div>
            </div>
        </main>
        </div>
    </>
  )
}

export default Menuc;