import React from "react";
import logo from "../components/images/logo.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import banner from './images/logo.png'
import './emailtemplate.css'


export default function Emailtemp() {
    return (
        <div>
            <section className="emailtemp">
                <div className="container">
                    <Card>
                        <Card.Img className="top-logo" src={logo} />
                        <Card.Img variant="top" src={banner} />
                        <Card.Body>
                            <Card.Title>Hello Ritvik!</Card.Title>
                            <Card.Text>
                                <div className="container text">
                                    <p>We have sent you this email in response to your request to reset your password on our Developer Portal.</p>
                                </div>
                                {/* <span className="card_desc">We have sent you this email in</span>
                                   <span className="card_desc">response to your request to </span>
                                  <span className="card_desc"> reset your password on our </span>
                                   <span className="card_desc">Developer Portal.</span> */}
                            </Card.Text>
                            <div>
                                <h3 className="card_desc">To reset your password, click on the button below.</h3>

                            </div>
                            <Link to="/reset">
                                <Button className="login_button" type="submit">
                                <span className="login_text">Reset my password</span>
                                </Button>
                            </Link>
                            <div className="container">
                                <p className="card-content">If you didn’t request to change your password, simply delete this email. You don’t have to do anything. So that’s easy.</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="container footer">
                        <div className="row">
                            <div className="col-6">
                                <p>© 2021 Comviva </p>
                            </div>
                            <div className="col-6">
                                <img src={logo} className="footer-logo" alt="logo" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
