import { useState } from "react";
import '../../css-components/Sign.css';
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
function Sign() {
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
    // const navigateTo=(event)=>{
    //     if(isSubmit===true){
    //         event.preventDefault();
    //         navigate('/Login');
    //     }
    // }

    // const handleChange=(event)=>{
    //     const{id,value}=event.target;
    //     setFormValues({...formValues,[id]:value});
    //     console.log(formValues);
    // }

  
  const handleSubmit= async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          username: userName,
          password: passwd,
          email:email,
          phone: phoneNumber,
        }
      );
      console.log("Sign in successful");
      console.log(response.data); 
      
      setUserName("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
      setPasswordError("");
      setRegistrationError("");
      navigate('/Login');
    } catch (error) {
      console.error("Registration failed");
      console.error(error); 

      setRegistrationError("Registration failed. Please try again.");
    }
    // setFormErrors(validate(formValues));
    // setIsSubmit(true);
    // if(isSubmit===true)
    //         navigateTo(e);
}
//   const validate=(values)=>{
//     const errors={};
//     const reg=new RegExp("[0-9]")
//     const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 

//     if(!values.username)
//     errors.username="Please Fill the column";
//     else if(values.username.length<5)
//     errors.username="Username must have minimum 5 characters";
//     else if(reg.test(values.username))
//     errors.username="Username must contain only alphabets";

//     if(!values.email)
//     errors.email="Please Fill the email";
    
//     if(!values.password)
//     errors.password="Please Fill the password";
//     else if(!preg.test(values.password))
//         errors.password="Invalid password";
//     return errors;
// }
  return (
    <div className="backs">
      <div className="logs">
        <form onSubmit={ handleSubmit}>
        <center><h1>Sign In</h1></center>
          <div className="inputs">
            <label name="user">Username</label>
            <input  type="text" required id="username" value={userName}
              onChange={(e) => setUserName(e.target.value)}/>
          </div>
          <p  style={{color:"white",fontSize:'16px',marginTop:'2px'}}>{formErrors.username}</p>

          <div className="inputs">
            <label name="Email">Email</label>
            <input required value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email" id="email"/>
          </div>
          <p  style={{color:"white",fontSize:'10px',marginTop:'2px'}}>{formErrors.email}</p>

          <div className="inputs">
            <label name="pass">Password</label>
            <input  required type="password" id="password" value={passwd}
              onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <p  style={{color:"white",fontSize:'16px',marginTop:'2px'}}>{formErrors.password}</p>

          <div className="inputs">
            <label name="mobilex">Mobile</label>
            <input required type="text" id="mobilex" value={phoneNumber}
             onChange={(e) => setPhoneNumber(e.target.value)}/>
          </div>
          <br></br>
          <center>
            <button className="buts" type="submit">
              Sign In
            </button>
            </center>
        </form>
        
      </div>
      </div>
  );
}

export default Sign;