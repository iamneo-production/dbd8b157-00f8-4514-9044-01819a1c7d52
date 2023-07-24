import React from 'react'
import '../../css-components/Editd.css';
import { useState } from "react";
import bar from '../../css-components/bar.png';

import { AppBar, Avatar, IconButton,Box,Tooltip,Menu,TextField, InputBase,Button, MenuList,MenuItem,Divider,ListItemIcon} from '@mui/material'
import Typography from '@mui/material/Typography';
import {Logout,Settings,PersonAdd} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redex/userSlice";
import axios from 'axios';

function Editd() {
  
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
  const[experience,setExp]=useState('');
  const[location,setLocation]=useState('');
  const [special,setSpecial]=useState('');
  const [culback,setCulback]=useState('');


  const handlexp=(event)=>{
    setExp(event.target.value);
  }
  const handlelocation=(event)=>{
    setLocation(event.target.value);
  }
  const handlesep=(event)=>{
    setSpecial(event.target.value);
  }
  const handlecul=(event)=>{
    setCulback(event.target.value);
  }
  const navigate=useNavigate();
  const handleSubmit= async(event)=>{
    event.preventDefault();
    let token=localStorage.getItem('token');
    // let id=localStorage.getItem('user');
    try{
      const response = await axios.post(`http://localhost:8080/usersdet/p`,
      {
        "chef_location":location,
          "chef_experience":experience,
          "chef_speciality_cuisine":special,
          "chef_culinary_background":culback,
      },
      {
        headers:{
          "Authorization":`Bearer ${token}`,
          "cache-control":'no-cache',
        }
      }
      );
      setExp('');
      setLocation('');
      setSpecial('');
      setCulback('');

      console.log(response.data);
    }catch(error){
      console.error("Error : ",error);
    }
    navigate('/Uhome')
  }
  return (
    <>
    <div className="bodyd">
        <header class="headerd">
        <nav className="uhomenavd">
        <div className="log22d"></div>
            <div>
                <ul id="navbard">
                <Link to="/Menuc"><li><a className="active" href="#"><Button className='button31m'><img src={bar} alt="my" width={"35px"} /><h1 className="editm">MENU</h1></Button></a></li></Link>
                    {/* <li><a href="index.html">VIEW DETAILS</a></li>
                    <li><a href="index.html">EDIT DETAILS</a></li> */}
                    {/* <li><a href="index.html">About</a></li>
                     <li><a href="index.html">Contact</a></li> */}
                     <Box sx={{ flexGrow: 0 }}>
                     <li className="prof">
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
          <div className='logoutd'>Logout</div></Link>
        </MenuItem>
      </Menu>
            </div>
        </nav>
        </header>
        <main>
        <div class="introd">
        <div className="cad">
          <form onSubmit={handleSubmit}>
            <br></br><br></br>
            <label htmlFor="username">LOCATION :</label><br></br>
            <input type="text" className="usd" placeholder='Enter Your prefered location' height="50"
              value={location}
              onChange={handlelocation}
            /><br></br><br></br>
            <label htmlFor="name">CULINARY BACKGROUND :</label><br></br>
            <input type="text" className="usd" placeholder="Enter your culinary background"
              value={culback}
              onChange={handlecul}
            /><br></br><br></br>
            <label htmlFor="username">EXPERIENCE :</label><br></br>
            <input type="text" className="usd" placeholder='Enter your experience' height="50"
              value={experience}
              onChange={handlexp}
            /><br></br><br></br>
            <label htmlFor="username">SPECIALITY CUSINE :</label><br></br>
            <input type="text" className="usd" placeholder='Enter speciality cusine' height="50"
              value={special}
              onChange={handlesep}
            /><br></br><br></br>
            
            <div className="cend">
              <button className="btd" type="submit">EDIT</button>
            </div>
          </form>
        </div>
            </div>
        </main>
        </div>
    </>
  )
}

export default Editd;