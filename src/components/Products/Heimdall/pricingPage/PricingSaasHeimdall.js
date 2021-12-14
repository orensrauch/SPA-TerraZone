import React from 'react';
import { FiCheck } from "react-icons/fi";

const PricingSaasHeimdall = () => {
    return (
        <div className="row row--30">
            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Free</h4>
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
                                <li><FiCheck /> SMB Gateway</li>
                                <li><FiCheck /> SMB Proxy</li>
                                <li><FiCheck /> Full API Integration</li>
                                <li><FiCheck /> MFA Integration Finger Print/ Face Recognition</li>
                                <li><FiCheck /> SIEM Integration</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default" href="#pricing">Try Now</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing active">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Business</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">5</span>
                                </div>
                                <span className="subtitle">USD Per Month / Per User</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> SMB Gateway</li>
                                <li><FiCheck /> SMB Proxy</li>
                                <li><FiCheck /> Full API Integration</li>
                                <li><FiCheck /> MFA Integration Finger Print/ Face Recognition</li>
                                <li><FiCheck /> SIEM Integration</li>
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
                <div className="rn-pricing">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Advanced</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">7</span>
                                </div>
                                <span className="subtitle">USD Per Month / Per User</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> SMB Gateway</li>
                                <li><FiCheck /> SMB Proxy</li>
                                <li><FiCheck /> Full API Integration</li>
                                <li><FiCheck /> MFA Integration Finger Print/ Face Recognition</li>
                                <li><FiCheck /> SIEM Integration</li>
                                <li><FiCheck /> Azure Integration</li>
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
export default PricingSaasHeimdall;
