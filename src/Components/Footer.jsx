import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.png';
// ${className || ''}
function Footer({ className }) {
    return (

            <section className={`footer`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-about-widget">
                                <div className="logo">
                                    <NavLink to="/">
                                        <img src={logo} alt="logo.png" />
                                    </NavLink>
                                </div>
                                <p>
                                NusaTur adalah sebuah website yang menyediakan tur lokal budaya Indonesia dengan memberikan pengalaman terbaik untuk wisatawane.
                                </p>
                                <NavLink to ="/">
                                    Read More <i className="fal fa-arrow-right" />
                                </NavLink>
                                <div className="social mt-30">
                                    <ul>
                                        <li>
                                            <NavLink to="/">
                                                <i className="fab fa-facebook-f" />
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">
                                                <i className="fab fa-twitter" />
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-navigation">
                                <h4 className="title">Company</h4>
                                <ul>
                                    <li>
                                        <NavLink to="/">About Us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Service</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Case Studies</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Blog</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-navigation">
                                <h4 className="title">Quick Links</h4>
                                <ul>
                                    <li>
                                        <NavLink to="/about-us">About Us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Travel Blog</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Gallery</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Destination</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget-info">
                                <h4 className="title">Get In Touch</h4>
                                <ul>
                                    <li>
                                        <NavLink to="/">
                                            <i className="fal fa-envelope" /> nusatur@gmail.com
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">
                                            <i className="fal fa-phone" /> +083344556677
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">
                                            <i className="fal fa-map-marker-alt" /> Nongsa Digital Park
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
                                <div className="copyright-text">
                                    <p>Copyright © 2021 Nusatur. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Footer;
