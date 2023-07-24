import React from "react";
import {Link, useNavigate} from "react-router-dom"
import { useState,} from "react";
import '../../css-components/Login1.css';
import { useDispatch } from "react-redux";
import { login } from "../../redex/userSlice";
import axios from "axios";

const Login1=()=>{

  const navigate=useNavigate();
  // const [isSubmit,setIsSubmit]=useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [errorMessages, setErrorMessages] = useState({});
    // const [isSubmitted, setIsSubmitted] = useState(false);
    
  //   const errors = {
  //   uname: "invalid email",
  //   pass: "invalid password"
  // };
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
        const response=await axios.post('http://localhost:8081/api/v1/auth/authenticate',{
          "email":email,
            "password":password
          });
          navigate('/Uhome');
        console.log(response.data)
        let token=response.data.token;
        let Chef=response.data.chefid;
        console.log(Chef);
        localStorage.setItem('token',token);
        localStorage.setItem('id',Chef);
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
  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );

    return(
      <div className="back">
      <div className="log">
        <form onSubmit={handleSubmit}>
        <center><h1>Login</h1>
       </center>
       <br></br>
       <div className="inputb">
       <label name="username">USERNAME</label>
       <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}  required/>
          </div>
          <div className="inputb">
            <label name="uname">Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required id="uname" />
          </div>
          <p  style={{color:"white",fontSize:"17px"}}>
            {/* {renderErrorMessage("uname")} */}
            </p>      
            <div className="inputb">
            <label name="pass">Password</label>
            <input  type="password" required id="pass" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <p  style={{color:"white",fontSize:"17px"}}>
            {/* {renderErrorMessage("pass")} */}
            
            </p>      
          <br></br>
          <center>
            <button className="but" type="submit" >
              Login
            </button>
          </center>
          <br></br>
          <div className="reg">
              <p>Don't have a account? <Link to="/Signupchef"><a href="#">Register</a></Link></p>
          </div>
        </form>
        
      </div>
      </div>
        
        )
}

export default Login1;
        // import React from "react";
        // import {Link, useNavigate} from "react-router-dom"
        // import { useState,} from "react";
        // import '../../css-components/Login1.css';
        // import { useDispatch } from "react-redux";
        // import { login } from "../../redex/userSlice";
        
        // const Login1=()=>{
        
        //     const navigate=useNavigate();
        //     // const navigateTo=(event)=>{
        //     //     if(isSubmit===true){
        //     //         event.preventDefault();
        //     //         navigate('/Sign');
        //     //     }
        //     // }
        //     const [errorMessages, setErrorMessages] = useState({});
        //   const [isSubmitted, setIsSubmitted] = useState(false);
        
        //   // User Login info
        //   const database = [
        //     {
        //       username: "user1@gmail.com",
        //       password: "pass1"
        //     },
        //     {
        //       username: "user2",
        //       password: "pass2"
        //     }
        //   ];
        
        //   const errors = {
        //     uname: "invalid Email",
        //     pass: "invalid password"
        //   };
        //     const [username,setUsername]=useState("");
        //   const dispatch=useDispatch();
        //   const handleSubmit = (event) => {
        //     event.preventDefault();
        //     dispatch(
        //             login(
        //                 {
        //                     name:username
        //                 }
        //             )
        //         )
        //     var { uname, pass } = document.forms[0];
        
        //     const userData = database.find((user) => user.username === uname.value);
        
        //     if (userData) {
        //       if (userData.password !== pass.value) {
        //         setErrorMessages({ name: "pass", message: errors.pass });
        //       } else {
        //         setIsSubmitted(true);
        //         navigate('/Uhome');
        //       }
        //     } else {
        //       setErrorMessages({ name: "uname", message: errors.uname });
        //     }
        //   };
        //   const renderErrorMessage = (name) =>
        //     name === errorMessages.name && (
        //       <div className="error">{errorMessages.message}</div>
        //     );
        
        //     return(
        //       <div className="back">
        //       <div className="log">
        //         <form onSubmit={handleSubmit}>
        //         <center><h1>Login</h1>
        //        </center>
        //        <br></br>
        //        <div className="inputb">
        //        <label name="username">USERNAME</label>
        //        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}  required/>
        //           </div>
        //           <div className="inputb">
        //             <label name="uname">EMAIL</label>
        //             <input type="text" required id="uname"/>
        //           </div>
        //           <p  style={{color:"white",fontSize:"17px"}}>{renderErrorMessage("uname")}</p>      
        //             <div className="inputb">
        //             <label name="pass">PASSWORD</label>
        //             <input  type="password" required id="pass"/>
        //           </div>
        //           <p  style={{color:"white",fontSize:"17px"}}>{renderErrorMessage("pass")}</p>      
        //           <br></br>
        //           <center>
        //             <button className="but" type="submit" >
        //               Login
        //             </button>
        //           </center>
        //           <br></br>
        //           <div className="reg">
        //               <p>Don't have a account? <Link to="/Signupchef"><a href="#">Register</a></Link></p>
        //           </div>
        //         </form>
                
        //       </div>
        //       </div>
                
        //     )
        // }
        
        // export default Login1;