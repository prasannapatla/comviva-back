import React from "react";
import logo from "../components/images/logo.png";
import login_img from "../components/images/login_img.jpeg";
import slider_banner from '../components/images/signup-banner.png'
import comviva_logo from '../components/images/comviva_logo.png'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./signup.css";
import Googlelogin from "react-google-login";
import MicrosoftLogin from "react-microsoft-login";
import "./password.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import $ from "jquery";

import ShowyIcon from "@mui/icons-material/Visibility";
import HideIcon from "@mui/icons-material/VisibilityOff";
import {
  faEye,
  faTimes,
  faEyeSlash,
  faCheck,
  faFontAwesomeLogoFull,
} from "@fortawesome/free-solid-svg-icons";
import { Component, useState } from "react";
import { color, textAlign } from "@mui/system";

export default function Signup() {
  const responseGoogle = (res) => {
    console.log(res);
    console.log(res.profileObj);
  };
  const authHandler = (err, data) => {
    console.log(err, data);
  };

  const [value, setValue] = useState();
  const [show, setShow] = useState(false);
  const [label, setLabel] = useState("red");


    // if valid
    const valid = (item, v_icon, inv_icon, v_text) => {
      let text = document.querySelector(`#${item}`);
      let vtext = document.querySelector(`#${item} .${v_text}`);
      vtext.style.color = "#128807";
  
      let valid_icon = document.querySelector(`#${item} .${v_icon}`);
      valid_icon.style.opacity = "1";
  
      let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
      invalid_icon.style.opacity = "0";
    };
  
    // if invalid
    const invalid = (item, v_icon, inv_icon, v_text ) => {
      let text = document.querySelector(`#${item}`);
      let vtext = document.querySelector(`#${item} .${v_text}`);
      vtext.style.color = "#EF2B24";
  
      let valid_icon = document.querySelector(`#${item} .${v_icon}`);
      valid_icon.style.opacity = "0";
  
      let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
      invalid_icon.style.opacity = "1";
  
      if (invalid_icon.style.opacity === "1") {
        text.style.color = "#ef2924 !important";
      } else {
        text.style.color = "#128807 !important";
      }
    };

    const valid_success = (sitem ,vitem , v_icon) => {
      let sucess_text = document.querySelector(`#${sitem}`);
      let validate_text = document.querySelector(`#${vitem}`);
      let valid_icon = document.querySelector(`#${sitem} .${v_icon}`);
      valid_icon.style.opacity = "1";
      sucess_text.style.opacity="1"
      validate_text.style.opacity="0"
      console.log(sucess_text)
    };
  
    // if invalid
    const invalid_success = (sitem ,vitem) => {
      let sucess_text = document.querySelector(`#${sitem}`);
      let validate_text = document.querySelector(`#${vitem}`);
      sucess_text.style.opacity="0"
      validate_text.style.opacity="1"
      console.log(sucess_text)

    };


    const handleInputChange = (e) => {
      const password = e.target.value;
      if (password.match(/[A-Z]/) != null) {
        valid("capital", "fa-check", "fa-times", "valid-text");
      } else {
        invalid("capital", "fa-check", "fa-times", "valid-text");
      }
      if (password.match(/[0-9]/) != null) {
        valid("number", "fa-check", "fa-times", "valid-text");
      } else {
        invalid("number", "fa-check", "fa-times", "valid-text");
      }
      if (password.match(/[!@#$%^&*]/) != null) {
        valid("character", "fa-check", "fa-times", "valid-text");
      } else {
        invalid(
          "character",
          "fa-check",
          "fa-times",
          "valid-text",
          "invalid-text"
        );
      }
      if (password.length > 7) {
        valid("count", "fa-check", "fa-times", "valid-text", "invalid-text");
      } else {
        invalid("count", "fa-check", "fa-times", "valid-text", "invalid-text");
      }
      if(password.match(/[A-Z]/) != null && password.match(/[0-9]/) != null && password.match(/[!@#$%^&*]/) != null && password.length > 7){
        valid_success("sucess" , "validate" ,"fa-check");
      } else {
        invalid_success("sucess" ,"validate");
      }
    };

  const handleShowHide = (e) => {
    setShow(!show);
  };

  $(function() {

    $(".input_box2").focusin(function() {
        $(".password_validation").show();
    }).focusout(function () {
        $(".password_validation").hide();
    });
});

  return (
    <div>
      <section className="signup">
        <div className="container">
          <div className="row">
          <div className="col-lg-5 col-sm-12 carousel-background ">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={slider_banner} class="carousel-img" />
                    <div class="carousel-caption animated bounceInLeft">
                      <h3>Quick & easy</h3>
                      <p>
                        Simplifying embedded fintech for accelerating time to
                        market
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={slider_banner} class="carousel-img" />
                    <div class="carousel-caption animated bounceInLeft">
                      <h3 >Quick & easy</h3>
                      <p>
                        Simplifying embedded fintech for accelerating time to
                        market
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={slider_banner} class="carousel-img" />
                    <div class="carousel-caption animated bounceInLeft">
                      <h3>Quick & easy</h3>
                      <p>
                        Simplifying embedded fintech for accelerating time to
                        market
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider_button">
              <button className="MCIP_button" type="submit">
                    <span className="MCIP_text">Learn more about MCIP</span>
               </button>
               </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 col-sm-12 col-sm-12 login_main">
              <div className="">
                <div className="row">
                  <div className="col-12">
                  <img src={logo} className="login_logo" alt="logo" />
                  </div>
                </div>
              </div>
              <h4 className="welcom_text">Create your account</h4>
              <p className="welcom_content">
                Benefits are many when you create a account with us
              </p>
              <form>
                <div className="">
                  <div className="input-group">
                  <input
                    type="email"
                    className="input_box"
                    name="email"
                    required
                  />
                   <label className="form_label" id="email">Email</label>
                  </div>
                  <div className="input-group">
                  <input
                    type="text"
                    className="input_box"
                    name="email"
                    required
                  />
                   <label className="form_label" id="email">Full Name</label>
                  </div>
                  <div className="input-group">
                  <input
                    type="text"
                    className="input_box"
                    name="email"
                  />
                   <label className="form_label" id="email">Company Name(Optional)</label>
                  </div>

                  <div className="input-group">
                  <PhoneInput
                    type="number"
                    className="input_box"
                    inputStyle={{color:'#000000'}}
                    containerStyle={{}}
                    buttonStyle={{}}
                    country="in"
                    value={value}
                    onChange={setValue}
                  />
                   <label className="form_label">Phone number (Optional)</label>
                  </div>
                  {/* <label className="form_label">Phone number (Optional)</label>
                  <PhoneInput
                    type="number"
                    className="input_box"
                    inputStyle={{color:'#000000'}}
                    containerStyle={{}}
                    buttonStyle={{}}
                    country="in"
                    value={value}
                    onChange={setValue}
                  /> */}
                  <br/>
                  <div className="input-group">
                  <input
                    type={show ? "text" : "password"}
                    className="input_box2"
                    onChange={handleInputChange}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                  <label className="form_label">Create Password</label>
                  </div>
                  <span className="Icontoggle">
                    {show ? (
                      <faFontAwesomeIcon
                        icon={faEyeSlash}
                        className="fas fa-eye-slash"
                        id="show_hide"
                        onClick={handleShowHide}
                      >
                         &nbsp; Hide Password
                      </faFontAwesomeIcon>
                    ) : (
                      <faFontAwesomeIcon
                        icon={faEye}
                        className="fas fa-eye"
                        id="show_hide"
                        onClick={handleShowHide}
                      >
                        &nbsp; Show Password
                      </faFontAwesomeIcon>
                    )}
                  </span>
                  <div class="password_validation" id="validate">
                    <p id="capital">
                      <faFontAwesomeIcon
                        icon={faTimes}
                        className="fas fa-check icon"
                      />
                      <faFontAwesomeIcon
                        icon={faCheck}
                        className="fas fa-times icon"
                      />
                      <span className="valid-text">1 uppercase character</span>
                      
                    </p>
                    <p id="character" style={{"margin-top":"-11px"}}>
                      <faFontAwesomeIcon
                        icon={faTimes}
                        className="fas fa-check icon"
                      />
                      <faFontAwesomeIcon
                        icon={faCheck}
                        className="fas fa-times icon"
                      />
                      <span className="valid-text">1 special character</span>              
                    </p>
                    <p id="number" style={{"margin-top":"-11px"}}>
                      <faFontAwesomeIcon
                        icon={faTimes}
                        className="fas fa-check icon"
                      />
                      <faFontAwesomeIcon
                        icon={faCheck}
                        className="fas fa-times icon"
                      />
                      <span className="valid-text">1 number</span>
                    </p>
                    <p id="count" style={{"margin-top":"-11px"}}>
                      <faFontAwesomeIcon
                        icon={faTimes}
                        className="fas fa-check icon"
                      />
                      <faFontAwesomeIcon
                        icon={faCheck}
                        className="fas fa-times icon"
                      />
                      <span className="valid-text">8 characters minimum</span>
                    </p>
                  </div>
                  <div className="sucess_validation" id="sucess">
                    <p id="">
                      <faFontAwesomeIcon
                        icon={faTimes}
                        className="fas fa-check icon"
                      />
                      <span className="sucess-text">Your password is secure and you’re  all set!</span>
                      
                    </p>
                  </div>

                  <br />

                  <div className="check_text">
                    <input
                      type="checkbox"
                      id="fruit1"
                      name="fruit-1"
                      value="Apple"
                    />
                    <label for="fruit1">
                     &ensp; I want to receive MCIP news and updates
                    </label>
                  </div>

                  <button className="login_button" type="submit">
                    <span className="login_text">Create account</span>
                  </button>
                  <p className="policy_text">By clicking the “Create account” button, you agree to Terms of Service & Privacy Policy</p>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-6" style={{"margin-top":"7%"}}>
            <p className="footer_text">A PRODUCT OF</p>
             <img src={comviva_logo} className="footer_logo" alt="logo" />
            </div>
            {/* <div className="col-6 footer_links">
              <a href="#">MCIP</a> | <a href="#">Privacy Policy</a> |{" "}
              <a href="#">Terms and conditions</a>
            </div> */}
          </div>
        </div><br/> <br/>  
      </section> <br/>  
    </div>
  );
}
