import React from 'react'
import logo from '../components/images/logo.png'
import login_img from '../components/images/login_img.jpeg'
import banner_img from '../components/images/forgot_banner.png'
import comviva_logo from '../components/images/comviva_logo.png'
import vector from '../components/images/Vector.png'
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import './forgot_password.css'


export default function Forgotpassword() {

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



    return (
        <div>
            <section className="forgotpassword">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 banner-img">
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
                            <h4 className="welcom_text">Forgot password?</h4>
                            <p className="welcom_content">Don’t worry, happens to the best of us. Enter your email address and we will send you a recovery link.</p><br/>
                            <form>
                                <div className="">
                                <div className="input-group">
                                    <input type="email" className="input_box" placeholder="" name="email" 
                                    onFocus={focusemail} onBlur ={ bluremail } required  
                                    />
                                    <label className="form_label" id="emaillabel">Email</label>
                                    </div>
                                    <button className="login_button" type="submit"><span className="login_text">Send me a recovery email</span></button>


                                </div>
                            </form>
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
                </div>
                   <br/><br/>
                </section>
        </div>
    )
}