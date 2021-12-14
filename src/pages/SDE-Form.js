import React from 'react';

import SEO from "../common/SEO";

import AboutOneSDE from '../components/Products/SDE/AboutOneSDE'
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import MissionSDE from "../components/Products/SDE/MissionSDE"
import HeaderOne from '../common/header/HeaderOne'
import BrandOneSDE from '../components/Products/SDE/BrandOneSDE'
import Parti from '../components/Particales/particles-container'
import { Widget } from '@typeform/embed-react'


const handleOnReady = () => {
    // eslint-disable-next-line no-console
    console.log('form ready')
}

const SDESaaS = () => {
    return (
        <>
            <SEO title="Secure Data Exchange" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent ">
                    <div className="container">
                   <Parti /> 
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <h1 className="title theme-gradient display-two">Choose Your COOL Solution <br /> {" "}
                                    </h1>
                                    <p className="description">Find The Right Business Plan For You<br />Secure Email Exchange & Secure MFT</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}
                <Separator />

                {/* {Start of TypeForm Widget} */}
                <div className="align-items-center">
                    <div className="container">
                        <Widget
                            id="xONIzRrR"
                            style={{ margin: '0 auto', width: ' auto', height: 690 }}
                            onReady={handleOnReady}
                            enableSandbox
                        />
                    </div>
                </div>
                {/* {End of TypeForm Widget} */}

                {/* Start About Area  */}
                <AboutOneSDE />
                {/* End About Area  */}


                {/* Start Mission Area   */}
                <MissionSDE />
                {/* End Mission Area  */}

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
            </main>
        </>
    )
}
export default SDESaaS;
