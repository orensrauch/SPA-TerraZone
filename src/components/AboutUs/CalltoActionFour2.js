import React from 'react';
import { Link } from "react-router-dom";

const callToActionData = {
    title: "Let’s keep in touch",
    subtitle: "",
    btnText: "Contact Us",
}
const CalltoActionFourAbout2 = () => {
    return (
        <div className="rn-callto-action clltoaction-style-default style-4">
            <div className="container">
                <div className="row row--0 align-items-center content-wrapper">
                    <div className="col-lg-8">
                        <div className="inner">
                            <div className="content text-left">
                                <h2 className="title">{callToActionData.title}</h2>
                                <h6 className="subtitle">{callToActionData.subtitle}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="call-to-btn text-left text-lg-right">
                            <Link className="btn-default" to="/contact">{callToActionData.btnText}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalltoActionFourAbout2;