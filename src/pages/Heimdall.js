import React from 'react';
import Typed from 'react-typed';
import SEO from "../common/SEO";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import HeaderOne from '../common/header/HeaderOne';
import HeaderTopNews from '../common/header/HeaderTopNews';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';

import PricingThreeHeimdall from '../components/Products/Heimdall/PricingThreeHeimdalljs'
import AboutOneHeimdall from '../components/Products/Heimdall/AboutOneHeimdall'
import ServiceFiveHeimdall from '../components/Products/Heimdall/ServiceFiveHeimdall';
import CalltoActionFive from '../elements/calltoaction/CalltoActionFive';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import MissionHeimdall from "../components/Products/Heimdall/MissionHeimdall"
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
var BlogListData = BlogClassicData.slice(0, 3);




const Heimdall = () => {
    return (
        <>
            <SEO title="Heimdall - Zero Trust" />
            <main className="page-wrapper">
                <HeaderTopNews />
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent height-850">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <span className="subtitle">Heimdall</span>
                                    <h1 className="title theme-gradient display-two">Zero Trust <br /> {" "}
                                        <Typed
                                            strings={[
                                                "SMB Port.",
                                                "as SaaS.",
                                                "Vault.",
                                                "Identity.",
                                            ]}
                                            typeSpeed={80}
                                            backSpeed={5}
                                            backDelay={1000}
                                            loop
                                        />
                                    </h1>
                                    <p className="description">Zero Trust your system, apply Heimdall solution in a moment with secure Military Grade SaaS Identity Management.</p>
                                    <div className="button-group">
                                        <Link className="btn-default btn-medium round btn-icon" to="/PricingAllHeimdall">Try Now <i className="icon"><FiArrowRight /></i></Link>
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
                <AboutOneHeimdall />
                {/* End About Area  */}

                <Separator />
                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="What Heimdall can do for you"
                                    title="Solution provide for you."
                                    description="There are many challenges of managing of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                />
                            </div>
                        </div>
                        <ServiceFiveHeimdall
                            serviceStyle="gallery-style"
                            textAlign="text-left"
                        />
                    </div>
                </div>
                {/* End Service Area  */}

                <Separator />
                {/* Start Mission Area   */}
                <MissionHeimdall />
                {/* Start Mission Area  */}
                {/* {pricing} */}
                <PricingThreeHeimdall/>

                <Separator />
                {/* Start Call To Action Area  */}
                <div className="rwt-callto-action-area rn-section-gap">
                    <div className="wrapper">
                        <CalltoActionFive />
                    </div>
                </div>
                {/* End Call To Action Area  */}

                <Separator />
                <div className="blog-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Latests News"
                                    title="Our Latest News."
                                    description="We provide company and finance service for <br /> startups and company business."
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
export default Heimdall;
