import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpUserAsync } from "../../Redux/Slices/authSlice";
import SignupModal from "../../Components/SignupModal";

const defaultValue = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const [user, setUser] = useState(defaultValue);
  const [errors, setErrors] = useState({firstName:"", lastName:"", email:"", phone:"", password:"", confirmPassword:""});
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userSignUp } = useSelector((state) => state.auth);

  console.log(userSignUp, "userSignUp");

  const onChangeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  //form validation function 
  // const validate = ()=>{
  //   let valid = true;
  //   let errors = {firstName:"", lastName:"", email:"", phone:"", password:"", confirmPassword:""}

    //name validation
    // if(!user.firstName){
    //   errors.firstName = "First Name is required"
    //   valid = false
    // }
    // else if(!/^[a-zA-Z ]{2,30}$/.test(user.firstName)){
    //   errors.firstName = "First Name is Invalid!"
    //   valid = false;
    // }

    //last name validation
  //   if(!user.lastName){
  //     errors.lastName = "Last Name is required"
  //     valid = false;
  //   }
  //   else if(!/^[a-zA-Z ]{2,30}$/.test(user.lastName)){
  //     errors.lastName = "Last Name is Invalid"
  //     valid = false
  //   }
  //   //email validation
  //   else if (!/\S+@\S+\.\S+/.test(user.email)) {
  //     errors.email = "Email address is invalid";
  //     valid = false;
  //   }

  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(signUpUserAsync(user));
    } catch (error) {
      console.log(error.message);
    }
  };

   useEffect(
    () => {
      if (userSignUp?.message === "Registered Success") {
        setShowModal(true);
        setTimeout(() => navigate("/login"), 1000); //// Redirect after success
        // navigate("/login");
      }
    },
    [userSignUp],
    navigate
  );

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label className="sign-text">First Name</label>
        <input
          className="signup-input-box"
          type="text"
          placeholder="Enter First Name"
          onChange={onChangeValue}
          name="firstName"
          value={user.firstName}
        />

        <label className="sign-text">Last Name</label>
        <input
          className="signup-input-box"
          type="text"
          placeholder="Enter Last Name"
          onChange={onChangeValue}
          name="lastName"
          value={user.lastName}
        />

        <label className="sign-text">Email</label>
        <input
          className="signup-input-box"
          type="email"
          placeholder="Enter Email"
          onChange={onChangeValue}
          name="email"
          value={user.email}
        />

        <label className="sign-text">Phone Number</label>
        <input
          className="signup-input-box"
          type="phone"
          placeholder="Enter Phone Number"
          onChange={onChangeValue}
          name="phone"
          value={user.phone}
        />

        <label className="sign-text">Password</label>
        <input
          className="signup-input-box"
          type="password"
          placeholder="Enter Password"
          onChange={onChangeValue}
          name="password"
          value={user.password}
        />

        <label className="sign-text">Confirm Password</label>
        <input
          className="signup-input-box"
          type="password"
          placeholder="Confirm Password"
          onChange={onChangeValue}
          name="confirmPassword"
          value={user.confirmPassword}
        />

        <button type="submit" className="signup-submit">
          Register
        </button>
      </form>

      <SignupModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default Signup;
