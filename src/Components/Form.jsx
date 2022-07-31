 import React from "react";
import { useState, useEffect } from "react";

 export function Form() {
    const initialValues = { username: "", email: "", password: "", color:"" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
        errors.color="red";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    };
     return (  
    <div className="container">
               <form onSubmit={handleSubmit} className="shadow mb-5 bg-white rounded" style={{width:"37em",height:"45em",margin:"auto",marginTop:"3em"}}>
 <div>
 <img src="https:i.etsystatic.com/21790469/r/il/c91328/3334525105/il_fullxfull.3334525105_ou3f.jpg" style={{width:"37em",height:"25em"}}></img>
     <label style={{fontFamily:"serif",fontSize:"1.2em",marginLeft:"2.3em",marginTop:"1em",marginBottom:".2em"}}>Email</label>
     <input type="text" name="email" placeholder='Enter ypur email' required="required" className='col-10' style={{marginLeft:"2.6em",marginBottom:"1.2em"}}  value={formValues.email} onChange={handleChange}></input>
     </div>
<p style={{color:"red", marginLeft:"3em"}}>{formErrors.email}</p>

     <div>
     <label style={{fontFamily:"serif",fontSize:"1.2em",marginLeft:"2.3em",marginBottom:".2em"}}>Password</label>
 <input type="password" name="password" placeholder='Password' required="required" className='col-10' style={{marginLeft:"2.6em",marginBottom:"1.2em"}}  value={formValues.password} onChange={handleChange}></input>
<p style={{color:"red", marginLeft:"3em"}}>{formErrors.password}</p>
<button value="Submit" className="btn" style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",fontWeight:"600",fontSize:"1em",color:"white",marginLeft:"16em",backgroundColor:"goldenrod"}}>Submit</button>
 </div>
 </form>
 </div>
     );
 }
