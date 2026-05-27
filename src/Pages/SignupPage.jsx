import React , {useState} from "react";
import "../css/Login.css"
import BlogBtn from "../Components/BlogBtn";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");



   const handleSignup = (e) => {
    e.preventDefault();
     console.log("FORM SUBMITTED");

     console.log("USER:", firstName,lastName,email,password,phoneNumber);

      if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !phoneNumber
    ) {
      alert("Fill all fields");
      return;
    } else {
      alert("Signup Successfully");
      return;
    } 
   };
  return (


    <div className="create_account_container">
      <form className="account_form" onSubmit={handleSignup}>

        <h1>Create Account</h1>

        <input
         type="text"
         id="First Name"
         placeholder="Enter your first name" 
         value={firstName}
         onChange={(e) =>  setFirstName(e.target.value) }/>

        <input 
        type="text"
        id="Last Name" 
        placeholder="Enter your last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)} />

        <input 
        type="password"
        id="password"
         placeholder="Create a strong password" 
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />

        <input 
        type="email" 
        id="email"
        value={email}
        placeholder="Enter your correct email" 
        onChange={(e) => setEmail(e.target.value)}
        />

        <input 
        type="text"
        id="number"
        value={phoneNumber}
        placeholder="Enter a valid phone number"
        onChange={(e) => setPhoneNumber(e.target.value)} />

        <BlogBtn className ="button" text="Create"/>

      </form>
    </div>
  );
};





export default SignupPage;
