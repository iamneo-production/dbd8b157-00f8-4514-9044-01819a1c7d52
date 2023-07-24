import React from 'react'
import '../../css-components/Feed.css';
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

function Feedback() {
  
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
  const [feedno, setfeedno] = useState('');
  const [feedname, setfeedname] = useState('');
  const [feedemail, setfeedemail] = useState('');
  const [feedback, setfeedback] = useState('');

  const handlefeedno = (event) => {
    setfeedno(event.target.value);
  };

  const handlefeedname = (event) => {
    setfeedname(event.target.value);
  };

  const handleemail = (event) => {
    setfeedemail(event.target.value);
  };

  const handlefeed = (event) => {
    setfeedback(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      feedno: feedno,
      feedname: feedname,
      feedemail: feedemail,
      feedback: feedback,
    };
    console.log(feedno);
    console.log(feedname);
    console.log(feedemail);
    console.log(feedback);
    const response = await axios.post('http://localhost:8082/api/v1/user/post', data);
    setfeedno('');
    setfeedname('');
    setfeedemail('');
    setfeedback('');
  };
  return (
    <>
    <div className="bodyedf">
        <header class="headeredf">
        <nav className="uhomenavedf">
        <div className="log22edf"></div>
            <div>
                <ul id="navbaredf">
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
          <div className='logoutedf'>Logout</div></Link>
        </MenuItem>
      </Menu>
            </div>
        </nav>
        </header>
        <main>
        <div class="introedf">
        <div className="caedf">
          <form onSubmit={handleSubmit}>
            <br></br><br></br>
            <label htmlFor="username">FEEDBACK no :</label><br></br>
            <input type="text" className="usedf" placeholder='Enter Your no' height="50"
              value={feedno}
              onChange={handlefeedno}
            /><br></br><br></br>
            <label htmlFor="name">NAME :</label><br></br>
            <input type="text" className="usedf" placeholder="Enter your Name"
              value={feedname}
              onChange={handlefeedname}
            /><br></br><br></br>
            <label htmlFor="username">EMAIL :</label><br></br>
            <input type="text" className="usedf" placeholder='Enter your EMAIL' height="50"
              value={feedemail}
              onChange={handleemail}
            /><br></br><br></br>
            <label htmlFor="username">FEEDBACK :</label><br></br>
            <input type="text" className="usedf" placeholder='Enter your Feedback' height="50"
              value={feedback}
              onChange={handlefeed}
            /><br></br><br></br>
            
            <div className="cenedf">
              <button className="btedf" type="submit">ADD</button>
            </div>
          </form>
        </div>
            </div>
        </main>
        </div>
    </>
  )
}

export default Feedback;