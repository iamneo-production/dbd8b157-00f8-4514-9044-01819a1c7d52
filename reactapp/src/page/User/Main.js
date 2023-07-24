import React from "react";
import {useNavigate} from "react-router-dom"
import { useState,} from "react";
import '../../css-components/Login.css';
const Main=()=>{

    const navigate=useNavigate();
    const navigateTo=(event)=>{
        if(isSubmit===true){
            event.preventDefault();
            navigate('/Sign');
        }
    }

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleName=(event)=>{
        event.preventDefault();
        setEmail(event.target.value);
    }
    const handlePwd=(event)=>{
        event.preventDefault();
        setPassword(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrors(validate({email,password}));
        setIsSubmit(true);
        if(isSubmit===true)
            navigateTo(event);
    }
    const validate=(values)=>{
        const errors={};
        const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 

        if(!values.email)
        errors.email="Username is Required";
  
        if(!values.password)
        errors.password="Password is Required";
        else if(!preg.test(values.password))
        errors.password="Invalid password";
        return errors;
    }
    return(
      <div className="back">
      <div className="log">
        <form onSubmit={ handleSubmit}>
        <center><h1>Login</h1></center>
          <div className="inputb">
            <label name="Email">Email</label>
            <input type="email" required id="email" value={email}
              onChange={handleName}/>
          </div>
              <p  style={{color:"white",fontSize:"16px"}}>{formErrors.username}</p>
          <div className="inputb">
            <label name="pass">Password</label>
            <input  type="password" required id="password" value={password}
              onChange={handlePwd}/>
          </div>
              <p  style={{color:"white",fontSize:"17px"}}>{formErrors.password}</p>
          <br></br>
          <center>
            <button className="but" type="submit" >
              Login
            </button>
          </center>
          <div className="reg">
              <p>Don't have a account? <a href="#">Register</a></p>
          </div>
        </form>
        
      </div>
      </div>
        
    )
}
export default Main;