import React from "react";
import {Link, useNavigate} from "react-router-dom"
import { useState,} from "react";
import '../../css-components/Login.css';
import { useDispatch } from "react-redux";
import { login } from "../../redex/userSlice";
import axios from "axios";

const Login=()=>{

    const navigate=useNavigate();
    const [isSubmit,setIsSubmit]=useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    
  const errors = {
    uname: "invalid email",
    pass: "invalid password"
  };
  const [username,setUsername]=useState("");
//   const handleName=(event)=>{
//     event.preventDefault();
//     setUsername(event.target.value);
// }
const dispatch=useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(
        login(
            {
                name:username
            }
        )
    )
      try{
        const response=await axios.post('http://localhost:8080/api/v1/auth/authenticate',{
            "email":email,
            "password":password
        });
        navigate('/UseHome');
        console.log(response.data)
        let token=response.data.token;
        let user=response.data.userid;
        localStorage.setItem('token',token);
        localStorage.setItem('user',JSON.stringify(user));
    }catch(error){
        console.error('Error: ',error);
    }
    //   const response = await axios.post(
    //     "http://localhost:8080/api/v1/auth/authenticate",
    //     {
    //       email,
    //       password,
    //     },
    //   );

    //   console.log("Sign in successful");
    //   console.log(response.data); 

    //   setEmail("");
    //   setPassword("");

    //   // setRegistrationError("");
    // } catch (error) {
    //   console.error("Registration failed");
    //   console.error(error); 

    //   // setRegistrationError("Registration failed. Please try again.");
    // }
    // setIsSubmit(true);
    // if(isSubmit===true)
    //         navigateTo(event);
    // var { uname, pass } = document.forms[0];

    // const userData = database.find((user) => user.username === uname.value);
    
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //     navigate('/Usehome');
    //   }
    // } else {
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
  };
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    return(
      <div className="backq">
      <div className="logq">
        <form onSubmit={handleSubmit}>
        <center><h1>Login</h1>
       </center>
       <br></br>
       <div className="inputbq">
       <label name="username">USERNAME</label>
       <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}  required/>
          </div>
          <div className="inputbq">
            <label name="uname">Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required id="uname" />
          </div>
          <p  style={{color:"white",fontSize:"17px"}}>{renderErrorMessage("uname")}</p>      
            <div className="inputbq">
            <label name="pass">Password</label>
            <input  type="password" required id="pass" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <p  style={{color:"white",fontSize:"17px"}}>{renderErrorMessage("pass")}</p>      
          <br></br>
          <center>
            <button className="butq" type="submit" >
              Login
            </button>
          </center>
          <br></br>
          <div className="regq">
              <p>Don't have a account? <Link to="/Sign"><a href="#">Register</a></Link></p>
          </div>
        </form>
        
      </div>
      </div>
        
    )
}

export default Login;