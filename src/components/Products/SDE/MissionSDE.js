import React from 'react';
import Typed from 'react-typed';
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import AccordionOneSDE from './AccordionOneSDE'

const missionSDE = () => {
    return (
        <div className="rn-company-mission-are rn-section-gap">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-6">
                        <div className="mission-title">
                            <h2 className="title">SDE Mission <br /> {" "}
                                <Typed className="theme-gradient"
                                    strings={[
                                        "Encryption.",
                                        "Simplicity.",
                                        "Integration.",
                                    ]}
                                    typeSpeed={80}
                                    backSpeed={5}
                                    backDelay={1000}
                                    loop
                                />
                            </h2>
                            <p>Microsoft's Active Directory (AD) has been around since 1999 when Microsoft first released it with Windows 2000 Server. Fast forward 20 years later and organizations have begun to realize that AD wasn't built for a cloud-centric world and today's use cases. To make the most out of their investment in AD, forward-thinking IT organizations are looking to integrate their legacy AD environment with modern single sign-on from TerraZone, so they can access their on-premises and cloud applications through a single interface. Learn how you can take advantage of modern Identity and Access Management by integrating AD with TerraZone.</p>

                            <div className="read-more-btn mt--50">
                                <Link className="btn-default btn-icon" to="#">Learn More <i className="icon"><FiArrowRight /></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt_md--30 mt_sm--30">
                        <AccordionOneSDE customStyle="" />
                    </div>
                </div>
            </div>                        
        </div>
    )
}
export default missionSDE;
