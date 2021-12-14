import React from 'react';
import { Link } from "react-router-dom";
const callToActionData = {
    title: "Ready to start Protecting Public Sector?",
    subtitle: "Finest choice for your needs",
    btnText: "Try TerraZone",
}
const CalltoActionSix = () => {
    return (
        <div className="rn-callto-action clltoaction-style-default style-6">
            <div className="container">
                <div className="row row--0 align-items-center content-wrapper">
                    <div className="col-lg-8 col-12">
                        <div className="inner">
                            <div className="content text-left">
                                <h2 className="title">{callToActionData.title}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="call-to-btn text-left text-lg-right mt_md--20 mt_sm--20">
                            <Link className="btn-default" to="/PricingAll">{callToActionData.btnText}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalltoActionSix;