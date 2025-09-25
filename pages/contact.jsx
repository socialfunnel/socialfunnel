import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
const Contact = () => {
  return (
    <Layout dark>
      {/* Page Banner Start */}
      <PageBanner pageName={"Contact"} />
      {/* Page Banner End */}
      {/* Contact Form Area start */}
      <section className="contact-page-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="our-location-part rmb-55 wow fadeInUp delay-0-2s">
                <div className="row">
                  <div className="col-xl-10">
                    <div className="section-title mb-60">
                      <span className="sub-title mb-15">Contact Us</span>
                      <h2>
                        Not sure where to begin? Book a discovery Call with us
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row gap-80 pb-30">
                  <div className="col-sm-12">
                    <div className="our-location-address mb-40">
                      <h5>Our Office</h5>
                      <p>
                        P. O. Box 1215 - 10400,
                        <br />
                        Cape Chestnut, Nanyuki
                        <br />
                        Kenya
                      </p>
                      <a
                        className="mailto"
                        href="mailto:info@socialfunnel.agency"
                      >
                        info@socialfunnel.agency
                      </a>
                      <br />
                      <a className="callto" href="tel:+254721634183">
                        <i className="fas fa-phone" /> +254 721634183
                      </a>
                      <br />
                      <a
                        className="website"
                        href="https://www.socialfunnel.agency"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-globe" /> www.socialfunnel.agency
                      </a>
                    </div>
                  </div>
                </div>
                <h4>Follow Us</h4>
                <div className="social-style-two pt-15">
                  <a
                    href="https://www.linkedin.com/company/socialfunnel-agency"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="tel:+254721634183">
                    <i className="fas fa-phone" />
                  </a>
                  <a href="mailto:info@socialfunnel.agency">
                    <i className="fas fa-envelope" />
                  </a>
                  <a
                    href="https://www.socialfunnel.agency"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-globe" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-page-form form-style-one wow fadeInUp delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-15">Get Free Quote</span>
                  <h3>Drop Us a Message</h3>
                </div>
                <form
                  id="contactForm"
                  className="contactForm"
                  action="assets/php/form-process.php"
                  name="contactForm"
                  method="post"
                >
                  <div className="row gap-60 pt-15">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="name">
                          <i className="far fa-user" />
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue
                          placeholder="Full Name"
                          required
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="phone_number">
                          <i className="far fa-phone" />
                        </label>
                        <input
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          className="form-control"
                          defaultValue
                          placeholder="Phone"
                          required
                          data-error="Please enter your Number"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="email">
                          <i className="far fa-envelope" />
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          defaultValue
                          placeholder="Email Address"
                          required
                          data-error="Please enter your Email Address"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">
                          <i className="far fa-pencil" />
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={2}
                          placeholder="Message"
                          required
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group pt-5 mb-0">
                        <button
                          type="submit"
                          className="theme-btn style-two w-100"
                        >
                          Send Message us <i className="far fa-arrow-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map mb-120 rpb-90 wow fadeInUp delay-0-2s">
        <div className="container-fluid">
          <div className="our-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.760445!2d37.074324!3d0.023618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17829b0b0b0b0b0b%3A0x0!2sNanyuki%2C%20Kenya!5e0!3m2!1sen!2ske!4v1663473911885!5m2!1sen!2ske"
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      {/* Location Map Area End */}
      {/* footer area start */}
    </Layout>
  );
};
export default Contact;
