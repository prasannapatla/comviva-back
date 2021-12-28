import React from "react";
import logo from '../components/images/logo.png'
import login_img from '../components/images/login_img.jpeg'
import comviva_logo from '../components/images/comviva_logo.png'
import vector from '../components/images/Vector.png'
import banner_img from '../components/images/forgot_banner.png'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./resetmsg.css";

export default function Resetmsg() {
  return (
    <div>
      <section className="resetmsg">
        <div className="container">
          <div className="row reset">
          <div className="col-lg-6 col-sm-12 banner-img">
              {/* <img src={vector} className="vector_img" alt="login banner image" /> */}
            {/* <img src={banner_img} className="login_banner_img" alt="login banner image" /> */}
            </div>
            <div className="col-lg-6 col-sm-12 login_main">
              <div className="">
                <div className="row">
                  <div className="col-6">
                  <img src={logo} className="login_logo" alt="logo" />
                  </div>
                </div>
              </div>
              <h4 className="welcom_text" style={{"margin-top":"9%"}}>
                Your password has been reset successfully
              </h4>
              <p className="welcom_content">
                Please login using your new password.
              </p>
              <Link to="/login">
                <Button className="login_button" type="submit">
                  <span className="login_text">Login Now</span>
                </Button>
              </Link>
            </div>
          </div>
          </div>
          </section>
          <section>
            <div className="container">
          <div className="row">
          <div className="col-6 footer_padding" style={{"margin-top":"19%"}}>
              <p className="footer_text">A PRODUCT OF</p>
              <img src={comviva_logo} className="footer_logo" alt="logo" />
              </div>
          </div>
        </div><br/><br/>
      </section>
    </div>
  );
}
