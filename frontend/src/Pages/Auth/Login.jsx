import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logInUserAsync } from "../../Redux/Slices/authSlice";
import { Link } from "react-router-dom";

const defaultValue = {
  email: "",
  password: "",
};

const Login = () => {
  const [user, setUser] = useState(defaultValue);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginInfo } = useSelector((state) => state.auth);

  const onChangeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Form validation function
  const validate = () => {
    let valid = true;
    let errors = { email: "", password: "" };

    // Email validation
    if (!user.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = "Email address is invalid";
      valid = false;
    }

    // Password validation
    if (!user.password) {
      errors.password = "Password is required";
      valid = false;
    } else if (user.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      // If validation passes, dispatch login action
      await dispatch(logInUserAsync(user));
    }
  };

  useEffect(() => {
    if (loginInfo?.message === "Login Success") {
      setTimeout(() => navigate("/"), 1000);
    }
  }, [loginInfo, navigate]);

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        
        <label className="sign-text">Email</label>
        <input
          className="signup-input-box"
          type="email"
          placeholder="Enter Email"
          onChange={onChangeValue}
          name="email"
          value={user.email}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <label className="sign-text">Password</label>
        <input
          className="signup-input-box"
          type="password"
          placeholder="Enter Password"
          onChange={onChangeValue}
          name="password"
          value={user.password}
        />
        {errors.password && <p className="error-text">{errors.password}</p>}

        <button type="submit" className="signup-submit">
          Login
        </button>

        <Link to="/forgotpassword" className="forgot-password-link">
          Forgot?Password
        </Link>
        <Link to="/signup" className="forgot-password-link">
          <p className="p-tag-forgot-password">Don't have an account?</p>Sign Up
        </Link>
      </form>
    </div>
  );
};

export default Login;
