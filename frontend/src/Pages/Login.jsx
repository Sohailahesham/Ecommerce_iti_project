import React from "react";
import "./CSS/Login.css";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = async () => {
    let responseData;
    await fetch("http://localhost:4000/login", {
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
      <div className="login">
        <div className="login-container">
          <h1>Log In</h1>
          <div className="login-fields">
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
          </div>
          <button onClick={this.login}>Continue</button>
          <p className="login-signup">
            Don't have an account?{" "}
            <Link
              to="/signup"
              style={{
                color: "#ff4141",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              SignUp here
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
