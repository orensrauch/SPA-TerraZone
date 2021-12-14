import React from 'react';
import Typed from 'react-typed';
import { Link } from "react-router-dom";

const AboutOneHeimdall = () => {
    return (
        <div className="rwt-about-area rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src="./images/about/about-heimdall.png" alt="About Images" />
                        </div>
                    </div>

                    <div className="col-lg-7 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="section-title">
                                <h2 className="title">MFA for every <br /> {" "}
                                    <Typed className="theme-gradient"
                                        strings={[
                                            "Identity.",
                                            "Access.",
                                            "Partition.",
                                        ]}
                                        typeSpeed={80}
                                        backSpeed={5}
                                        backDelay={1000}
                                        loop
                                    />
                                </h2>
                               
                                <p>TerraZone cloud-based single sign-on service connects everything from cloud to ground with 1,400+ SAML and OpenID Connect integrations, password vaulting, RADIUS and LDAP support, and connections to third-party legacy SSO solutions.</p>
                              
                                <p>TerraZone is an SSO provider with a network of 7,000+ pre-built integrations that help you securely adopt and deploy SSO to cloud apps in weeks, not months, all without building and maintaining the integrations yourself.  </p>
                                <div className="read-more-btn mt--40">
                                    <Link className="btn-default" href="/"><span>More About Zero Trust</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default AboutOneHeimdall
