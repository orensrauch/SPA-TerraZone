import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li className="has-droupdown"><Link to="#">Products</Link>
                <ul className="submenu">
                    <li><Link to="/SDE">SDE</Link></li>
                    <li><Link to="/Heimdall">Heimdall</Link></li>
                    <li><Link to="/ThorZone">ThorZone</Link></li>
                </ul>
            </li>


            <li className="has-droupdown"><Link to="#">Solutions</Link>
                <ul className="submenu">

                    <li><Link to="/">Adopt a Zero Trust Security Model</Link></li>
                    <li><Link to="/">Reduce IT Friction</Link></li>
                    <li><Link to="/">Move to the Cloud</Link></li>
                    <li><Link to="/">Adopt Office 365</Link></li>
                    <li><Link to="/">Scure Access to API's</Link></li>
                    <li><Link to="/">Cultivate User Trust</Link></li>
                    <li><Link to="/">Transform into a Digital Platform</Link></li>
                </ul>
            </li>



            <li className="has-droupdown"><Link to="#">Developers</Link>
                <ul className="submenu">
                    <li><Link to="/">SDK's</Link></li>
                    <li><Link to="/">Guides</Link></li>
                    <li><Link to="/">Changelog</Link></li>
                    <li><Link to="/">Forum</Link></li>
                    <li><Link to="/">AuthO Developers</Link></li>
                </ul>
            </li>


            <li className="has-droupdown"><Link to="/blog-list-sidebar">Blog</Link></li>


            <li className="has-droupdown"><Link to="#">Company</Link>
                <ul className="submenu">
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/">Start Your Career</Link></li>
                    <li><Link to="/">Leadership</Link></li>
                    <li><Link to="/">Partners</Link></li>
                </ul>
            </li>



            <li className="has-droupdown"><Link to="/contact">Contact</Link></li>
        </ul>
    )
}
export default Nav;
