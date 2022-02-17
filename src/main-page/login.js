import ppLogo2 from './assets/parchLog2.png'
import React, { Component } from "react";
import Lock from './assets/icon.png'

class Login extends Component {
    render(){
   
    
        let handleLogin = this.props.handleLogin
        let handleInput = this.props.handleInput
        let handeLogout = this.props.handleLogout
        let login = <>
            <div className="loginContainer">
    
                <div className="loginWave one" ><svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 1440 528" fill="none">
                        <path opacity="0.9" d="M404.471 192.81C201.339 268.763 47.5189 448.196 -4 528.418H1440V0.718506C1382.59 77.9968 1258.95 142.027 1066.86 155.275C874.765 168.522 658.385 97.8678 404.471 192.81Z" fill="#A0FFF3"/>
                                </svg>
                    
                    </div>
                <div className="loginWave two" ><svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 1440 741" fill="none">
                        <path opacity="0.4" d="M411.095 296.413C207.963 372.366 47.5189 567.254 -4 647.477V740.211H1440V0.547363C1382.59 77.8257 1225.83 190.431 1066.86 190.431C874.308 190.431 665.009 201.471 411.095 296.413Z" fill="#A0FFF3"/>
                        </svg>
                    </div>
                <div className="loginWave three">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 949" fill="none">
                                <path opacity="0.3" d="M419.927 408.471C216.795 484.424 47.5189 646.193 -4 726.415V951H1440V0L1439.56 0.598572C1381.94 78.1525 1256.27 247.336 1073.48 264.954C881.82 283.427 673.841 313.529 419.927 408.471Z" fill="#A0FFF3"/>
                        </svg>
    
                
                    </div>
                <div className="loginForm">
    
                    <section className="svgArt"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="2000" height="600" viewBox="10 15 1600 448" fill="none">
            <g filter="url(#filter0_d_84_5785)">
            <g clipPath="url(#clip0_84_5785)">
            <rect x="4" width="299" height="500" fill="#F4FFFE" border=""></rect>
            <path opacity="0.5"  d="M121.5 187.493C121.5 184.703 122.954 182.114 125.337 180.662L173.337 151.412C178.668 148.163 185.5 152 185.5 158.243V265.507C185.5 268.297 184.046 270.886 181.663 272.338L133.663 301.588C128.332 304.837 121.5 301 121.5 294.757V187.493Z" fill="#B3FDF4"></path>
            <path opacity="0.3" d="M109.5 182.493C109.5 179.703 110.954 177.114 113.337 175.662L161.337 146.412C166.668 143.163 173.5 147 173.5 153.243V260.507C173.5 263.297 172.046 265.886 169.663 267.338L121.663 296.588C116.332 299.837 109.5 296 109.5 289.757V182.493Z" fill="#B3FDF4"></path>
            <path opacity="0.6" d="M134.5 192.493C134.5 189.703 135.954 187.114 138.337 185.662L186.337 156.412C191.668 153.163 198.5 157 198.5 163.243V270.507C198.5 273.297 197.046 275.886 194.663 277.338L146.663 306.588C141.332 309.837 134.5 306 134.5 299.757V192.493Z" fill="#B4FDF4"></path>
            <g opacity="0.7">
            <rect x="174.5" y="264" width="12" height="56" rx="6" fill="#A1F3E4"></rect>
            <rect x="190.5" y="245" width="12" height="75" rx="6" fill="#A1F3E4"></rect>
            <rect x="206.5" y="232" width="12" height="88" rx="6" fill="#A1F3E4"></rect>
            </g>
            <circle opacity="0.5" cx="230" cy="187" r="5" fill="#BCF5EB"></circle>
            <circle opacity="0.4" cx="245" cy="152" r="5" fill="#76FFEF"></circle>
            <circle opacity="0.4" cx="245" cy="121" r="5" fill="#76FFEF"></circle>
            <circle opacity="0.4" cx="288.5" cy="136.5" r="6.5" fill="#76FFEF"></circle>
            <circle opacity="0.5" cx="266" cy="121" r="5" fill="#BCF5EB"></circle>
            <circle opacity="0.5" cx="259" cy="175" r="7" fill="#BCF5EB"></circle>
            <circle opacity="0.5" cx="285" cy="145" r="7" fill="#BCF5EB"></circle>
            <circle opacity="0.5" cx="285" cy="104" r="7" fill="#BCF5EB"></circle>
            <circle opacity="0.5" cx="236" cy="159" r="11" fill="#BCF5EB"></circle>
            <circle opacity="0.5" cx="296" cy="97" r="11" fill="#BCF5EB"></circle>
            <rect opacity="0.4" x="-47" y="237" width="163" height="4" rx="2" fill="#BAF7EC"></rect>
            <rect opacity="0.2" x="28" y="19" width="24" height="24" rx="4" fill="#38D9C5"></rect>
            <path opacity="0.5" d="M30 231.5L58.5 203L105.5 250L124 231.5L131 238.5L145.5 224L151.5 230L177 204.5" stroke="#96FFEE" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
            <g opacity="0.2">
            <rect x="202" y="25" width="12" height="137" rx="6" transform="rotate(90 202 25)" fill="#98F0E5"></rect>
            </g>
            </g>
            </g>
            <defs>
            <filter id="filter0_d_84_5785" x="0" y="0" width="699" height="448" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
            <feOffset dy="4"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"></feColorMatrix>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_84_5785"></feBlend>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_84_5785" result="shape"></feBlend>
            </filter>
            <clipPath id="clip0_84_5785">
            <rect width="310" height="500" ></rect>
            </clipPath>
            </defs>
                            </svg>
                    </section>
                    <section className="authForm">
                        <img src={ppLogo2} className="loginLogo" alt="Parch + Posey" />
                        <br></br>
    
                        <span className="loginheader">Parch & Posey</span>
                        <br></br>
    
                        <span className="loginheader two">Customer portal login</span>
                        <br/>
                        <form className="formInput" onSubmit={handleLogin}>
                            <span> {this.props.loginMessage}</span>
                            <input
                            className="username"
                            name='username'
                            onChange={handleInput}
                            placeholder='Enter your username...'
                            />
                            <br/>
                            <input
                            className="password"
                            name="password"
                            type="password"
                            onChange={handleInput}
                            placeholder='Enter your password...'
                            />
                            <button>Login</button>
                        </form>
    
                    </section>
    
                    </div>
            </div>
            </>
    
        
        return(
        <header className="row">
    
                {login}
                
        </header>
        )
        }
}


export default Login;