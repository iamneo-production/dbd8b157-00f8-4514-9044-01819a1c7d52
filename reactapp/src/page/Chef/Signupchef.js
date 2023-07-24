import { useState } from "react";
import '../../css-components/Signupchef.css';
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
function Signupchef() {
  const [formValues,setFormValues]=useState("");
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [passwd, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [registrationError, setRegistrationError] = useState("");
    const navigate=useNavigate();

  
  const handleSubmit= async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8081/api/v1/auth/register",
        {
          username: userName,
          password: passwd,
          email:email,
          phone: phoneNumber,
        },
      );

      console.log("Sign in successful");
      console.log(response.data); 
      navigate('/Login1');

      setUserName("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
      setRegistrationError("");
    } catch (error) {
      console.error("Registration failed");
      console.error(error); 

      setRegistrationError("Registration failed. Please try again.");
    }
}
  return (
    <div className="backsc">
      <div className="logsc">
        <form onSubmit={ handleSubmit}>
        <center><h1>Sign Up</h1></center>
          <div className="inputsc">
            <label name="user">Username</label>
            <input  type="text" required id="username" value={userName}
              onChange={(e) => setUserName(e.target.value)}/>
          </div>
          <p  style={{color:"white",fontSize:'16px',marginTop:'2px'}}>{formErrors.username}</p>

          <div className="inputsc">
            <label name="Email">Email</label>
            <input required value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email" id="email"/>
          </div>
          <p  style={{color:"white",fontSize:'10px',marginTop:'2px'}}>{formErrors.email}</p>

          <div className="inputsc">
            <label name="pass">Password</label>
            <input  required type="password" id="password" value={passwd}
              onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <p  style={{color:"white",fontSize:'16px',marginTop:'2px'}}>{formErrors.password}</p>

          <div className="inputsc">
            <label name="mobilex">Mobile</label>
            <input required type="text" id="mobilex" value={phoneNumber}
             onChange={(e) => setPhoneNumber(e.target.value)}/>
          </div>
          <br></br>
          <center>
            <button className="butsc" type="submit">
              Sign In
            </button>
            </center>
        </form>
        
      </div>
      </div>
  );
}

export default Signupchef;


