import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne"
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import PricingSaasHeimdall from '../components/Products/Heimdall/pricingPage/PricingSaasHeimdall';
import AccordionHeimdallSaaS from '../components/Products/Heimdall/pricingPage/AccordionHeimdallSaaS';
import AccordionHeimdallOnSite from '../components/Products/Heimdall/pricingPage/AccordionHeimdallOnSite';
import PricingOnSiteHeimdall from '../components/Products/Heimdall/pricingPage/PricingOnSiteHeimdall';
import Separator from "../elements/separator/Separator";


const PricingAllHeimdall = () => {
    return (
        <>
            <SEO title="Heimdall Pricing || TerraZone - Software Security Solutions" />
            <Layout>
                <BreadcrumbOne
                    title="Zero Trust Start With Heimdall."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Heimdall Pricing"
                />

                <div className="main-content">

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


                </div>
            </Layout>
        </>
    )
}
export default PricingAllHeimdall;