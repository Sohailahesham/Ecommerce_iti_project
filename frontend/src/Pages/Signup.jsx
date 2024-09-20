import React from "react";
import "./CSS/Signup.css";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  state = {
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  isValidName(name) {
    return name.length > 0 && name.length <= 20;
  }

  isvalidPhone(phone) {
    return /\+\d{11}/.test(phone);
  }

  isPasswordConfirmed(password, confirmPassword) {
    return password === confirmPassword;
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signup = async () => {
    if (
      !this.isValidName(this.state.username) ||
      !this.isValidEmail(this.state.email) ||
      !this.isvalidPhone(this.state.phone) ||
      !this.isPasswordConfirmed(this.state.password, this.state.confirmPassword)
    ) {
      alert("Invalid Input");
      return;
    }

    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  render() {
    return (
      <div className="signup">
        <div className="signup-container">
          <h1>Sign Up</h1>
          <div className="signup-fields">
            <input
              type="text"
              name="username"
              required
              placeholder="Your Name"
              onChange={this.handleInputChange}
              value={this.state.username}
            />
            <input
              type="text"
              name="phone"
              required
              placeholder="Phone Number"
              onChange={this.handleInputChange}
              value={this.state.phone}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirm Password"
              onChange={this.handleInputChange}
              value={this.state.confirmPassword}
            />
          </div>
          <button onClick={this.signup}>Continue</button>
          <p className="signup-login">
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#ff4141",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Signup;
