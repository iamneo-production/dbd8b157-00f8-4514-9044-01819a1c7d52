import React from 'react'
import '../../css-components/Viewprof.css';
import { useState } from "react";
import { AppBar, Avatar, IconButton,Box,Tooltip,Menu,TextField, InputBase,Button, MenuList,MenuItem,Divider,ListItemIcon} from '@mui/material'
import Typography from '@mui/material/Typography';
import {Logout,Settings,PersonAdd} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {Link} from "react-router-dom"


function ViewProf() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const tran = [
    { id: 1, menuno: "01", menuname: "Idly", amount: 8},
    { id: 1, menuno: "02", menuname: "Dosa", amount: 10},
    { id: 1, menuno: "03", menuname: "Poori", amount: 15},
    { id: 1, menuno: "04", menuname: "Poratta", amount: 20},
    { id: 1, menuno: "05", menuname: "Chappathi", amount: 10},
    { id: 1, menuno: "06", menuname: "Vada", amount: 6},
  ];
  return (
    <>
    <div className="bodyp">
        <header class="headerp">
        <nav className="uhomenavp">
        <Link to="/Uhome"><div className="log22p"></div></Link>
            <div>
            <ul id="navbarp">
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
          <Avatar /> My account
        </MenuItem>
        <Divider />
        
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon><Link to="/login">
          <div className='logoutp'>Logout</div></Link>
        </MenuItem>
      </Menu>
            </div>
        </nav>
        </header>
        <main>
        <div class="introp">
        <div className="cardp">
          <div className="profile1p">
            </div>
            <div className="profil12">
            <p></p>
            <h1>NAME : GURU</h1>
            <p></p>
            <h1>EXPERIENCE : 4 years</h1>
            <p></p>
            <h1>RATING : 4.5 ★★★★</h1>
            <p></p>
            <h1>CULINARY BACKGROUND : SOUTH INDIAN</h1>
            <p></p>
            <h1>SPECIALITY CUSINE : SWEET IDLY</h1>
            <p></p>
            <h1>LOCATION : CHENNAI</h1>
            </div>
        </div>
        <div className="transaction-historyp">
      <h2 className="menuitp">MENU ITEMS</h2>
      <table>
        <thead>
          <tr>
            <th>Menu no</th>
            <th>Menu Name</th>
            <th>Price </th>
          </tr>
        </thead>
        <tbody>
          {tran.map((tran) => (
            <tr key={tran.id}>
              <td>{tran.menuno}</td>
              <td>{tran.menuname}</td>
              <td>{tran.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <button className="ser" type="submit" >
                CALUCULATE AMOUNT
            </button>
            <p></p>
            <Link to="/Payment">            
            <button className="sert" type="submit" >
                MAKE PAYMENT
            </button></Link>

            <p></p>
            </div>
           
        </main>
        </div>
    </>
  )
}

export default ViewProf;