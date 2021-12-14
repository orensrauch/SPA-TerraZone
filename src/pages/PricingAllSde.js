import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne"
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import AccordionSdeOnSite from '../components/Products/SDE/pricingPage/AccordionSdeOnSite';
import AccordionSdeSaaS from '../components/Products/SDE/pricingPage/AccordionSdeSaaS';
import PricingOnSiteSde from '../components/Products/SDE/pricingPage/PricingOnSiteSde';
import PricingSaasSde from '../components/Products/SDE/pricingPage/PricingSaasSde';
import Separator from "../elements/separator/Separator"


const PricingAllSde = () => {
    return (
        <>
            <SEO title="SDE Pricing || TerraZone - Software Security Solutions" />
            <Layout>
                <BreadcrumbOne
                    title="Secure Data Exchange <br /> Simple Integration, Maximized."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="SDE Pricing"
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
                                        title="SDE as a SaaS."
                                        description="With SDE as a SaaS you can deploy immidiatly Vaults on the Blockchain network and manage Email Exchange."
                                    />
                                </div>
                            </div>
                            <PricingSaasSde />
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

                </div>
            </Layout>
        </>
    )
}
export default PricingAllSde;