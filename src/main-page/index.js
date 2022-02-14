import './App.css';
import Header  from './header';
import ButtonContainer from './buttonContainer'
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

  state = {
    isLoggedIn: false,
    username: "",
    password: "",
    account_id:"",
    loginMessage: "",
    signupMessage: ""
      };

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

  handleInput = event => {
    

    this.setState({
      [event.target.name]: event.target.value
    });


  };

  
  
    render() {
      return(

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
