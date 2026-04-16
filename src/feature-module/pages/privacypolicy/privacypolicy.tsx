import { useEffect } from "react";
import Breadcrumbs from "../../common/breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const containerStyle = {
    backgroundColor: "#f9fafc",
    padding: "60px 20px",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
    color: "#555",
    lineHeight: "1.8",
  };

  const headingStyle = {
    marginTop: "30px",
    marginBottom: "12px",
    fontSize: "20px",
    color: "#222",
  };

  const listStyle = {
    paddingLeft: "20px",
    marginBottom: "20px",
  };

  const listItemStyle = {
    marginBottom: "10px",
    fontSize: "16px",
    display: "flex",
    gap: "10px",
    alignItems: "flex-start",
  };

  const iconStyle = {
    color: "#28a745",
    marginTop: "4px",
  };

  const paragraphStyle = {
    marginBottom: "14px",
    fontSize: "16px",
  };

  return (
    <div className="main-wrapper">
      <Breadcrumbs title="Privacy Policy" subtitle="Pages" />

      <div style={containerStyle}>
        <div className="terms-policy" style={cardStyle}>
          <p data-aos="fade-down" style={paragraphStyle}>
            Ekalo Drive ("we", "our", "us") operates the website
            <strong> ekalodrive.com </strong> as a digital platform that connects
            users with car rental service providers. This Privacy Policy explains
            how we collect, use, and protect user information when you use our
            platform.
          </p>

          <p data-aos="fade-down" style={paragraphStyle}>
            By accessing or using Ekalo Drive, you agree to the collection and
            use of information in accordance with this policy. We are committed
            to protecting your privacy and ensuring transparency in how your
            data is handled.
          </p>

          <h5 data-aos="fade-down" style={headingStyle}>
            Information We Collect
          </h5>
          <ul data-aos="fade-down" style={listStyle}>
            <li style={listItemStyle}>
              <i className="fa-solid fa-circle-check" style={iconStyle}></i>
              Mobile number for user authentication and account verification
            </li>
            <li style={listItemStyle}>
              <i className="fa-solid fa-circle-check" style={iconStyle}></i>
              Basic user details required to facilitate car rental services
            </li>
            <li style={listItemStyle}>
              <i className="fa-solid fa-circle-check" style={iconStyle}></i>
              Usage data such as pages visited and interactions for improving our
              platform
            </li>
          </ul>

          <h5 data-aos="fade-down" style={headingStyle}>
            OTP-Based Authentication
          </h5>
          <p data-aos="fade-down" style={paragraphStyle}>
            Ekalo Drive uses a One-Time Password (OTP) based login system for
            secure authentication. When you sign in or register, your mobile
            number is used to send an OTP via SMS to verify your identity.
          </p>

          <p data-aos="fade-down" style={paragraphStyle}>
            OTP messages are sent using a trusted third-party service provider
            (such as Twilio). Your phone number is used strictly for
            authentication and security purposes and is not used for promotional
            or marketing messages.
          </p>

          <h5 data-aos="fade-down" style={headingStyle}>
            Use of Information
          </h5>
          <ul data-aos="fade-down" style={listStyle}>
            <li style={listItemStyle}>
              <i className="fa-solid fa-circle-check" style={iconStyle}></i>
              To authenticate users securely using OTP
            </li>
            <li style={listItemStyle}>
              <i className="fa-solid fa-circle-check" style={iconStyle}></i>
              To enable car rental booking and related services
            </li>
            <li style={listItemStyle}>
              <i className="fa-solid fa-circle-check" style={iconStyle}></i>
              To improve platform performance and user experience
            </li>
          </ul>

          <h5 data-aos="fade-down" style={headingStyle}>
            Data Sharing
          </h5>
          <p data-aos="fade-down" style={paragraphStyle}>
            We do not sell, rent, or trade your personal information. Your data
            may only be shared with trusted service providers who assist us in
            operating the platform (such as SMS delivery for OTP
            authentication), and only to the extent necessary to provide the
            service.
          </p>

          <h5 data-aos="fade-down" style={headingStyle}>
            Data Security
          </h5>
          <p data-aos="fade-down" style={paragraphStyle}>
            We implement appropriate technical and organizational measures to
            protect your personal data against unauthorized access, alteration,
            disclosure, or destruction. OTPs are time-based and expire
            automatically for security.
          </p>

          <h5 data-aos="fade-down" style={headingStyle}>
            User Consent
          </h5>
          <p data-aos="fade-down" style={paragraphStyle}>
            By using Ekalo Drive and providing your mobile number, you consent to
            receive OTP messages for authentication purposes. You may stop using
            the service at any time if you do not agree with this policy.
          </p>

          <h5 data-aos="fade-down" style={headingStyle}>
            Changes to This Policy
          </h5>
          <p data-aos="fade-down" style={paragraphStyle}>
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page, and continued use of the platform indicates
            acceptance of the updated policy.
          </p>

          <p
            className="mb-0"
            data-aos="fade-down"
            style={{ ...paragraphStyle, marginBottom: 0, fontWeight: 500 }}
          >
            If you have any questions about this Privacy Policy, please contact
            us through the support options available on ekalodrive.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;