import React from 'react'
import '../../css-components/Editc.css';
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

function Editc() {
  
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
    let id=localStorage.getItem('id');
    console.log(id);
    try{
      const response = await axios.post(`http://localhost:8081/api/v1/auth/chefdet/post`,
      {

        "chef_location":location,
          "chef_experience":experience,
          "chef_speciality_cuisine":special,
          "chef_culinary_background":culback,
          "chef_id":id
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
    // navigate('/Uhome')
  }
  return (
    <>
    <div className="bodyed">
        <header class="headered">
        <nav className="uhomenaved">
        <div className="log22ed"></div>
            <div>
                <ul id="navbared">
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
          <div className='logouted'>Logout</div></Link>
        </MenuItem>
      </Menu>
            </div>
        </nav>
        </header>
        <main>
        <div class="introed">
        <div className="caed">
          <form onSubmit={handleSubmit}>
            <br></br><br></br>
            <label htmlFor="username">LOCATION :</label><br></br>
            <input type="text" className="used" placeholder='Enter Your prefered location' height="50"
              value={location}
              onChange={handlelocation}
            /><br></br><br></br>
            <label htmlFor="name">CULINARY BACKGROUND :</label><br></br>
            <input type="text" className="used" placeholder="Enter your culinary background"
              value={culback}
              onChange={handlecul}
            /><br></br><br></br>
            <label htmlFor="username">EXPERIENCE :</label><br></br>
            <input type="text" className="used" placeholder='Enter your experience' height="50"
              value={experience}
              onChange={handlexp}
            /><br></br><br></br>
            <label htmlFor="username">SPECIALITY CUSINE :</label><br></br>
            <input type="text" className="used" placeholder='Enter speciality cusine' height="50"
              value={special}
              onChange={handlesep}
            /><br></br><br></br>
            
            <div className="cened">
              <button className="bted" type="submit">ADD</button>
            </div>
          </form>
        </div>
            </div>
        </main>
        </div>
    </>
  )
}

export default Editc;
// import React from 'react'
// import '../../css-components/Editc.css';
// import { useState } from "react";
// // import survey from './cheffinder-logo.png';
// import { AppBar, Avatar, IconButton,Box,Tooltip,Menu,TextField, InputBase,Button, MenuList,MenuItem,Divider,ListItemIcon} from '@mui/material'
// import Typography from '@mui/material/Typography';
// import {Logout,Settings,PersonAdd} from '@mui/icons-material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import {Link} from "react-router-dom"


// function Editc() {
//   const [state, setState] = useState({
//     serialno: '',
//     name: '',
//     rating: '',
//     dirname: '',
//     year: ''
//   });

//   const handleNoChange = (event) => {
//     setState({ ...state, serialno: event.target.value });
//   };

//   const handleNameChange = (event) => {
//     setState({ ...state, name: event.target.value });
//   };

//   const handleratingChange = (event) => {
//     setState({ ...state, rating: event.target.value });
//   };

//   const handleDirChange = (event) => {
//     setState({ ...state, dirname: event.target.value });
//   };

//   const handleYearChange = (event) => {
//     setState({ ...state, year: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = {
//       serialno: state.serialno,
//       name: state.name,
//       rating: state.rating,
//       dirname: state.dirname,
//       year: state.year,
//     };

//     // axios.post('http://127.0.0.1:8080/post', data);
//   };
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <>
//     <div className="bodyed">
//         <header class="headered">
//         <nav className="uhomenaved">
//         <div className="log22ed"></div>
//             <div>
//                 <ul id="navbared">
//                     <Link to="/Menuc"><li><a className="active" href="index.html">MENU</a></li></Link>
//                     {/* <li><a href="index.html">VIEW DETAILS</a></li>
//                     <li><a href="index.html">EDIT DETAILS</a></li> */}
//                     {/* <li><a href="index.html">About</a></li>
//                      <li><a href="index.html">Contact</a></li> */}
//                      <Box sx={{ flexGrow: 0 }}>
//                      <li className="prof1">
//                       <IconButton
//                         onClick={handleClick} sx={{ p: 0}}
//                         size="small"
//                       >
//                       <Avatar sx={{ width: 42, height: 42 ,bgcolor : "black"  }}></Avatar>
//                       </IconButton></li></Box>
//                 </ul>
//                 <Menu
//         anchorEl={anchorEl}
//         id="account-menued"
//         open={open}
//         onClose={handleClose}
//         onClick={handleClose}
//         PaperProps={{
//           elevation: 0,
//           sx: {
//             overflow: 'visible',
//             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//             mt: 1.5,
//             '& .MuiAvatar-root': {
//               width: 32,
//               height: 32,
//               ml: -0.5,
//               mr: 1,
//             },
//             '&:before': {
//               content: '""',
//               display: 'block',
//               position: 'absolute',
//               top: 0,
//               right: 14,
//               width: 10,
//               height: 10,
//               bgcolor: 'background.paper',
//               transform: 'translateY(-50%) rotate(45deg)',
//               zIndex: 0,
//             },
//           },
//         }}
//         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//       >
//         <MenuItem onClick={handleClose}>
//           <Avatar /> My account
//         </MenuItem>
//         <Divider />
//         {/* <MenuItem onClick={handleClose}>
//           <FavoriteIcon>
//             <Settings fontSize="small" />
//           </FavoriteIcon>
//           &nbsp;&nbsp;&nbsp;Favorites
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <BookmarkBorderIcon>
//             <Settings fontSize="small" />
//           </BookmarkBorderIcon>
//           &nbsp;&nbsp;&nbsp;Favorites
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <Settings fontSize="small" />
//           </ListItemIcon>
//           Settings
//         </MenuItem> */}
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <Logout fontSize="small" />
//           </ListItemIcon><Link to="/login">
//           <div className='logouted'>Logout</div></Link>
//         </MenuItem>
//       </Menu>
//             </div>
//         </nav>
//         </header>
//         <main>
//         <div class="introed">
//         <div className="caed">
//           <form onSubmit={handleSubmit}>
//             <br></br><br></br>
//             <label htmlFor="username">CHEF ID :</label><br></br>
//             <input type="text" className="used" placeholder='Enter Chrf Id' height="50"
//               value={state.year}
//               onChange={handleYearChange}
//             /><br></br><br></br>
//             <label htmlFor="username">LOCATION :</label><br></br>
//             <input type="text" className="used" placeholder='Enter Your prefered location' height="50"
//               value={state.serialno}
//               onChange={handleNoChange}
//             /><br></br><br></br>
//             <label htmlFor="name">CULINARY BACKGROUND :</label><br></br>
//             <input type="text" className="used" placeholder="Enter your culinary background"
//               value={state.name}
//               onChange={handleNameChange}
//             /><br></br><br></br>
//             <label htmlFor="username">EXPERIENCE :</label><br></br>
//             <input type="text" className="used" placeholder='Enter your experience' height="50"
//               value={state.rating}
//               onChange={handleratingChange}
//             /><br></br><br></br>
//             <label htmlFor="username">SPECIALITY CUSINE :</label><br></br>
//             <input type="text" className="used" placeholder='Enter speciality cusine' height="50"
//               value={state.dirname}
//               onChange={handleDirChange}
//             /><br></br><br></br>
            
//             <div className="cened">
//               <button className="bted" type="submit">ADD</button>
//             </div>
//           </form>
//         </div>
//             </div>
//         </main>
//         </div>
//     </>
//   )
// }

// export default Editc;
