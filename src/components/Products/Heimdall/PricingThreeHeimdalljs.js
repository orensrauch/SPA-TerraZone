import React from 'react';
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";


const PricingThreeHeimdall = () => {
    return (
        <div className="row">
            <div className="col-lg-8 offset-lg-2">
                <div className="row row--0">
                    {/* Start PRicing Table Area  */}
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="rn-pricing style-2">
                            <div className="pricing-table-inner">
                                <div className="pricing-header">
                                    <h4 className="title">Basic</h4>
                                    <div className="pricing">
                                        <div className="price-wrapper">
                                            <span className="currency">$</span>
                                            <span className="price">5</span>
                                        </div>
                                        <span className="subtitle">USD Per Month</span>
                                        <span className="subtitle">User Per Month</span>
                                    </div>
                                </div>
                                <div className="pricing-body">
                                    <ul className="list-style--1">
                                        <li><FiCheck /> MFA Automation</li>
                                        <li><FiCheck /> Access Control</li>
                                        <li><FiCheck /> 2 Vault Space</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <Link className="btn-default" to="/PricingAllHeimdall">Purchase Now</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End PRicing Table Area  */}

                    {/* Start PRicing Table Area  */}
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="rn-pricing style-2 active">
                            <div className="pricing-table-inner">
                                <div className="pricing-header">
                                    <h4 className="title">Standard</h4>
                                    <div className="pricing">
                                        <div className="price-wrapper">
                                            <span className="currency">$</span>
                                            <span className="price">7</span>
                                        </div>
                                        <span className="subtitle">USD Per Month</span>
                                        <span className="subtitle">User Per Month</span>
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
                                    <Link className="btn-default" to="/PricingAllHeimdall">Purchase Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End PRicing Table Area  */}
                </div>
            </div>
        </div>
    )
}
export default PricingThreeHeimdall;
