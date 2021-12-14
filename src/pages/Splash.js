import React from 'react'
import {Link} from "react-router-dom";
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import HeaderTopNews from '../common/header/HeaderTopNews';
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import FooterOne from '../common/footer/FooterOne';
import AdvanceTabOne from '../components/Splash/AdvanceTabSplash';
import TabSplash from '../components/Splash/TabSplash'
import BrandOneSDE from '../components/Products/SDE/BrandOneSDE';
import { FiArrowRight } from "react-icons/fi";


const Demo = [
    {
        Url : "/Heimdall",
        Image: "./images/splash-page/Heimdall-dark.png" ,
        Imagelight: "./images/splash-page/Heimdall-light.png" ,
        Title: "Heimdall",
        badge: "",
    },

    {
        Url : "/SDE",
        Image: "./images/splash-page/SDE-dark.png" ,
        Imagelight: "./images/splash-page/SDE-light.png" ,
        Title: "SDE",
        badge: "",
    },
    {
        Url : "/ThorZone",
        Image: "./images/splash-page/ThorZone-dark.png" ,
        Imagelight: "./images/splash-page/ThorZone-light.png" ,
        Title: "ThorZone",
        badge: "",
    },

]


const Splash = () => {
    return (
        <>
           <SEO title="TerraZone" />
           <main className="page-wrapper">
                <HeaderTopNews />
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div className="demo-slider-area slider-area bg-transparent slider-style-1 pb--100 pt--70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    {/* <div className="react-image mb--20">
                                        <img src="./images/demo/react-badge.png" alt="Doob React" />
                                    </div> */}
                                    <h1 className="title display-two">
                                        Next-gen all-in-one <br />
                                        <span className="theme-gradient">Security</span> & {" "}
                                        <span className="theme-gradient">Management</span>
                                        <br />
                                        Software Solutions.
                                    </h1>
                                    <p className="description">We help our clients succeed by creating a zero-trust environment, secure file sharing, and bulletproof infrastructure.</p>
                                    <div className="button-group">
                                        <Link className="btn-default btn-medium round btn-icon"  to="/PricingAll">Try Our Solutions<i className="icon"><FiArrowRight /></i></Link>
                                        <Link className="btn-default btn-medium btn-border round btn-icon" to="/contact">Contact Us <i className="icon"><FiArrowRight /></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <Separator />

                {/* Start Our Demo  */}
                <div className="rn-demo-area rn-section-gap" id="demo">
                    <div className="wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="TerraZone Products at a Glance"
                                    title="Products for Businesses"
                                    description="Securely connect the right people to the right technologies at the right time."
                                />
                            </div>
                        </div>
                        <div className="row row--30">
                            {Demo.map((data, index) => (
                                <div className="col-lg-4 col-md-6 col-12 mt--40" key={index}>
                                    <div className="single-demo">
                                        <Link to={`${data.Url}`}>
                                            <div className="thumbnail">
                                                <img className="image-dark" src={`${data.Image}`} alt="Corporate Images" />
                                                <img className="image-light" src={`${data.Imagelight}`} alt="Corporate Images" />
                                                {data.badge ? <span className="label-badge">{data.badge}</span> : ''}
                                            </div>
                                        </Link>
                                        <h4 className="title"><Link to={`${data.Url}`}>{data.Title}</Link> </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Our Demo  */}

                <Separator />

                {/* Start Elements Area  */}
                <div className="rwt-tab-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Trusted By The Public Sector"
                                    title="Simplifying Challenges"
                                    description=""
                                />
                            </div>
                        </div>
                        <TabSplash />
                    </div>
                </div>
                {/* End Elements Area  */}

                <Separator />

                {/* Start Brand Area  */}
                <div className="rwt-brand-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Our Clients"
                                    title="Using TerraZone Secure Vault & Email."
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

                {/* Start Advance Tab Area  */}
                <div className="rwt-advance-tab-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="You can Customize All"
                                    title="TerraZone Advanced Platform."
                                    description=""
                                />
                            </div>
                        </div>
                        <AdvanceTabOne />
                    </div>
                </div>
                {/* End Advance Tab Area  */}

                <Separator />

             
                <FooterOne />
           </main>

        </>
    )
}

export default Splash;