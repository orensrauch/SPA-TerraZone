/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
import {useState} from "react";
import { FiX , FiArrowRight} from "react-icons/fi";
import { Link } from "react-router-dom";

const HeaderTopNews = () => {
    const [deactive, setClass] = useState('');
    return (
        <div className={`header-top-news bg_image ${deactive}`}  style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/top-banner.png)`}}>
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="content">
                                    <span className="rn-badge">Limited Time Offer</span>
                                    <span className="news-text">Intro price. Get Heimdall for Big Sale <strong>-25% off.</strong></span>
                                </div>
                                <div className="right-button">
                                   <li> <Link to="/Heimdall">Try Heimdall Now</Link><span><FiArrowRight /></span></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="icon-close">
                <button className="close-button" onClick={() => setClass('deactive')}><FiX /></button>
            </div>
        </div>
    )
}

export default HeaderTopNews;
