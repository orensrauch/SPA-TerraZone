import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop'

// Pages import Here 
import SDE from "./pages/SDE";
import Heimdall from "./pages/Heimdall";
import Corporate from "./pages/Corporate";
import Business from "./pages/Business";
import PricingAll from "./pages/PricingAll";
import PricingAllSde from "./pages/PricingAllSde";
import PricingAllHeimdall from './pages/PricingAllHeimdall';
import Government from './components/Splash/Tab-Pages/government/Government'
import DepartmentOfDefence from './components/Splash/Tab-Pages/DOD/DepartmentOfDefence'
import HealthCare from './components/Splash/Tab-Pages/HealthCare/HealthCare'
import Education from './components/Splash/Tab-Pages/Education/Education'
import SDESaaS from './pages/SDE-Form'

import CategoryList from "./pages/CategoryList";
import TagList from "./pages/TagList";
import Author from "./pages/Author";
import AboutUs from "./pages/AboutUs";

// Elements import Here 

import Elements from "./elements/elements/Elements";
import Button from "./elements/button/Button";
import Service from "./elements/service/Service";
import CounterUp from "./elements/counterup/CounterUp";
import Progressbar from "./elements/progressbar/Progressbar";

import Portfolio from "./elements/portfolio/Portfolio";
import portfolioThreeColumn from "./elements/portfolio/PortfolioThreeColumn";
import PortfolioFullWidth from "./elements/portfolio/PortfolioFullWidth";
import PortfolioGrid from "./elements/portfolio/PortfolioGrid";
import PortfolioBoxLayout from "./elements/portfolio/PortfolioBoxLayout";
import PortfolioDetails from "./pages/PortfolioDetails";
import Social from "./elements/social/Social";
import Team from "./elements/team/Team";
import Timeline from "./elements/timeline/Timeline";
import Testimonial from "./elements/testimonial/Testimonial";
import RnAccordion from "./elements/accordion/RnAccordion";
import Tab from "./elements/tab/Tab";
import Pricing from "./elements/pricing/Pricing";
import Split from "./elements/split/Split";
import CalltoAction from "./elements/calltoaction/CalltoAction";
import Video from "./elements/video/Video";
import Gallery from "./elements/gallery/Gallery";
import Contact from "./elements/contact/Contact";
import Brand from "./elements/brand/Brand";
import AdvanceTab from "./elements/advancetab/AdvanceTab";
import AdvancePricing from "./elements/advancePricing/AdvancePricing";


import BlogGridView from "./components/blog/BlogGridView";
import BlogListView from "./components/blog/BlogListView";
import BlogGridSidebar from "./components/blog/BlogGridSidebar";
import BlogListSidebar from "./components/blog/BlogListSidebar";
import BlogDetails from "./pages/BlogDetails";
import Error from "./pages/Error";


// Import Css Here 
import './assets/scss/style.scss';


const App = () => {
    return (
        <Router>
            <PageScrollTop>
                <Switch>
                    {/* <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={Splash}/> */}
                    <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={SDESaaS} />
                    <Route path={`${process.env.PUBLIC_URL + "/SDE"}`} exact component={SDE}/>
                    <Route path={`${process.env.PUBLIC_URL + "/Heimdall"}`} exact component={Heimdall} />
                    <Route path={`${process.env.PUBLIC_URL + "/PricingAll"}`} exact component={PricingAll} />
                    <Route path={`${process.env.PUBLIC_URL + "/PricingAllSde"}`} exact component={PricingAllSde} />
                    <Route path={`${process.env.PUBLIC_URL + "/PricingAllHeimdall"}`} exact component={PricingAllHeimdall} />
                    <Route path={`${process.env.PUBLIC_URL + "/Government"}`} exact component={Government} />
                    <Route path={`${process.env.PUBLIC_URL + "/DepartmentOfDefence"}`} exact component={DepartmentOfDefence} />
                    <Route path={`${process.env.PUBLIC_URL + "/Healthcare"}`} exact component={HealthCare} />
                    <Route path={`${process.env.PUBLIC_URL + "/education"}`} exact component={Education} />
                    <Route path={`${process.env.PUBLIC_URL + "/corporate"}`} exact component={Corporate}/>
                    <Route path={`${process.env.PUBLIC_URL + "/business"}`} exact component={Business} />

                    {/* Blog Part  */}
                    <Route path={`${process.env.PUBLIC_URL + "/blog-grid"}`} exact component={BlogGridView}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-list-view"}`} exact component={BlogListView}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-grid-sidebar"}`} exact component={BlogGridSidebar}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-list-sidebar"}`} exact component={BlogListSidebar}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`} exact component={BlogDetails}/>
                    <Route path={`${process.env.PUBLIC_URL + "/category/:slug"}`} exact component={CategoryList}/>
                    <Route path={`${process.env.PUBLIC_URL + "/archive/:slug"}`} exact component={Author}/>
                    <Route path={`${process.env.PUBLIC_URL + "/tag/:slug"}`} exact component={TagList}/>

                    <Route path={`${process.env.PUBLIC_URL + "/elements"}`} exact component={Elements}/>
                    <Route path={`${process.env.PUBLIC_URL + "/button"}`} exact component={Button}/>
                    <Route path={`${process.env.PUBLIC_URL + "/service"}`} exact component={Service}/>
                    <Route path={`${process.env.PUBLIC_URL + "/counter"}`} exact component={CounterUp}/>
                    <Route path={`${process.env.PUBLIC_URL + "/progressbar"}`} exact component={Progressbar}/>
                    <Route path={`${process.env.PUBLIC_URL + "/social-share"}`} exact component={Social}/>
                    <Route path={`${process.env.PUBLIC_URL + "/team"}`} exact component={Team}/>
                    <Route path={`${process.env.PUBLIC_URL + "/testimonial"}`} exact component={Testimonial}/>
                    <Route path={`${process.env.PUBLIC_URL + "/timeline"}`} exact component={Timeline}/>
                    <Route path={`${process.env.PUBLIC_URL + "/accordion"}`} exact component={RnAccordion}/>
                    <Route path={`${process.env.PUBLIC_URL + "/tab"}`} exact component={Tab}/>
                    <Route path={`${process.env.PUBLIC_URL + "/pricing"}`} exact component={Pricing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/split"}`} exact component={Split}/>
                    <Route path={`${process.env.PUBLIC_URL + "/call-to-action"}`} exact component={CalltoAction}/>
                    <Route path={`${process.env.PUBLIC_URL + "/video-popup"}`} exact component={Video}/>
                    <Route path={`${process.env.PUBLIC_URL + "/gallery"}`} exact component={Gallery}/>
                    <Route path={`${process.env.PUBLIC_URL + "/contact"}`} exact component={Contact}/>
                    <Route path={`${process.env.PUBLIC_URL + "/brand"}`} exact component={Brand}/>
                    <Route path={`${process.env.PUBLIC_URL + "/advance-tab"}`} exact component={AdvanceTab}/>
                    <Route path={`${process.env.PUBLIC_URL + "/advance-pricing"}`} exact component={AdvancePricing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/about-terrazone"}`} exact component={AboutUs}/>

                    <Route path={`${process.env.PUBLIC_URL + "/error"}`} exact component={Error}/>
                    
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio"}`} exact component={Portfolio}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-three-column"}`} exact component={portfolioThreeColumn}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-full-width"}`} exact component={PortfolioFullWidth}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-grid-layout"}`} exact component={PortfolioGrid}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-box-layout"}`} exact component={PortfolioBoxLayout}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-details/:id"}`} exact component={PortfolioDetails}/>

                </Switch>
            </PageScrollTop>
        </Router>
    )
}


export default App
