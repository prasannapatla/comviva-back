import React from 'react'
import logo from '../components/images/logo.png'
import login_img from '../components/images/login_img.jpeg'
import comviva_logo from '../components/images/comviva_logo.png'
import Form from "react-bootstrap/Form";
import vector from '../components/images/Vector.png'
// import Button from "react-bootstrap/Button";
import banner_img from '../components/images/forgot_banner.png'
import './forgotmsg.css'


export default function Forgotmsg() {

    return (
        <div>
            <section className="forgotmsg">

                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 col-sm-12 banner-img">
                            <img src={banner_img} className="login_banner_img" alt="login banner image" />
                    </div>
                        <div className="col-6 login_main">
                            <div className="">
                                <div className="row">
                                    <div className="col-6">
                                        <img src={logo} className="login_logo" alt="logo" />
                                    </div>
                                </div>
                            </div>
                            <h4 className="welcom_text">Recovery email has been sent to your email address.</h4>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-6" style={{"margin-top":"12%"}}>
                        <p className="footer_text">A PRODUCT OF</p>
                            <img src={comviva_logo} className="footer_logo" alt="logo" />
                    </div>
                    </div>
                </div><br/><br/>
            </section>
        </div>
    )
}