import Layout from "@/src/layout/Layout";
import PageBanner from "@/src/components/PageBanner";
import { useAgencyData } from "@/src/hooks/useAgencyData";

const Insights = () => {
  const { linkedinPosts, cta, contact } = useAgencyData();

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
            {linkedinPosts.map((post, index) => (
              <div key={post.id} className="col-lg-4 col-md-6 mb-4">
                <div
                  className={`blog-item wow fadeInUp delay-0-${
                    index % 3 === 0 ? "2" : index % 3 === 1 ? "4" : "6"
                  }s`}
                >
                  <iframe
                    src={post.embedUrl}
                    height={post.height}
                    width="100%"
                    frameBorder="0"
                    allowFullScreen=""
                    title="LinkedIn Embedded post"
                    style={{
                      minHeight:
                        parseInt(post.height) > 1200
                          ? "800px"
                          : `${post.height}px`,
                      maxHeight:
                        parseInt(post.height) > 1200 ? "1200px" : "auto",
                    }}
                  ></iframe>
                </div>
              </div>
            ))}
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
                <h3>{cta.primary.title}</h3>
                <p>{cta.primary.description}</p>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a
                href={cta.primary.buttonLink}
                className="theme-btn wow fadeInRight delay-0-2s"
              >
                {cta.primary.buttonText} <i className="far fa-arrow-right" />
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
