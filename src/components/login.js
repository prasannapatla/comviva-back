import React from 'react'
import logo from '../components/images/logo.png'
import login_img from '../components/images/login_img.jpeg'
import comviva_logo from '../components/images/comviva_logo.png'
import banner from '../components/images/banner.png'
import vector from '../components/images/Vector.png'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './login.css'
import Googlelogin from 'react-google-login'
import MicrosoftLogin from "react-microsoft-login";
import "./password.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import $ from 'jquery';
import { Link } from 'react-router-dom'


import ShowyIcon from "@mui/icons-material/Visibility";
import HideIcon from "@mui/icons-material/VisibilityOff";
import { faEye, faTimes, faEyeSlash, faCheck, faFontAwesomeLogoFull } from "@fortawesome/free-solid-svg-icons";
import { Component, useState } from "react";
import { color, textAlign } from "@mui/system";

export default function Login() {

    const responseGoogle = (res) => {
        console.log(res);
        console.log(res.profileObj)
    }
    const authHandler = (err, data) => {
        console.log(err, data);
    };

    const [value, setValue] = useState();
    const [show, setShow] = useState(false);
    const [label, setLabel] = useState('red')

    const handleShowHide = (e) => {
        setShow(!show);
    }
    const handleColor = (e) => {
        setLabel("orange")
    }

    return (
        <div>
            <section className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 banner-img">
                            {/* <img src={vector} className="" alt="login banner image" /> */}
                            <img src={banner} className="login_banner_img" alt="login banner image" />
                        </div>
                        <div className="col-lg-6 col-sm-12 login_main">
                         <a class="go_back" href="#"><i class="fas fa-chevron-left" aria-hidden="true"></i>&nbsp; Go back</a>
                            <div className="">
                                <div className="row" style={{"margin-top":"5%"}}>
                                    <div className="col-6">
                                        <img src={logo} className="login_logo" alt="logo" />
                                    </div>
                                    <div className="col-6" >
                                        <div className="new_acc"><p className="dont_acc">Dont have a account? <Link to="/signup" className="create_new">Create new</Link></p></div>
                                    </div>
                                </div>
                            </div>
                            <h4 className="welcom_text">Welcome, please login</h4>
                            <p className="welcom_content">Accelerate to a digital future with our products & solutions</p><br/>
                            <form>
                                <div className="">
                                    <div className="input-group">
                                    <input type="email" className="input_box" name="email" required />
                                    <label className="form_label" id="email">Email</label>
                                    </div>
                                    <div className="input-group">                                  
                                   <input type={show ? "text" : "password"} id="exampleInputEmail1" aria-describedby="emailHelp" className="input_box" name="password" required
                                    /> 
                                    <label className="form_label">Password  </label>
                                    </div>
                                    <span className="Icontoggle">
                                    {show ? (
                                    <faFontAwesomeIcon icon={faEyeSlash} className="fas fa-eye-slash" id="show_hide" onClick={handleShowHide} >
                                       &ensp; Hide Password
                                    </faFontAwesomeIcon>
                                        ) : (
                                    <faFontAwesomeIcon icon={faEye} className="fas fa-eye" id="show_hide" onClick={handleShowHide} >
                                      &ensp; Show Password
                                    </faFontAwesomeIcon>
                                        )}
                                    </span>
                                    <br />
                                    <div className="row">
                                        <div className="col-8">
                                            <input type="checkbox" id="fruit1" name="fruit-1" value="Apple" />
                                            <label for="fruit1">&ensp;Stay signed in for a week</label>
                                        </div>
                                        <div className="col-4">
                                            <Link to="/forgot" className="forgot_style"><h3 className="forgot">Forgot password</h3></Link>
                                        </div>
                                    </div>
                                    <button className="login_button" type="submit"><span className="login_text">Login</span></button>
                                </div>
                            </form>
                            <p className="google_outlook">or continue with
                                <span className="google_style">
                                    <Googlelogin
                                        clientId="89472661149-tonb3lq1gl4frkln7r4h8jthg1el0j1h.apps.googleusercontent.com"
                                        buttonText=""
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                </span>
                                <MicrosoftLogin
                                    clientId={'f0a38b12-5b04-48e5-b515-87f2b5c2a0f5'}
                                    authCallback={authHandler}
                                    buttonTheme="light_short"
                                />
                            </p>
                        </div>
                    </div>
                    <div className="row" style={{"margin-top":"8%"}}>
                        <div className="col-6">
                            <p className="footer_text">A PRODUCT OF</p>
                            <img src={comviva_logo} className="footer_logo" alt="logo" />
                        </div>
                        <div className="col-6 footer_links">
                            <a href="#">MCIP</a> | <a href="#">Privacy Policy</a> | <a href="#">Terms and conditions</a>
                        </div>
                    </div>
                </div>
            </section>  <br/>                    
        </div>
    )
}
