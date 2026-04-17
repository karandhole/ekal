import { useEffect } from "react";
import Breadcrumbs from "../../common/breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";

const TermsCondition = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="main-wrapper">
      <Breadcrumbs title="Terms & Conditions" subtitle="Pages" />

      <div className="privacy-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="terms-policy">

                <p data-aos="fade-down">
                  Welcome to Ekalo Drive. By accessing or using our website
                  https://ekalodrive.com, you agree to comply with and be bound
                  by these Terms & Conditions. If you do not agree with any part
                  of these terms, please do not use our services.
                </p>

                <p data-aos="fade-down">
                  Ekalo Drive is a digital platform that connects users with
                  independent car rental service providers. We do not own or
                  operate vehicles directly. Our role is limited to facilitating
                  bookings and communication between users and service providers.
                </p>

                <h5 data-aos="fade-down">User Eligibility</h5>
                <p data-aos="fade-down">
                  To use our services, you must be at least 18 years old and
                  capable of entering into a legally binding agreement. By using
                  Ekalo Drive, you confirm that the information you provide is
                  accurate and complete.
                </p>

                <h5 data-aos="fade-down">Account & Authentication</h5>
                <p data-aos="fade-down">
                  Users are authenticated through a One-Time Password (OTP)
                  sent via WhatsApp and/or SMS to the registered mobile number.
                  You are responsible for maintaining the confidentiality of
                  your login credentials and for all activities performed under
                  your account.
                </p>

                <ul data-aos="fade-down">
                  <li>
                    <span><i className="fa-solid fa-circle-check"></i></span>
                    OTPs are used strictly for authentication and security
                  </li>
                  <li>
                    <span><i className="fa-solid fa-circle-check"></i></span>
                    Promotional or marketing messages are not sent via OTP
                  </li>
                  <li>
                    <span><i className="fa-solid fa-circle-check"></i></span>
                    OTPs are time-based and expire automatically
                  </li>
                </ul>

                <h5 data-aos="fade-down">Use of Platform</h5>
                <p data-aos="fade-down">
                  You agree to use Ekalo Drive only for lawful purposes. Any
                  misuse, fraudulent activity, or attempt to disrupt the
                  platform may result in suspension or termination of access
                  without prior notice.
                </p>

                <h5 data-aos="fade-down">Bookings & Payments</h5>
                <p data-aos="fade-down">
                  All bookings made through Ekalo Drive are subject to the terms
                  set by the respective car rental service providers. Ekalo Drive
                  is not responsible for vehicle availability, pricing changes,
                  cancellations, or disputes between users and service providers.
                </p>

                <h5 data-aos="fade-down">Limitation of Liability</h5>
                <p data-aos="fade-down">
                  Ekalo Drive shall not be held liable for any direct, indirect,
                  incidental, or consequential damages arising from the use of
                  the platform or services provided by third-party vendors.
                </p>

                <h5 data-aos="fade-down">Data Privacy</h5>
                <p data-aos="fade-down">
                  Your use of the platform is also governed by our Privacy
                  Policy, which explains how we collect, use, and protect your
                  personal information. By using Ekalo Drive, you consent to
                  these data practices.
                </p>

                <h5 data-aos="fade-down">Termination</h5>
                <p data-aos="fade-down">
                  We reserve the right to suspend or terminate your access to
                  Ekalo Drive at any time if you violate these Terms &
                  Conditions or misuse the platform.
                </p>

                <h5 data-aos="fade-down">Changes to Terms</h5>
                <p data-aos="fade-down">
                  Ekalo Drive may update these Terms & Conditions from time to
                  time. Any changes will be posted on this page, and continued
                  use of the platform indicates acceptance of the updated terms.
                </p>

                <p className="mb-0" data-aos="fade-down">
                  If you have any questions regarding these Terms & Conditions,
                  please contact us through the support options available on
                  https://ekalodrive.com.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;