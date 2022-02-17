import './App.css';
import Header  from './header';
import ButtonContainer from './mainContainer'
import React, { Component } from "react";
import axios from "axios";
import Login from './login';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";



class App extends Component {
// Default user state before login
  state = {
    isLoggedIn: false,
    username: "",
    password: "",
    account_id:"",
    loginMessage: "",
    signupMessage: ""
      };
// Verify that there is a localStorage token and the user is auth
    verify = () => {
      console.log("verify");
      if (localStorage.token) {
        console.log("Verified")
      } else {
        this.setState({
          isLoggedIn: false
        });
      }
    };
    // Request user info from backend
    handleLogin = event => {
      event.preventDefault();
      axios
        .post("https://parch-posey-backend.herokuapp.com/login", {
          username: this.state.username,
          password: this.state.password
        })
        .then(response => {
          // debugger;
          localStorage.token = response.data.token;
          this.setState({
            isLoggedIn: true,
            username: response.data.account_name,
            account_id:response.data.account_id
          });
          this.verify();
        })
        .catch(error => {
          this.setState({
            loginMessage: "Email/Password incorrect"
          });
        });
    };
      // Handle user logout
    handleLogout = event => {
      console.log("This")
      this.setState({
        username: "",
        password: "",
        isLoggedIn: false,
        loginMessage: ""
      });
      localStorage.clear();
  };
// Capture values inputted into the signin forms
  handleInput = event => {
    

    this.setState({
      [event.target.name]: event.target.value
    });


  };

  
  
    render() {
      return(
    // Router, if user is logged in, they will see main page. 
    // If not, they will see login page. 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={this.state.isLoggedIn?<Navigate to="/home"/>:<><Login
                isloggedIn = {this.state.isLoggedIn}
                email = {this.state.email}
                user = {this.state.user}
                handleLogin = {this.handleLogin}
                handleInput = {this.handleInput}
                loginMessage = {this.state.loginMessage}

              ></Login></>} />
      <Route path="/home" element={this.state.isLoggedIn?<>
                <Header
                  isloggedIn = {this.state.isLoggedIn}
                  username = {this.state.username}
                  handleLogout = {this.handleLogout}
                ></Header>
                <ButtonContainer
                  account_id = {this.state.account_id}
                  
                ></ButtonContainer>
        </>:<Navigate to="/"/>} />
    </Routes>
  </BrowserRouter>

      )
    }


}




export default App;
