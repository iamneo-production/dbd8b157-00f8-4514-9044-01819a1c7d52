import React from 'react'
import '../../css-components/Evmenu.css';
import { useState } from "react";
// import survey from './cheffinder-logo.png';
import { AppBar, Avatar, IconButton,Box,Tooltip,Menu,TextField, InputBase,Button, MenuList,MenuItem,Divider,ListItemIcon} from '@mui/material'
import Typography from '@mui/material/Typography';
import {Logout,Settings,PersonAdd} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {Link} from "react-router-dom"
import userEvent from '@testing-library/user-event';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redex/userSlice";

function Evmenu() {
  const [state, setState] = useState({
    serialno: '',
    name: '',
    rating: '',
    dirname: '',
    year: ''
  });

  const handleNoChange = (event) => {
    setState({ ...state, serialno: event.target.value });
  };

  const handleNameChange = (event) => {
    setState({ ...state, name: event.target.value });
  };

  const handleratingChange = (event) => {
    setState({ ...state, rating: event.target.value });
  };

  const handleDirChange = (event) => {
    setState({ ...state, dirname: event.target.value });
  };

  const handleYearChange = (event) => {
    setState({ ...state, year: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      serialno: state.serialno,
      name: state.name,
      rating: state.rating,
      dirname: state.dirname,
      year: state.year,
    };

    // axios.post('http://127.0.0.1:8080/post', data);
  };
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
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
    <div className="bodyedo">
        <header class="headeredo">
        <nav className="uhomenavedo">
        <div className="log22edo"></div>
            <div>
                <ul id="navbaredo">
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
          <Avatar />{user.name}
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
          <div className='logoutedo'>Logout</div></Link>
        </MenuItem>
      </Menu>
            </div>
        </nav>
        </header>
        <main>
        <div class="introedo">
        <div className="caedo">
          <form onSubmit={handleSubmit}>
            <br></br><br></br> <br></br><br></br>
            <label htmlFor="username">FOOD NO :</label><br></br>
            <input type="text" className="usedo" placeholder='Enter Food no' height="50"
              value={state.serialno}
              onChange={handleNoChange}
            /><br></br><br></br>
            <label htmlFor="name">DISH NAME :</label><br></br>
            <input type="text" className="usedo" placeholder="Enter Dish name"
              value={state.name}
              onChange={handleNameChange}
            /><br></br><br></br>
            <div className="ceo"><center>
              <button className="bto" type="submit">ADD ITEMS</button>
              <h2 className="dot">...............................</h2>
              <Link to="/Findchef"><button className="bto" type="submit">FIND CHEF</button></Link></center>
            </div>
          </form>
        </div>
            </div>
        </main>
        </div>
    </>
  )
}

export default Evmenu;