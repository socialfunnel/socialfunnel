import * as React from "react";

interface ThankYouEmailProps {
  firstName: string;
  companyName: string;
}

export function ThankYouEmailTemplate({
  firstName,
  companyName,
}: ThankYouEmailProps) {
  return (
    <div
      style={{
        fontFamily: "Lexend, Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        color: "#000000",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#4F8EDB",
          padding: "40px 20px",
          textAlign: "center" as const,
        }}
      >
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/logos/logo.png"
          alt="Social Funnel Logo"
          style={{
            height: "60px",
            width: "auto",
            marginBottom: "16px",
          }}
        />
        <h1
          style={{
            fontFamily: '"Times New Roman", serif',
            fontSize: "32px",
            fontWeight: "bold",
            margin: "0",
            color: "#ffffff",
          }}
        >
          Social Funnel
        </h1>
        <p
          style={{
            fontSize: "16px",
            margin: "8px 0 0 0",
            color: "#ffffff",
            opacity: 0.9,
          }}
        >
          Building Predictable Client Acquisition Systems
        </p>
      </div>

      {/* Main Content */}
      <div style={{ padding: "40px 20px" }}>
        <h2
          style={{
            fontFamily: '"Times New Roman", serif',
            fontSize: "24px",
            fontWeight: "bold",
            color: "#000000",
            marginBottom: "20px",
          }}
        >
          Thank You for Your Inquiry!
        </h2>

        <p
          style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}
        >
          Hi {firstName},
        </p>

        <p
          style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}
        >
          Thank you for reaching out to Social Funnel regarding {companyName}
          &apos;s marketing needs. We&apos;re excited about the opportunity to
          help you build a predictable client acquisition system.
        </p>

        <p
          style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}
        >
          Our team will review your inquiry and get back to you within 24 hours
          during business days. We&apos;ll discuss how we can help transform
          your business with our proven strategies.
        </p>

        <div
          style={{
            backgroundColor: "#E8F2FC",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "30px",
            borderLeft: "4px solid #4F8EDB",
          }}
        >
          <h3
            style={{
              fontFamily: '"Times New Roman", serif',
              fontSize: "18px",
              fontWeight: "bold",
              color: "#000000",
              marginBottom: "12px",
            }}
          >
            What happens next?
          </h3>
          <ul style={{ paddingLeft: "20px", margin: "0" }}>
            <li
              style={{
                marginBottom: "8px",
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            >
              Our team reviews your requirements and business goals
            </li>
            <li
              style={{
                marginBottom: "8px",
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            >
              We&apos;ll schedule a discovery call to understand your needs
              better
            </li>
            <li
              style={{
                marginBottom: "8px",
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            >
              You&apos;ll receive a custom strategy proposal tailored to your
              business
            </li>
          </ul>
        </div>

        <p
          style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "30px" }}
        >
          In the meantime, feel free to explore our services or book a direct
          call if you prefer immediate assistance.
        </p>

        <div style={{ textAlign: "center" as const, marginBottom: "30px" }}>
          <a
            href="https://calendly.com/musemind/30min"
            style={{
              display: "inline-block",
              backgroundColor: "#4F8EDB",
              color: "#ffffff",
              padding: "12px 24px",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Book a Discovery Call
          </a>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "30px 20px",
          textAlign: "center" as const,
          borderTop: "1px solid #e9ecef",
        }}
      >
        <p style={{ fontSize: "14px", color: "#6c757d", margin: "0 0 12px 0" }}>
          <strong>Social Funnel Agency</strong>
          <br />
          Cape Chestnut, Nanyuki | P.O. Box 1215 - 10400, Kenya
        </p>
        <p style={{ fontSize: "14px", color: "#6c757d", margin: "0 0 12px 0" }}>
          📧 info@socialfunnel.agency | 📞 +254 721 634 183
        </p>
        <p style={{ fontSize: "12px", color: "#6c757d", margin: "0" }}>
          Building predictable client acquisition systems for high-ticket
          businesses.
        </p>
      </div>
    </div>
  );
}

interface AdminNotificationEmailProps {
  formData: {
    fullName: string;
    companyName: string;
    email: string;
    companyWebsite?: string;
    sector: string;
    marketingNeeds: string;
    otherMarketingNeeds?: string;
    hearAboutUs: string;
    projectBudget: string;
  };
  submittedAt: string;
}

export function AdminNotificationEmailTemplate({
  formData,
  submittedAt,
}: AdminNotificationEmailProps) {
  return (
    <div
      style={{
        fontFamily: "Lexend, Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        color: "#000000",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#D65A31",
          padding: "30px 20px",
          textAlign: "center" as const,
        }}
      >
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/logos/logo.png"
          alt="Social Funnel Logo"
          style={{
            height: "50px",
            width: "auto",
            marginBottom: "12px",
          }}
        />
        <h1
          style={{
            fontFamily: '"Times New Roman", serif',
            fontSize: "28px",
            fontWeight: "bold",
            margin: "0",
            color: "#ffffff",
          }}
        >
          🚨 New Contact Form Submission
        </h1>
        <p
          style={{
            fontSize: "14px",
            margin: "8px 0 0 0",
            color: "#ffffff",
            opacity: 0.9,
          }}
        >
          Submitted on {submittedAt}
        </p>
      </div>

      {/* Main Content */}
      <div style={{ padding: "30px 20px" }}>
        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
            border: "1px solid #e9ecef",
          }}
        >
          <h2
            style={{
              fontFamily: '"Times New Roman", serif',
              fontSize: "20px",
              fontWeight: "bold",
              color: "#000000",
              marginBottom: "16px",
              borderBottom: "2px solid #4F8EDB",
              paddingBottom: "8px",
            }}
          >
            Contact Information
          </h2>

          <div style={{ marginBottom: "12px" }}>
            <strong style={{ color: "#D65A31" }}>Name:</strong>{" "}
            {formData.fullName}
          </div>
          <div style={{ marginBottom: "12px" }}>
            <strong style={{ color: "#D65A31" }}>Company:</strong>{" "}
            {formData.companyName}
          </div>
          <div style={{ marginBottom: "12px" }}>
            <strong style={{ color: "#D65A31" }}>Email:</strong>{" "}
            <a href={`mailto:${formData.email}`} style={{ color: "#4F8EDB" }}>
              {formData.email}
            </a>
          </div>
          {formData.companyWebsite && (
            <div style={{ marginBottom: "12px" }}>
              <strong style={{ color: "#D65A31" }}>Website:</strong>{" "}
              <a href={formData.companyWebsite} style={{ color: "#4F8EDB" }}>
                {formData.companyWebsite}
              </a>
            </div>
          )}
          <div style={{ marginBottom: "12px" }}>
            <strong style={{ color: "#D65A31" }}>Sector:</strong>{" "}
            {formData.sector}
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#E8F2FC",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
            border: "1px solid #4F8EDB",
          }}
        >
          <h2
            style={{
              fontFamily: '"Times New Roman", serif',
              fontSize: "20px",
              fontWeight: "bold",
              color: "#000000",
              marginBottom: "16px",
              borderBottom: "2px solid #D65A31",
              paddingBottom: "8px",
            }}
          >
            Project Details
          </h2>

          <div style={{ marginBottom: "12px" }}>
            <strong style={{ color: "#D65A31" }}>Marketing Needs:</strong>{" "}
            {formData.marketingNeeds}
          </div>
          {formData.otherMarketingNeeds && (
            <div style={{ marginBottom: "12px" }}>
              <strong style={{ color: "#D65A31" }}>Specific Needs:</strong>
              <br />
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "12px",
                  borderRadius: "4px",
                  marginTop: "8px",
                  fontStyle: "italic",
                }}
              >
                {formData.otherMarketingNeeds}
              </div>
            </div>
          )}
          <div style={{ marginBottom: "12px" }}>
            <strong style={{ color: "#D65A31" }}>Project Budget:</strong>{" "}
            {formData.projectBudget}
          </div>
          <div style={{ marginBottom: "12px" }}>
            <strong style={{ color: "#D65A31" }}>How they found us:</strong>{" "}
            {formData.hearAboutUs}
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#FFF3E0",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #D65A31",
            textAlign: "center" as const,
          }}
        >
          <h3
            style={{
              fontFamily: '"Times New Roman", serif',
              fontSize: "18px",
              fontWeight: "bold",
              color: "#D65A31",
              marginBottom: "12px",
            }}
          >
            ⚡ Action Required
          </h3>
          <p style={{ fontSize: "14px", margin: "0 0 16px 0" }}>
            Remember to respond within 24 hours as promised!
          </p>
          <a
            href={`mailto:${formData.email}?subject=Re: Your inquiry about ${formData.marketingNeeds}&body=Hi ${formData.fullName},%0D%0A%0D%0AThank you for your inquiry about ${formData.marketingNeeds} for ${formData.companyName}.%0D%0A%0D%0ABest regards,%0D%0ASocial Funnel Team`}
            style={{
              display: "inline-block",
              backgroundColor: "#D65A31",
              color: "#ffffff",
              padding: "10px 20px",
              textDecoration: "none",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Reply to Client
          </a>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          textAlign: "center" as const,
          borderTop: "1px solid #e9ecef",
        }}
      >
        <p style={{ fontSize: "12px", color: "#6c757d", margin: "0" }}>
          This is an automated notification from the Social Funnel contact form.
        </p>
      </div>
    </div>
  );
}

interface NewsletterThankYouEmailProps {
  firstName?: string;
  email: string;
}

export function NewsletterThankYouEmailTemplate({
  firstName,
  email,
}: NewsletterThankYouEmailProps) {
  const displayName = firstName || email.split("@")[0];

  return (
    <div
      style={{
        fontFamily: "Lexend, Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        color: "#000000",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#4F8EDB",
          padding: "40px 20px",
          textAlign: "center" as const,
        }}
      >
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/logos/logo.png"
          alt="Social Funnel Logo"
          style={{
            height: "60px",
            width: "auto",
            marginBottom: "16px",
          }}
        />
        <h1
          style={{
            fontFamily: '"Times New Roman", serif',
            fontSize: "32px",
            fontWeight: "bold",
            margin: "0",
            color: "#ffffff",
          }}
        >
          Welcome to Social Funnel!
        </h1>
        <p
          style={{
            fontSize: "16px",
            margin: "8px 0 0 0",
            color: "#ffffff",
            opacity: 0.9,
          }}
        >
          Your marketing growth journey starts here
        </p>
      </div>

      {/* Main Content */}
      <div style={{ padding: "40px 20px" }}>
        <h2
          style={{
            fontFamily: '"Times New Roman", serif',
            fontSize: "24px",
            fontWeight: "bold",
            color: "#000000",
            marginBottom: "20px",
          }}
        >
          🎉 Successfully Subscribed!
        </h2>

        <p
          style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}
        >
          Hi {displayName},
        </p>

        <p
          style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}
        >
          Thank you for subscribing to the Social Funnel newsletter! You&apos;ve
          just taken the first step towards transforming your business with
          proven marketing strategies.
        </p>

        <div
          style={{
            backgroundColor: "#E8F2FC",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "30px",
            borderLeft: "4px solid #4F8EDB",
          }}
        >
          <h3
            style={{
              fontFamily: '"Times New Roman", serif',
              fontSize: "18px",
              fontWeight: "bold",
              color: "#000000",
              marginBottom: "12px",
            }}
          >
            📧 What you&apos;ll receive:
          </h3>
          <ul style={{ paddingLeft: "20px", margin: "0" }}>
            <li
              style={{
                marginBottom: "8px",
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            >
              <strong>Weekly insights</strong> on lead generation and marketing
              automation
            </li>
            <li
              style={{
                marginBottom: "8px",
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            >
              <strong>Exclusive case studies</strong> from successful client
              campaigns
            </li>
            <li
              style={{
                marginBottom: "8px",
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            >
              <strong>Business growth strategies</strong> for high-ticket
              services
            </li>
            <li
              style={{
                marginBottom: "8px",
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            >
              <strong>Early access</strong> to new tools and resources
            </li>
          </ul>
        </div>

        <p
          style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "30px" }}
        >
          Ready to take your business to the next level? Book a discovery call
          with our team to discuss your specific marketing needs.
        </p>

        <div style={{ textAlign: "center" as const, marginBottom: "30px" }}>
          <a
            href="https://calendly.com/musemind/30min"
            style={{
              display: "inline-block",
              backgroundColor: "#4F8EDB",
              color: "#ffffff",
              padding: "12px 24px",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              marginRight: "12px",
            }}
          >
            Book a Discovery Call
          </a>
          <a
            href="https://socialfunnel.agency/blog"
            style={{
              display: "inline-block",
              backgroundColor: "#D65A31",
              color: "#ffffff",
              padding: "12px 24px",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Read Our Blog
          </a>
        </div>

        <div
          style={{
            backgroundColor: "#FFF3E0",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
            border: "1px solid #D65A31",
          }}
        >
          <h3
            style={{
              fontFamily: '"Times New Roman", serif',
              fontSize: "18px",
              fontWeight: "bold",
              color: "#D65A31",
              marginBottom: "12px",
            }}
          >
            🔥 Get Started Today
          </h3>
          <p style={{ fontSize: "14px", margin: "0 0 12px 0" }}>
            Don&apos;t wait! The best time to start building your predictable
            client acquisition system is now. Every day you delay is potential
            revenue lost.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "30px 20px",
          textAlign: "center" as const,
          borderTop: "1px solid #e9ecef",
        }}
      >
        <p style={{ fontSize: "14px", color: "#6c757d", margin: "0 0 12px 0" }}>
          <strong>Social Funnel Agency</strong>
          <br />
          Cape Chestnut, Nanyuki | P.O. Box 1215 - 10400, Kenya
        </p>
        <p style={{ fontSize: "14px", color: "#6c757d", margin: "0 0 12px 0" }}>
          📧 info@socialfunnel.agency | 📞 +254 721 634 183
        </p>
        <p style={{ fontSize: "12px", color: "#6c757d", margin: "0 0 12px 0" }}>
          You&apos;re receiving this because you subscribed to our newsletter.
        </p>
        <p style={{ fontSize: "12px", color: "#6c757d", margin: "0" }}>
          <a
            href="{{{RESEND_UNSUBSCRIBE_URL}}}"
            style={{ color: "#6c757d", textDecoration: "underline" }}
          >
            Unsubscribe
          </a>{" "}
          |{" "}
          <a
            href="/api/newsletter/preferences?email={email}"
            style={{ color: "#6c757d", textDecoration: "underline" }}
          >
            Update Preferences
          </a>
        </p>
      </div>
    </div>
  );
}
