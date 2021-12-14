import React from 'react';
import {Link} from "react-router-dom";
import SEO from "../../../../common/SEO";
import HeaderTopNews from '../../../../common/header/HeaderTopNews';
import HeaderOne from '../../../../common/header/HeaderOne'
import FooterOne from '../../../../common/footer/FooterOne'


import CalltoActionSix from "../../../../elements/calltoaction/CalltoActionSix";
import ServiceOne from "../../../../elements/service/ServiceOne";
import SectionTitle from "../../../../elements/sectionTitle/SectionTitle";
import Separator from "../../../../elements/separator/Separator";
import SlipThree from "../../../../elements/split/SlipThree";
import BlogList from "../../../blog/itemProp/BlogList"
import BlogClassicData from '../../../../data/blog/BlogList.json';
var BlogListData = BlogClassicData.slice(0, 3);



const DepartmentOfDefence = () => {
    return (
        <>
            <SEO title="TerraZone for Defence" />
            <main className="page-wrapper">
                <HeaderTopNews />
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-not-transparent" />

                {/* Start Slider area  */}
                <div className="slider-area slider-style-5 bg-overlay-solid height-850 bg_image" data-black-overlay="3" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-13.jpg)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-left">
                                    <h4 className="subtitle">MEET CONSULTING</h4>
                                    <h1 className="title display-one">Financial Analysis <br />Developing Meeting.</h1>
                                    <div className="button-group mt--40 mt_sm--20">
                                        <Link className="btn-default"  to="/PricingAll">Get TerraZone</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider area  */}


                <CalltoActionSix />
                <Separator />

                 {/* Start Service Area  */}
                 <div className="rn-service-area rn-section-gap ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "What we can do for you"
                                    title = "Services provide for you."
                                    description = ""
                                    />
                            </div>
                        </div>
                        <ServiceOne 
                            serviceStyle = "service__style--1 bg-color-blackest radius mt--20 rbt-border"
                            textAlign = "text-left"
                            />
                    </div>
                </div>
                {/* End Service Area  */}

                <Separator />
               

                {/* Start Elements Area  */}
                <div className="rwt-split-area">
                    <div className="wrapper">
                        <SlipThree />
                    </div>
                </div>
                {/* End Elements Area  */}


                {/* Start Elements Area  */}
                <div className="rwt-elements-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb--10">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Client Feedback"
                                    title = "What People Say About Us."
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Elements Area  */}

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
                                    description = ""
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

                <FooterOne />
            </main>
        </>
    )
}

export default DepartmentOfDefence;
