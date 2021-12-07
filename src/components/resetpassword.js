import React from "react";
import logo from '../components/images/logo.png'
import login_img from '../components/images/login_img.jpeg'
import comviva_logo from '../components/images/comviva_logo.png'
import banner_img from '../components/images/forgot_banner.png'
import vector from '../components/images/Vector.png'
import Form from "react-bootstrap/Form";
import { Component, useState } from "react";
import "./resetpassword.css";
import ShowyIcon from "@mui/icons-material/Visibility";
import HideIcon from "@mui/icons-material/VisibilityOff";
import {
  faEye,
  faTimes,
  faEyeSlash,
  faCheck,
  faFontAwesomeLogoFull,
} from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';


export default function Resetpassword() {
  const [show, setShow] = useState(false);
  

  const checkPasswordMatch = () => {
    var password = $("#password").val();
    var confirmPassword = $("#confirmpassword").val();

    console.log(password)

    if (password !== confirmPassword)
        $("#divCheckPasswordMatch").html("Passwords do not match!");
    else
        $("#divCheckPasswordMatch").html("Passwords match.");
}

$(document).ready(function () {
   $("#txtConfirmPassword").keyup(checkPasswordMatch);
});

  const handleShowHide = (e) => {
    setShow(!show);
  };

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

    const matchPassword = (sitem ,vitem ,v_icon ) => {
      let sucess_text = document.querySelector(`#${sitem}`);
      let validate_text = document.querySelector(`#${vitem}`);
      let valid_icon = document.querySelector(`#${sitem} .${v_icon}`);
      valid_icon.style.opacity = "1";
      sucess_text.style.opacity="1"
      validate_text.style.opacity="0"
      console.log(sucess_text)
    };
  
    // if invalid
    const notmatchPassword = (sitem ,vitem) => {
      let sucess_text = document.querySelector(`#${sitem}`);
      let validate_text = document.querySelector(`#${vitem}`);
      sucess_text.style.opacity="0"
      validate_text.style.opacity="1"
      console.log(sucess_text)
  
    };

    const handleInputChange = (e) => {
      var password = e.target.value;
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

      password = document.querySelector('input[name=password]');
    var confirm = document.querySelector('input[name=confirm]');
    
    if(password.value===confirm.value){
      matchPassword("match", "notMatch" ,"fa-check");

    }else{
        notmatchPassword("match", "notMatch");

    }
    };



  $(function() {

    $(".input_box").focusin(function() {
        $(".password_validation").show();
    }).focusout(function () {
        $(".password_validation").hide();
    });
});

$(function() {

  $(".input_box2").focusin(function() {
      $(".password_notmatch").show();
  }).focusout(function () {
      $(".password_notmatch").hide();
  });
});

  return (
    <div>
      <section className="resetpassword">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 banner-img">
            <img src={banner_img} className="login_banner_img" alt="login banner image" />
            </div>
            {/* <div className="col-lg-1"></div> */}
            <div className="col-lg-6 col-sm-12 login_main">
              <div className="">
                <div className="row">
                  <div className="col-6">
                  <img src={logo} className="login_logo" alt="logo" />
                  </div>
                </div>
              </div>
              <h4 className="welcom_text" style={{"margin-top":"7%"}}>Reset password</h4>
              <form >
                <div className="">
                  <div className="input-group">
                    <input
                      type={show ? "text" : "password"}
                      id="password"
                      name="password"
                      className="input_box"
                      onChange={handleInputChange}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                    <label className="form_label" id="email">
                      Create Password
                    </label>
                  </div>
                  {/* <span className="Icontoggle">
                    {show ? (
                      <faFontAwesomeIcon
                        icon={faEyeSlash}
                        className="fas fa-eye-slash"
                        id="show_hide"
                        onClick={handleShowHide}
                      >
                         Hide Password
                      </faFontAwesomeIcon>
                    ) : (
                      <faFontAwesomeIcon
                        icon={faEye}
                        className="fas fa-eye"
                        id="show_hide"
                        onClick={handleShowHide}
                      >
                        Show Password
                      </faFontAwesomeIcon>
                    )}
                  </span> */}
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
                  <div className="input-group" style={{"margin-top":"-5%"}}>
                    <input
                    onChange={handleInputChange}
                      type="password"
                      id="confirmpassword"
                      className="input_box2"
                      name="confirm"
                      required
                    />
                    <label className="form_label" id="email">
                      Re-enter your new password
                    </label>
                  </div>
                  <div className="password_match" id="match">
                    <p id="">
                      <faFontAwesomeIcon
                        icon={faTimes}
                        className="fas fa-check icon"
                      />
                      <span className="match-text">Passwords matched!</span>
                      
                    </p>
                  </div>
                  <div className="password_notmatch" id="notMatch">
                    <p id="">
                      <faFontAwesomeIcon
                        icon={faTimes}
                        className="fas fa-times icon"
                      />
                      <span className="notmatch-text">Passwords don’t match!</span>
                      
                    </p>
                  </div>

                  <button className="login_button" type="submit">
                    <span className="login_text">Reset password</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
          <div className="col-6 footer_padding" style={{"margin-top":"12%"}}>
            <p className="footer_text">A PRODUCT OF</p>
            <img src={comviva_logo} className="footer_logo" alt="logo" />
            </div>
          </div><br/><br/>
        </div>
      </section>
    </div>
  );
}
