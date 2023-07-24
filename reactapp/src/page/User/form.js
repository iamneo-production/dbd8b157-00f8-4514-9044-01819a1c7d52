import React,{useState} from 'react'
import './Form.css'

function DynamicForm() {
    const [formValues,setFormValues]=useState("");
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(event)=>{
        const{id,value}=event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate=(values)=>{
        const errors={};
        const reg=new RegExp("[0-9]")
        const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 

        if(!values.username)
        errors.username="Please Fill the column";
        else if(values.username.length<5)
        errors.username="Username must have minimum 5 characters";
        else if(reg.test(values.username))
        errors.username="Username must contain only alphabets";

        if(!values.email)
        errors.email="Please Fill the email";
        
        if(!values.password)
        errors.password="Please Fill the password";
        else if(values.password.length<5)
        errors.password="Password is Weak";
        else if(values.password.length<8)
        errors.password="Password is Good";
        else if(values.password.length===8)
        errors.password="Password is Strong";
        else if(values.password.length>8)
        errors.password="Password is Very Strong";
        return errors;
    }
  return (
    <div>
        <form className='form1' onSubmit={handleSubmit}> 
            <div className='div1'>      
                <h1 className='h11'>User Form</h1>
                <div className='row'>
                    <label>Enter your username</label><br></br>
                    <input type="text" id='username' value={formValues.username}
                        onChange={handleChange}/>
                </div>
                <p  style={{color:"red",fontSize:'20px',marginTop:'2px'}}>{formErrors.username}</p>

                <div className='row'>
                    <label>Enter your email</label><br></br>
                    <input type="email" id='email' value={formValues.email}
                        onChange={handleChange}/>
                </div>
                <p  style={{color:"wihite",fontSize:'20px',marginTop:'2px'}}>{formErrors.email}</p>

                <div className='row'>
                    <label>Enter your password</label><br></br>
                    <input type="password" id='password' value={formValues.password}
                        onChange={handleChange}/>
                </div>
                <p  style={{color:"white",fontSize:'20px',marginTop:'2px'}}>{formErrors.password}</p>

                <div className='row'>
                    <button className='b1'><h2>Login</h2></button>
                </div>
            </div> 
        </form>
    </div>
  )
}

export default DynamicForm