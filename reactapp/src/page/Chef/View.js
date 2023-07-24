import '../../css-components/View.css';
import React, { useState, useEffect } from 'react';
// import survey from './cheffinder-logo.png';
import { AppBar, Avatar, IconButton,Box,Tooltip,Menu,TextField, InputBase,Button, MenuList,MenuItem,Divider,ListItemIcon} from '@mui/material'
import Typography from '@mui/material/Typography';
import {Logout,Settings,PersonAdd} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {Link} from "react-router-dom"
import axios from 'axios';


function View() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const task = [
  //   { id: 1, menuno: 1, menuname: "IDLY", amount: 20},
  //   { id: 2, menuno: 2, menuname: "DOSA", amount: 40},
  //   { id: 3, menuno: 3, menuname: "POORI", amount: 40},
  //   { id: 4, menuno: 4, menuname: "PORATTA", amount: 50},
  // ];
    const [task, setTaskData] = useState([]); // Fix variable name here
    const token = localStorage.getItem('token');
    const id=localStorage.getItem('id');
  useEffect(() => {
    const fetchTaskData = async () => {
      console.log(token);
      try {
        const response = await axios.get(`http://localhost:8081/api/v1/auth/cheffood/get/${id}`, 
        {
          headers: {
            "Authorization": `Bearer ${token}`, // Add the token to the request headers
            "cache-control": 'no-cache',
          }
        }
        );

        setTaskData(response.data);
        console.log("response.data",response)
      } catch (error) {
        console.log(error);
      }
    };
    if(id)
    {
    fetchTaskData();
    }
  }, []);
  useEffect(() => {
    console.log(task);
  }, [task]);

  return (
    <>
    <div className="bodyv">
        <header class="headerv">
        <nav className="uhomenavv">
        <Link to="/Uhome"><div className="log22v"></div></Link>
            <div>
            <ul id="navbarv">
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
          <div className='logoutv'>Logout</div></Link>
        </MenuItem>
      </Menu>
            </div>
        </nav>
        </header>
        <main>
        <div class="introv">
        <div className="transaction-history">
      <h2 className="menuit">MENU ITEMS</h2>
      <table>
        <thead>
          <tr>
            <th>Menu no</th>
            <th>Menu Name</th>
            <th>Price </th>
          </tr>
        </thead>
        <tbody>
          {task.map((tran) => (
            <tr key={tran.id}>
              <td>{tran.chef_food_no}</td>
              <td>{tran.chef_food_name}</td>
              <td>{tran.chef_food_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

            </div>
        </main>
        </div>
    </>
  )
}

export default View;