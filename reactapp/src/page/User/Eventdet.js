import React from 'react'
import '../../css-components/Event.css';
import { useState } from "react";
// import survey from './cheffinder-logo.png';
import axios from 'axios';
import { AppBar, Avatar, IconButton,Box,Tooltip,Menu,TextField, InputBase,Button, MenuList,MenuItem,Divider,ListItemIcon} from '@mui/material'
import Typography from '@mui/material/Typography';
import {Logout,Settings,PersonAdd} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redex/userSlice";

function Eventdet() {
  
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
  const[date,setDate]=useState('');
  const[location,setLocation]=useState('');
  const [size,setSize]=useState('');
  const [time,setTime]=useState('');


  const handledate=(event)=>{
    setDate(event.target.value);
  }
  const handlelocation=(event)=>{
    setLocation(event.target.value);
  }
  const handleSize=(event)=>{
    setSize(event.target.value);
  }
  const handletime=(event)=>{
    setTime(event.target.value);
  }
  const navigate=useNavigate();
  const handleSubmit= async(event)=>{
    event.preventDefault();
    let token=localStorage.getItem('token');
    // let id=localStorage.getItem('user');
    try{
      const response = await axios.post(`http://localhost:8080/usersdet/p`,
      {
          "user_date":date,
          "user_size":size,
          "user_time":time,
          "user_location":location
      },
      {
        headers:{
          "Authorization":`Bearer ${token}`,
          "cache-control":'no-cache',
        }
      }
      );
      setDate('');
      setLocation('');
      setSize('');
      setTime('');

      console.log(response.data);
    }catch(error){
      console.error("Error : ",error);
    }
    // navigate('/')
  }
  
  return (
    <>
    <div className="bodyede">
        <header class="headerede">
        <nav className="uhomenavede">
        <div className="log22ede"></div>
            <div>
                <ul id="navbarede">
                    <Link to="/Evmenu"><li><a className="active" href="index.html">MENU</a></li></Link>
                     <Box sx={{ flexGrow: 0 }}>
                     <li className="prof1">
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
          <div className='logoutede'>Logout</div></Link>
        </MenuItem>
      </Menu>
            </div>
        </nav>
        </header>
        <main>
        <div class="introede">
        <div className="caede">
          <form onSubmit={handleSubmit}>
            <br></br><br></br>
            <label htmlFor="username">DATE :</label><br></br>
            <input type="text" className="usede" placeholder='Enter Chrf Id' height="50"
              value={date}
              onChange={handledate}
            /><br></br><br></br>
            <label htmlFor="username">LOCATION :</label><br></br>
            <input type="text" className="usede" placeholder='Enter Your prefered location' height="50"
              value={location}
              onChange={handlelocation}
            /><br></br><br></br>
            <label htmlFor="name">SIZE :</label><br></br>
            <input type="text" className="usede" placeholder="Enter your culinary background"
              value={size}
              onChange={handleSize}
            /><br></br><br></br>
            <label htmlFor="username">TIME :</label><br></br>
            <input type="text" className="usede" placeholder='Enter your experience' height="50"
              value={time}
              onChange={handletime}/>
            <br></br><br></br>
            {/* <label htmlFor="username">SPECIALITY CUSINE :</label><br></br>
            <input type="text" className="used" placeholder='Enter speciality cusine' height="50"
              value={state.dirname}
              onChange={handleDirChange}
            /><br></br><br></br> */}
            
            <div className="cenede">
              <button className="btede" type="submit">ADD</button>
            </div>
          </form>
        </div>
            </div>
        </main>
        </div>
    </>
  )
}

export default Eventdet;