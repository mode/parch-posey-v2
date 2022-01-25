import './App.css';
import Header  from './header';
import ButtonContainer from './buttonContainer'
import React, { Component } from "react";
import axios from "axios";


class App extends Component {

  state = {
    isLoggedIn: false,
    email: "",
    user: "",
    password: "",
    loginMessage: "",
    signupMessage: ""
    };

    handleLogin = event => {
      event.preventDefault();
      axios
        .post("https://stark-chamber-26373.herokuapp.com/user/login", {
        // .post("http://localhost:3001/user/login", {
          email: this.state.email,
          password: this.state.password
        })
        .then(response => {
          // debugger;
          localStorage.token = response.data.signedJwt;
          this.setState({
            isLoggedIn: true,
            user: response.data.user
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
      this.setState({
        email: "",
        password: "",
        isLoggedIn: false
      });
      localStorage.clear();
  };
  
    render() {
      let temp;
      console.log(this.state.isLoggedIn)
      if(this.state.isLoggedIn){
        temp=<>
                <Header
                  isloggedIn = {this.state.isLoggedIn}
                  email = {this.state.email}
                  user = {this.state.user}
                  handleLogin = {this.state.handleLogin}
                  handleLogout = {this.state.handleLogout}
                ></Header>
                <ButtonContainer></ButtonContainer>
        </>
      }else{
              temp =<><Header
                isloggedIn = {this.state.isLoggedIn}
                email = {this.state.email}
                user = {this.state.user}
                handleLogin = {this.state.handleLogin}
                handleLogout = {this.state.handleLogout}
              ></Header></>
      }

      console.log(temp)
      return(
    <div className="MainContainer">
        {temp}
     </div>
      )
    }


}




export default App;
