import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: '/images/service/galery-image-heimdall-01.png',
        title: 'MFA your system',
        description: 'Save time with pre-built reporting and data that you can download, sync, and access in a variety of formats in the world nowdays its really needed.'
    },
    {
        image: '/images/service/galery-image-heimdall-02.png',
        title: 'Network effect to identify threats',
        description: 'Take action against threats and suspicious activity across TerraZone’s ecosystem of more than 13,000 customers and 7,000 partners in the.'
    },
    {
        image: '/images/service/galery-image-heimdall-03.png',
        title: 'Secure-but-simple factors',
        description: 'Set up TerraZone’s cloud-based authentication to give your users high-assurance but simple-to-use factors like biometrics and push notifications..'
    }
]
const ServiceFive = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="content">
                                    <h4 className="title">
                                        <Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link>
                                    </h4>
                                    <p className="description" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                </div>
                                <div className="image">
                                    <img src={`${val.image}`} alt="card Images" />
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceFive;