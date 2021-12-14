import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne"
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import { Widget} from '@typeform/embed-react'

// SDE
import AccordionSdeOnSite from '../components/Products/SDE/pricingPage/AccordionSdeOnSite';
import AccordionSdeSaaS from '../components/Products/SDE/pricingPage/AccordionSdeSaaS';
import PricingOnSiteSde from '../components/Products/SDE/pricingPage/PricingOnSiteSde';
import PricingSaasSde from '../components/Products/SDE/pricingPage/PricingSaasSde';

// Heimdall
import PricingSaasHeimdall from '../components/Products/Heimdall/pricingPage/PricingSaasHeimdall';
import AccordionHeimdallSaaS from '../components/Products/Heimdall/pricingPage/AccordionHeimdallSaaS';
import AccordionHeimdallOnSite from '../components/Products/Heimdall/pricingPage/AccordionHeimdallOnSite';
import PricingOnSiteHeimdall from '../components/Products/Heimdall/pricingPage/PricingOnSiteHeimdall';
import Separator from "../elements/separator/Separator"

const handleOnReady = () => {
    // eslint-disable-next-line no-console
    console.log('form ready')
}


const PricingAll = () => {
    return (
        <>
            <SEO title="Pricing || TerraZone - Software Security Solutions" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Share Files Securely <br /> Quick Deploy & Make Vaults and Email Exchange."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Pricing"
                />
                {/* Start Elements Area  */}
                <div className="rwt-pricing-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40 mb_sm--0">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Pricing for Cloud"
                                    title="SDE as a SaaS."
                                    description="With SDE as a SaaS you can deploy immidiatly Vaults on the Blockchain network and manage Email Exchange."
                                />
                            </div>
                        </div>
                        <PricingSaasSde />
                    </div>
                </div>
                {/* End SaaS Area  */}


                <Widget
                    id="xONIzRrR"
                    style={{ margin: '0 auto', width: 600, height: 600 }}
                    onReady={handleOnReady}
                    enableSandbox
                />

                {/* Start Accordion Area  */}
                <div className="rn-accordion-area ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="SaaS Pricing"
                                    title="What Should I Know About SDE as a SaaS"
                                    description=""
                                />
                            </div>
                        </div>
                        <div className="row mt--35 row--20">
                            <div className="col-lg-10 offset-lg-1">
                                <AccordionSdeSaaS customStyle="" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* End Elements Area  */}
                <Separator />

                {/* Start On-Site Area  */}
                <div className="rwt-pricing-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40 mb_sm--0">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Enterprise Pricing"
                                    title="SDE Pricing On-Site."
                                    description=""
                                />
                            </div>
                        </div>
                        <PricingOnSiteSde />
                    </div>
                </div>
                {/* End Elements Area  */}
                {/* Start Accordion Area  */}
                <div className="rn-accordion-area ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="On-Site Pricing"
                                    title="What Should I Know About SDE for Enterprise"
                                    description=""
                                />
                            </div>
                        </div>
                        <div className="row mt--35 row--20">
                            <div className="col-lg-10 offset-lg-1">
                                <AccordionSdeOnSite customStyle="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start Elements Area  */}
                <div className="rwt-pricing-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40 mb_sm--0">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Pricing for Cloud"
                                    title="Heimdal as a SaaS."
                                    description="With Heimdal as a SaaS you can deploy Zero Trust immidiatly in your network."
                                />
                            </div>
                        </div>
                        <PricingSaasHeimdall />
                    </div>
                </div>
                {/* End SaaS Area  */}



                {/* Start Accordion Area  */}
                <div className="rn-accordion-area ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="SaaS Pricing"
                                    title="What Should I Know About Heimdall as a SaaS"
                                    description=""
                                />
                            </div>
                        </div>
                        <div className="row mt--35 row--20">
                            <div className="col-lg-10 offset-lg-1">
                                <AccordionHeimdallSaaS customStyle="" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* End Elements Area  */}
                <Separator />

                {/* Start On-Site Area  */}
                <div className="rwt-pricing-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40 mb_sm--0">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Enterprise Pricing"
                                    title="Heimdall Pricing On-Site."
                                    description=""
                                />
                            </div>
                        </div>
                        <PricingOnSiteHeimdall />
                    </div>
                </div>
                {/* End Elements Area  */}
                {/* Start Accordion Area  */}
                <div className="rn-accordion-area ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="On-Site Pricing"
                                    title="What Should I Know About Heimdall for Enterprise"
                                    description=""
                                />
                            </div>
                        </div>
                        <div className="row mt--35 row--20">
                            <div className="col-lg-10 offset-lg-1">
                                <AccordionHeimdallOnSite customStyle="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default PricingAll;