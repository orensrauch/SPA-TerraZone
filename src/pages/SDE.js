import React from 'react';
import Typed from 'react-typed';
import SEO from "../common/SEO";
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import HeaderOne from '../common/header/HeaderOne';
import HeaderTopNews from '../common/header/HeaderTopNews';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';

import AboutOneSDE from '../components/Products/SDE/AboutOneSDE'

import CalltoActionFive from '../elements/calltoaction/CalltoActionFive';
import PricingThreeSDE from '../components/Products/SDE/PricingThreeSDE'

import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import MissionSDE from "../components/Products/SDE/MissionSDE"
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
import BrandOneSDE from '../components/Products/SDE/BrandOneSDE'
var BlogListData = BlogClassicData.slice(0, 3);




const SDE = () => {
    return (
        <>
            <SEO title="Secure Data Exchange" />
            <main className="page-wrapper">
                <HeaderTopNews />
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent height-850">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <span className="subtitle">SECURE DATA EXCHANGE</span>
                                    <h1 className="title theme-gradient display-two">Secure Business <br /> {" "}
                                        <Typed
                                            strings={[
                                                "File Share.",
                                                "Email.",
                                                "Vault.",
                                                "Access.",
                                            ]}
                                            typeSpeed={80}
                                            backSpeed={5}
                                            backDelay={1000}
                                            loop
                                        />
                                    </h1>
                                    <p className="description">Take control on your system, apply MFTaaS solution in a moment with secure vault and email exchange as SaaS.</p>
                                    <div className="button-group">
                                        <Link className="btn-default btn-medium round btn-icon"  to="/PricingAllSde">Try For Free <i className="icon"><FiArrowRight /></i></Link>
                                        <Link className="btn-default btn-medium btn-border round btn-icon" to="/contact">Contact Us <i className="icon"><FiArrowRight /></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <Separator />

                {/* Start About Area  */}
                <AboutOneSDE />                            
                {/* End About Area  */}

                <Separator />        

                {/* Start Brand Area  */}
                <div className="rwt-brand-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Our Awesome Client"
                                    title="Using Secure Vault & Email as SaaS."
                                    description=""
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt--40">
                                <BrandOneSDE brandStyle="brand-style-1" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}
    


                <Separator /> 

                {/* Start Mission Area   */}
                <MissionSDE />                    
                {/* End Mission Area  */}
                

                {/* Start Call To Action Area  */}
                <div className="rwt-callto-action-area rn-section-gap">
                    <div className="wrapper">
                        <PricingThreeSDE />
                    </div>
                </div>
                {/* End Call To Action Area  */}


                <Separator />

                {/* Start Call To Action Area  */}
                <div className="rwt-callto-action-area">
                    <div className="wrapper">
                        <CalltoActionFive />
                    </div>
                </div>
                {/* End Call To Action Area  */}


                <Separator />                               
            

                <Separator />   
                <div className="blog-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Latests News"
                                    title = "Our Latest News."
                                    description = "Stay Connected."
                                />
                            </div>
                        </div>
                        <div className="row row--15">
                            {BlogListData.map((item) => (
                                <div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
                                    <BlogList StyleVar="box-card-style-default" data={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}
export default SDE;
