import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from "react-router-dom";

// Government
const dataList = [
    {
        image: '/images/tabImage/tab-government-01.jpg',
        title: 'Identity solutions for federal agencies',
        description: 'Heavy legacy maintenance costs and increasing cybersecurity risk have left government agencies in need of a change. Learn how TerraZone can help modernize your agency’s IT.'
    },
    {
        image: '/images/tabImage/tab-government-02.jpg',
        title: 'Connect all of your apps, cloud and on prem',
        description: 'Heavy legacy maintenance costs and increasing cybersecurity risk have left government agencies in need of a change. Learn how TerraZone can help modernize your agency’s IT.'
    }
]

// DOD
const dataList2 = [
    {
        image: '/images/tabImage/tab-dod-01.jpg',
        title: 'Build secure, seamless citizen experiences',
        description: 'Whether you’re building a new citizen-facing portal or unifying a constellation of existing services, TerraZone makes web and mobile access secure, compliant, and frictionless.'
    },
    {
        image: '/images/tabImage/tab-dod-02.jpg',
        title: 'Implement a Zero Trust approach to security',
        description: 'The adoption of mobile and cloud means that we can no longer have a network perimeter-centric view of security. Explore how TerraZone can help securely enable access for all your agency’s users regardless of their location, device, or network.'
    }
]

// Healthcare
const dataList3 = [
    {
        image: '/images/tabImage/tab-health-01.jpg',
        title: 'Compliance and security features that government needs',
        description: 'Get secure, audited infrastructure and processes. We take a comprehensive approach to security and have achieved many certifications, including FedRAMP ATO, FIPS 140-2, HIPAA, and more.'
    },
    {
        image: '/images/tabImage/tab-health-02.jpg',
        title: 'HIPAA compliance',
        description: 'TerraZone’s HIPAA-compliant cell is designed to meet HIPAA requirements for service providers. From end-to-end encryption of data to dedicated hardware, TerraZone enables organizations to manage employee.'
    },
    {
        image: '/images/tabImage/tab-health-03.jpg',
        title: 'Implement a variety of different factors',
        description: 'Use a comprehensive set of user-friendly factors that simplify secure access for employees, partners, and customers including TerraZone Verify with Push, One-time push (OTP), SMS, Voice, and more.'
    }
]
// Education
const dataList4 = [
    {
        image: '/images/tabImage/tab-education-01.jpg',
        title: 'Simplify campus complexity',
        description: 'With TerraZone Universal Directory, institutions can connect into a variety of directory sources—AD, LDAP, Ellucian, Peoplesoft, Workday—and use TerraZone as the hub for connecting users with the resources they need.'
    },
    {
        image: '/images/tabImage/tab-education-02.jpg',
        title: 'Streamlined access for students and staff',
        description: 'With Single Sign-On, admins gain a single pane of glass to manage access across this complex user base, and can use group rules to ensure that the right people get access to the right resources. TerraZone also integrates with Shibboleth and Incommon to provide access to core education services.'
    },
    {
        image: '/images/tabImage/tab-education-03.jpg',
        title: 'Enhance campus cybersecurity',
        description: 'TerraZone’s Adaptive MFA helps mitigate phishing attacks, which education is particularly vulnerable to, while also providing a variety of factor and even passwordless options to simplify the experience for end users such as students.'
    }
]

const TabSplash = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <Tabs>
                        <div className="row row--30 align-items-center">
                            <div className="col-lg-12">
                                <div className="rn-default-tab style-three">
                                    <div className="tab-button-panel">
                                        <TabList className="tab-button">
                                            <Tab>
                                                <div className="rn-tab-button">
                                                    <button>Government</button>
                                                </div>
                                            </Tab>
                                            <Tab>
                                                <div className="rn-tab-button">
                                                    <button>Department Of Defense</button>
                                                </div>
                                            </Tab>
                                            <Tab>
                                                <div className="rn-tab-button">
                                                    <button>Healthcare</button>
                                                </div>
                                            </Tab>
                                            <Tab>
                                                <div className="rn-tab-button">
                                                    <button>Education</button>
                                                </div>
                                            </Tab>
                                        </TabList>
                                    </div>

                                    {/** Government */}
                                    <div className="tab-content-panel">
                                        <TabPanel>
                                            <div className="rn-tab-content">
                                                <div className="inner">
                                                    <div className="row align-items-center row--30">
                                                        <div className="col-lg-4">
                                                            <div className="section-title">
                                                                <h4 className="title">TerraZone for Government</h4>
                                                                <p>Accelerate agency missions with modern, Zero Trust identity.</p>
                                                                <div className="read-more">
                                                                    <Link className="btn-default btn-small" to="/government">Read More</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8 mt_md--30 mt_sm--30">
                                                            <div className="row row--15 mt_dec--30 service-wrapper">
                                                                {dataList.map((val, i) => (
                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                                                        <div className="card-box card-style-1 text-left">
                                                                            <div className="inner">
                                                                                <div className="image">
                                                                                    <Link to="/government">
                                                                                        <img src={`${val.image}`} alt="card Images" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="content">
                                                                                    <h4 className="title mb--20"><Link to="/government" dangerouslySetInnerHTML={{ __html: val.title }}></Link></h4>
                                                                                    <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{ __html: val.description }}></p>
                                                                                    <Link className="btn-default btn-small" to="/government">Read More</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>

                                        {/** DOD */}
                                        <TabPanel>
                                            <div className="rn-tab-content">
                                                <div className="inner">
                                                    <div className="row align-items-center row--30">
                                                        <div className="col-lg-4">
                                                            <div className="section-title">
                                                                <h4 className="title">You’re on a mission. We’re here to help.</h4>
                                                                <p>Accelerate missions with centralized, Zero Trust identity and access management</p>
                                                                <div className="read-more">
                                                                    <Link className="btn-default btn-small" to="/government">Read More</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8 mt_md--30 mt_sm--30">
                                                            <div className="row row--15 mt_dec--30 service-wrapper">
                                                                {dataList2.map((val, i) => (
                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                                                        <div className="card-box card-style-1 text-left">
                                                                            <div className="inner">
                                                                                <div className="image">
                                                                                    <Link to="/government">
                                                                                        <img src={`${val.image}`} alt="card Images" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="content">
                                                                                    <h4 className="title mb--20"><Link to="/government" dangerouslySetInnerHTML={{ __html: val.title }}></Link></h4>
                                                                                    <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{ __html: val.description }}></p>
                                                                                    <Link className="btn-default btn-small" to="/government">Read More</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>

                                        {/** Healthcare */}
                                        <TabPanel>
                                            <div className="rn-tab-content">
                                                <div className="inner">
                                                    <div className="row align-items-center row--30">
                                                        <div className="col-lg-12">
                                                            <div className="row row--15 mt_dec--30 service-wrapper">
                                                                {dataList3.map((val, i) => (
                                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                                                        <div className="card-box card-style-1 text-left">
                                                                            <div className="inner">
                                                                                <div className="image">
                                                                                    <Link to="/government">
                                                                                        <img src={`${val.image}`} alt="card Images" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="content">
                                                                                    <h4 className="title mb--20"><Link to="/government" dangerouslySetInnerHTML={{ __html: val.title }}></Link></h4>
                                                                                    <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{ __html: val.description }}></p>
                                                                                    <Link className="btn-default btn-small" to="/government">Read More</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>

                                        {/** Education */}
                                        <TabPanel>
                                            <div className="rn-tab-content">
                                                <div className="inner">
                                                    <div className="row align-items-center row--30">
                                                        <div className="col-lg-12">
                                                            <div className="row row--15 mt_dec--30 service-wrapper">
                                                                {dataList4.map((val, i) => (
                                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                                                        <div className="card-box card-style-1 text-left">
                                                                            <div className="inner">
                                                                                <div className="image">
                                                                                    <Link to="/government">
                                                                                        <img src={`${val.image}`} alt="card Images" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="content">
                                                                                    <h4 className="title mb--20"><Link to="/government" dangerouslySetInnerHTML={{ __html: val.title }}></Link></h4>
                                                                                    <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{ __html: val.description }}></p>
                                                                                    <Link className="btn-default btn-small" to="/government">Read More</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default TabSplash
