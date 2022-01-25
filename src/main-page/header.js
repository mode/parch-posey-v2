import ppLogo from './parchLogo.png'
import React, { Component } from "react";



    class Header extends Component {
    render(){
    let header; 
    console.log(this.props.isLoggedIn)
    console.log(this.props.isloggedIn)
    if(this.props.isloggedIn){
        header=   
        <><div className="header">
            <img src={ppLogo} className="headerLogo" alt="Parch + Posey" /><h1 className="customerName">Company Customer Portal</h1><button className="logOut">Logout</button><section className="waves">
                <div className="wave one"><svg viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M2.83,144.58 C177.76,-52.77 464.45,169.25 501.12,53.80 L500.00,150.00 L-9.59,150.50 Z"></path></svg></div>
                <div className="wave two"><svg viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M0.57,147.55 C159.71,-28.11 413.09,158.39 507.89,-22.19 L500.00,150.00 L0.00,146.55 Z"></path></svg></div>
                <div className="wave three"><svg viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M0.57,147.55 C159.71,-28.11 413.09,158.39 507.89,-22.19 L500.00,150.00 L0.00,146.55 Z"></path></svg></div>
            </section>
            </div>
            </>
    }else{
        header = <>
        <div className="loginContainer">

            <div className="loginWave one" ><svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 1440 528" fill="none">
<path opacity="0.9" d="M404.471 192.81C201.339 268.763 47.5189 448.196 -4 528.418H1440V0.718506C1382.59 77.9968 1258.95 142.027 1066.86 155.275C874.765 168.522 658.385 97.8678 404.471 192.81Z" fill="#A0FFF3"/>
</svg></div>
            <div className="loginWave" ><svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 1440 741" fill="none">
<path opacity="0.4" d="M411.095 296.413C207.963 372.366 47.5189 567.254 -4 647.477V740.211H1440V0.547363C1382.59 77.8257 1225.83 190.431 1066.86 190.431C874.308 190.431 665.009 201.471 411.095 296.413Z" fill="#A0FFF3"/>
</svg></div>
<div className="loginWave three"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 949" fill="none">
<path opacity="0.3" d="M419.927 408.471C216.795 484.424 47.5189 646.193 -4 726.415V951H1440V0L1439.56 0.598572C1381.94 78.1525 1256.27 247.336 1073.48 264.954C881.82 283.427 673.841 313.529 419.927 408.471Z" fill="#A0FFF3"/>
</svg></div>
        </div>
        </>

    }
    return(
    <header className="row">

            {header}
            
    </header>
    )
    }
    }
export default Header;