import React from 'react';
import { FiCheck } from "react-icons/fi";

const PricingSaasSde = () => {
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
                                <li><FiCheck /> 1000 Email Automation</li>
                                <li><FiCheck /> Access Control</li>
                                <li><FiCheck /> 10 Vault Space</li>
                                <li><FiCheck /> Full SDK</li>
                                <li><FiCheck /> 900 Hr Cloud Computing</li>
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
                                    <span className="price">2</span>
                                </div>
                                <span className="subtitle">USD Per Month / Per User</span>
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
                <div className="rn-pricing">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Advanced</h4>
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
export default PricingSaasSde;
