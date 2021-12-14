import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import BlogPropTwo from './itemProp/BlogPropTwo';

const BlogListView = () => {
    return (
        <>
            <SEO title="TerraZone || Blog - Updates and News" />
            <Layout>
                <BreadcrumbOne 
                    title="."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Blog List View"
                />

                <div className="main-content">
                    {/* Start Blog Area  */}
                    <div className="rn-blog-area rn-section-gap">
                        <div className="container">
                            <div className="row mt_dec--30">
                                <BlogPropTwo column="col-lg-6 mt--30" StyleVarProp="box-card-style-default card-list-view" />
                            </div>
                        </div>
                    </div>
                    {/* End Blog Area  */}
                </div>

            </Layout>
        </>
    )
}

export default BlogListView
