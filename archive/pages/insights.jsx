import Layout from "@/src/layout/Layout";
import PageBanner from "@/src/components/PageBanner";

const Insights = () => {
  return (
    <Layout dark>
      <PageBanner pageName={"Featured Insights"} />
      {/* Insights Section Start */}
      <section className="blog-area-two pt-125 rpt-100 pb-70 rpb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Featured Insights</span>
                <h2>Latest Updates from Social Funnel</h2>
                <p>
                  Stay updated with our latest insights on marketing automation,
                  lead generation, and business growth strategies for
                  high-ticket industries.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7189186812152537088?collapsed=1"
                  height="590"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  title="LinkedIn Embedded post"
                  style={{ minHeight: "590px", maxHeight: "590px" }}
                ></iframe>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7326526145561018368?collapsed=1"
                  height="670"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  title="LinkedIn Embedded post"
                  style={{ minHeight: "670px", maxHeight: "670px" }}
                ></iframe>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="blog-item wow fadeInUp delay-0-6s">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7325134242856751104"
                  height="800"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  title="LinkedIn Embedded post"
                  style={{ minHeight: "800px", maxHeight: "800px" }}
                ></iframe>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7267494921920483329"
                  height="800"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  title="LinkedIn Embedded post"
                  style={{ minHeight: "800px", maxHeight: "800px" }}
                ></iframe>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7259076968623562752"
                  height="800"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  title="LinkedIn Embedded post"
                  style={{ minHeight: "800px", maxHeight: "800px" }}
                ></iframe>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="blog-item wow fadeInUp delay-0-6s">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7247154515785773056"
                  height="800"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  title="LinkedIn Embedded post"
                  style={{ minHeight: "800px", maxHeight: "800px" }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Insights Section End */}

      {/* CTA Section */}
      <section className="cta-area pt-70 rpt-40 pb-90 rpb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="cta-content wow fadeInLeft delay-0-2s">
                <h3>Ready to Scale Your Business?</h3>
                <p>Not sure where to begin? Book a discovery Call with us</p>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a
                href="/contact"
                className="theme-btn wow fadeInRight delay-0-2s"
              >
                Book Discovery Call <i className="far fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section End */}
    </Layout>
  );
};

export default Insights;
