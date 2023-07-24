import React from 'react'
import '../../css-components/Usehome.css';
import add from '../../css-components/add.png';
import view from '../../css-components/resume.png';
import edit from '../../css-components/file (1).png';
import { AppBar, Avatar, IconButton,Box,Tooltip,Menu,TextField, InputBase,Button, MenuList,MenuItem,Divider,ListItemIcon} from '@mui/material'
import Typography from '@mui/material/Typography';
import {Logout,Settings,PersonAdd} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redex/userSlice";

function UseHome() {
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
    <div className="bodu">
        <header class="headu">
        <nav className="uhomenu">
        <div className="log2u"></div>
            <div>
                <ul id="navbau">
                    <Link to="/Eventdet"><li><a className="active" href="#"><Button className='button31u'><img src={add} alt="my" width={"35px"} /><h1 className="editu">EVENT DETAILS</h1></Button></a></li></Link>
                    {/* <Link to="/view"><li><a href="#"><Button className='button31u'><img src={edit} alt="my" width={"35px"} /><h1 className="editu">VIEW DETAILS</h1></Button></a></li></Link>
                    <Link to="/Editd"><li><a href="#"><Button className='button31u'><img src={view} alt="my" width={"35px"} /><h1 className="editu">EDIT DETAILS</h1></Button></a></li></Link> */}
                    
                     {/* <li><a href="index.html">Contact</a></li>  */}
                     <Box sx={{ flexGrow: 0 }}>
                     <li className="prof2">
                      <IconButton
                        onClick={handleClick} sx={{ p: 0}}
                        size="small"
                      >
                      <Avatar sx={{ width: 42, height: 42 ,bgcolor : "black"  }}></Avatar>
                      </IconButton></li></Box>
                </ul>
                <Menu
        anchorEl={anchorEl}
        id="account-menu"
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
          <div className='logou'>Logout</div></Link>
        </MenuItem>
      </Menu>
            </div>
        </nav>
        </header>
        <main>
        <div class="intru">
        <h1 className="deu">CHEF FINDER</h1>
            <p>A Chef must think like a scientist, Organize like an accountant</p><p>Plate like an Artist, Cook like our Grandma</p>
            </div>
        </main>
        </div>
        
    </>
  )
}

export default UseHome;



// import plant from './plant.png';
// <img src={plant} width={100}/>