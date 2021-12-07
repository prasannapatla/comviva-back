import React from "react";
import logo from "../components/images/logo.png";
import login_img from "../components/images/login_img.jpeg";
import comviva_logo from "../components/images/comviva_logo.png";
import vector from "../components/images/Vector.png";
import banner_img from "../components/images/forgot_banner.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./resetmsg.css";

export default function Landing() {
  return (
    <div>
      <section className="container-fluid">
        <Link to="/login">Login</Link><br/><br/>
        <Link to="/signup">Sign up</Link><br/><br/>
        <Link to="/forgot">forgot</Link><br/><br/>
        <Link to="/reset">reset</Link><br/><br/>
        <Link to="/forgotmsg">forgotmsg</Link><br/><br/>
        <Link to="/resetmsg">resetmsg</Link>
      </section>
    </div>
  );
}
