import React from 'react'
import logo from '../components/images/logo.png'
import login_img from '../components/images/login_img.jpeg'
import comviva_logo from '../components/images/comviva_logo.png'
import banner from '../components/images/banner.png'
import vector from '../components/images/Vector.png'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import login from "./images/login.png"
import './login.css'
import Googlelogin from 'react-google-login'
import MicrosoftLogin from "react-microsoft-login";
import "./password.css";
import PhoneInput from "react-phone-input-2";
import axios from 'axios'
// import "react-phone-input-2/lib/style.css";
import $ from 'jquery';
import { Link } from 'react-router-dom'
import ShowyIcon from "@mui/icons-material/Visibility";
import HideIcon from "@mui/icons-material/VisibilityOff";
import { faEye, faTimes, faEyeSlash, faCheck, faFontAwesomeLogoFull } from "@fortawesome/free-solid-svg-icons";
import { Component, useState } from "react";
import { color, textAlign } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function Login() {
    let navigate = useNavigate();

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

    const focusemail = (e) =>{
        let text = document.getElementById('emaillabel');
        console.log(text)
        document.getElementById("emaillabel").style.background = 'linear-gradient(#ED1C24, #FAA61A  )'
        text.style.webkitBackgroundClip = 'text';  
        text.style.webkitTextFillColor = 'transparent';
        text.style.fontWeight="bold"
      }
    
      const bluremail = (e) =>{
        let text = document.getElementById('emaillabel');
        document.getElementById("emaillabel").style.background = '#A7A9AC'
        text.style.webkitBackgroundClip = 'text';  
        text.style.webkitTextFillColor = 'transparent';
        text.style.fontWeight="600"
        text.style.fontFamily ="Montserrat"
        text.style.fontStyle="normal"
    
      }
    
      const focusPassword = (e) =>{
        let text = document.getElementById('password');
        console.log(text)
        document.getElementById("password").style.background = 'linear-gradient(#ED1C24, #FAA61A  )'
        text.style.webkitBackgroundClip = 'text';  
        text.style.webkitTextFillColor = 'transparent';
        text.style.fontWeight="bold"
      }
    
      const blurPassword = (e) =>{
        let text = document.getElementById('password');
        document.getElementById("password").style.background = '#A7A9AC'
        text.style.webkitBackgroundClip = 'text';  
        text.style.webkitTextFillColor = 'transparent';
        text.style.fontWeight="600"
        text.style.fontFamily ="Montserrat"
        text.style.fontStyle="normal"
    
      }
    
    
    const [email, setEmail] = useState({});
    const [password, setPass] = useState({});
    const emailChange = (e) => {
      setEmail(e.target.value);
    };
    const passChange = (e) => {
      setPass(e.target.value);
    };
    // console.log(email,pass)
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        email: email,
        password: password,
      };

      // console.log(email,password, data)
      axios
        .post("http://localhost:3001/api/auth/login", data)
        .then((res) => {
          console.log(res.headers);

          // localStorage.setItem('accessToken', res.data.success.accessToken)oken
        //   Cookies.set("APIAuth-token", res.data.success.accessToken);
          //  window.location.href = ("https://tl-poc.readme.io/reference/addpet")
            
          // setTimeout(function () {
          //   window.location =
          //     "https://com2.readme.io/reference/addpet";
          // }, 1000);
            //  navigate("/resetmsg");

            // console.log("comviva redirected_urls",redirect_url)
          var token = res.data.success.accessToken;
          navigator.clipboard.writeText(res.data.success.accessToken);
          setTimeout(function () {
            console.log("test", token);
          }, 5000);
        //   Cookies.set("APIAuth-token", res.data.success.accessToken);
        //   console.log("test");
        
        })
        .catch((err) => {
          alert("Login failed! pls try again");
          console.log(err);
        });
      // localStorage.setItem('token url',document.getElementById('APIAuth-token').values="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTlkZDg2YmNmZWUzNjI1NjliMTFhZGYiLCJlbWFpbCI6ImRlbW8xMjNAZ21haWwuY29tIiwiaWF0IjoxNjM3NzQyMzEwLCJleHAiOjE2Mzc3NDMyMTB9.FFbog5uxzYadM8WTDgRUQfhQc972qfsoaFHrNvscg8E")
    };
      
    return (
      <div>
        <section className="login">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12 banner-img">
                {/* <img src={vector} className="" alt="login banner image" /> */}
                {/* <img src={login} className="login_banner_img" alt="login banner image" /> */}
              </div>
              <div className="col-lg-6 col-sm-12 login_main">
                <a class="go_back" href="#">
                  <i class="fas fa-chevron-left" aria-hidden="true"></i>&nbsp;
                  Go back
                </a>
                <div className="">
                  <div className="row" style={{ "margin-top": "5%" }}>
                    <div className="col-6">
                      <img src={logo} className="login_logo" alt="logo" />
                    </div>
                    <div className="col-6">
                      <div className="new_acc">
                        <p className="dont_acc">
                          Dont have a account?{" "}
                          <Link to="/signup" className="create_new">
                            Create new
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="welcom_text">Welcome, please login</h4>
                <p className="welcom_content">
                  Accelerate to a digital future with our products & solutions
                </p>
                <br />
                <form onSubmit={handleSubmit}>
                  <div className="">
                    <div className="input-group">
                      <input
                        type="email"
                        className="input_box"
                        name="email"
                        onFocus={focusemail}
                        onBlur={bluremail}
                        onChange={emailChange}
                        required
                      />
                      <label className="form_label" id="emaillabel">
                        Email
                      </label>
                    </div>
                    <div className="input-group">
                      <input
                        type={show ? "text" : "password"}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        className="input_box"
                        name="password"
                        required
                        onFocus={focusPassword}
                        onBlur={blurPassword}
                        onChange={passChange}
                      />
                      <label className="form_label" id="password">
                        Password{" "}
                      </label>
                    </div>
                    <span className="Icontoggle">
                      {show ? (
                        <faFontAwesomeIcon
                          icon={faEyeSlash}
                          className="fas fa-eye-slash"
                          id="show_hide"
                          onClick={handleShowHide}
                        >
                          <span style={{ fontFamily: "Montserrat" }}>
                            &nbsp; Hide Password
                          </span>
                        </faFontAwesomeIcon>
                      ) : (
                        <faFontAwesomeIcon
                          icon={faEye}
                          className="fas fa-eye"
                          id="show_hide"
                          onClick={handleShowHide}
                        >
                          <span style={{ fontFamily: "Montserrat" }}>
                            &nbsp; Show Password
                          </span>
                        </faFontAwesomeIcon>
                      )}
                    </span>
                    <br />
                    <div className="row">
                      <div className="col-8">
                        <input
                          type="checkbox"
                          id="fruit1"
                          name="fruit-1"
                          value="Apple"
                        />
                        <label for="fruit1"></label>
                        <span className="check-title">
                          I want to receive MCIP news and updates
                        </span>{" "}
                      </div>
                      <div className="col-4">
                        <Link to="/forgot" className="forgot_style">
                          <h3 className="forgot">Forgot password</h3>
                        </Link>
                      </div>
                    </div>
                    <button className="login_button" type="submit">
                      <span className="login_text">Login</span>
                    </button>
                  </div>
                </form>
                <p className="google_outlook">
                  <div className="row" style={{ "margin-left": "-14%" }}>
                    <div className="col-6 social">
                      <span className="social-text">or continue with</span>
                    </div>
                    <div className="col-6 social-icon ">
                      <span className="google_style">
                        <Googlelogin
                          clientId="89472661149-tonb3lq1gl4frkln7r4h8jthg1el0j1h.apps.googleusercontent.com"
                          buttonText=""
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          cookiePolicy={"single_host_origin"}
                        />
                      </span>
                      <span className="microsoftstyle">
                        <MicrosoftLogin
                          clientId={"f0a38b12-5b04-48e5-b515-87f2b5c2a0f5"}
                          authCallback={authHandler}
                          buttonTheme="light_short"
                        />
                      </span>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div
                className="col-6 footer_padding"
                style={{ "margin-top": "12%" }}
              >
                <p className="footer_text">A PRODUCT OF</p>
                <img src={comviva_logo} className="footer_logo" alt="logo" />
              </div>
              <div
                className="col-6 footer_links"
                style={{ "margin-top": "12%" }}
              >
                <a href="#">MCIP</a> | <a href="#">Privacy Policy</a> |{" "}
                <a href="#">Terms and conditions</a>
              </div>
            </div>
          </div>
          <br />
          <br />
        </section>
      </div>
    );
}
