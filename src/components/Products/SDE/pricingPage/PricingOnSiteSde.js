import React from 'react';
import { FiCheck } from "react-icons/fi";


const PricingOnSiteSde = () => {
    return (
        <div className="row row--15">

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing style-5">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Basic Plan</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">0</span>
                                </div>
                                <span className="subtitle">7 Days Trail</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> 1000 Email Automation</li>
                                <li><FiCheck /> Access Control</li>
                                <li><FiCheck /> 10 Vault Space</li>
                                <li><FiCheck /> Full SDK</li>
                                <li><FiCheck /> 3000+ API possabilities</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default" href="#pricing">Purchase Now</a>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing style-5 active">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Standard Plan</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">50</span>
                                </div>
                                <span className="subtitle">USD Per Month</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> 1000 Email Automation</li>
                                <li><FiCheck /> Access Control</li>
                                <li><FiCheck /> 10 Vault Space</li>
                                <li><FiCheck /> Full SDK</li>
                                <li><FiCheck /> 3000+ API possabilities</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default" href="#pricing">Purchase Now</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing style-5">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Advanced Plan</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">500</span>
                                </div>
                                <span className="subtitle">USD Per Month</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> 1000 Email Automation</li>
                                <li><FiCheck /> Access Control</li>
                                <li><FiCheck /> 10 Vault Space</li>
                                <li><FiCheck /> Full SDK</li>
                                <li><FiCheck /> 3000+ API possabilities</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default" href="#pricing">Purchase Now</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}

        </div>
    )
}
export default PricingOnSiteSde;
