import React from "react";
import {Link, useNavigate} from "react-router-dom"
import { useState,} from "react";
import '../../css-components/Loginre.css';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redex/userSlice";
import { LineStyle } from "@mui/icons-material";

const Loginred=()=>{

    const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
    return(
      <div className="backre">
      <div className="logre">
        <form onSubmit={handleLogout}>
        <center><h1>WELCOME ! {user.name}</h1>
       </center>
          <center>
            <Link to="/Usehome">
            <button  className="butre">
              NEXT
            </button>
            </Link>
          </center>
        </form>
      </div>
      </div>
        
    )
}

export default Loginred;