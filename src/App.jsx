import React, { useState } from "react";

import imgFrame114 from "./assets/images/Frame 114.png";
import imgFrame75 from "./assets/images/Frame 75.png";
import imgFrame90 from "./assets/images/Frame 90.png";
import imgFrame99 from "./assets/images/Frame 99.png";
import imgFrame54 from "./assets/images/Frame 54.png";
import imgVector from "./assets/images/Vector.png";
import imgVector1 from "./assets/images/Vector-1.png";
import imgVector2 from "./assets/images/Vector-2.png";
import imgVector3 from "./assets/images/Vector-3.png";
import imgIphonePro from "./assets/images/iPhone 13 Pro.png";
import imgIphonePro1 from "./assets/images/iPhone 13 Pro-1.png";
import imgIphonePro2 from "./assets/images/iPhone 13 Pro-2.png";

const App = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="page-wrapper bg-dark text-white">
      {/* Hero Section */}
      <header className="hero-section container-xxl">
        <nav className="navbar navbar-expand-lg navbar-dark py-3 top-nav">
          <a className="navbar-brand" href="#">
            N7
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            aria-controls="mainNav"
            aria-expanded={navOpen}
            aria-label="Toggle navigation"
            onClick={() => setNavOpen((open) => !open)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${navOpen ? "show" : ""}`}
            id="mainNav"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-4 align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Solutions <span className="nav-chevron">▾</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resources <span className="nav-chevron">▾</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
            </ul>
            <button className="btn btn-cta ms-lg-4">
              Request demo
            </button>
          </div>
        </nav>
        <br />
        <div className="row align-items-center gy-5 hero-content">
          <div className="col-lg-6">
           
            <h1 className="display-4 fw-semibold hero-title mb-3">
              The new foundation of modern banking
            </h1>
            <p className="hero-subtitle mb-4">
              We drive innovation and growth,provide seamless customer experience and operation excellence
            </p>
            <div className="d-flex flex-wrap gap-3 mb-4">
              <button className="btn btn-cta">
                Request demo
              </button>
              <button className="btn btn-outline-light rounded-pill px-4 py-2">
                CONTACT US
              </button>
            </div>
            
          </div>

          <div className="col-lg-6">
            <div className="hero-card-wrapper">
              <img
                src={imgFrame114}
                alt="Banking dashboard on laptop"
                className="img-fluid hero-main-image"
              />
             
              
            </div>
          </div>
        </div>
      </header>

      {/* Trusted by strip (Frame 75) */}
      <section className="trusted-strip container-xxl">
        <img
          src={imgFrame75}
          alt="Trusted by client logos"
          className="trusted-strip-image"
        />
      </section>

      {/* Solutions Overview Section (under hero) */}
      <section id="solutions" className="section container-xxl solutions-section">
        <div className="row gy-5">
          <div className="col-lg-4">
            <h2 className="solutions-heading mb-3">
              All of our solutions are tailor‑made to your needs
            </h2>
            
            <button className="btn btn-cta solutions-cta">
              Request demo
            </button>
          </div>

          <div className="col-lg-8">
            <div className="solutions-grid">
              <article className="solution-card">
                <div className="solution-icon">
                  <img src={imgVector} alt="Core Banking logo" />
                </div>
                <h3 className="solution-title">Core Banking CB7</h3>
                <p className="solution-copy">
                  CB7 helps your finance institution improve the client experience, automate and optimize procedures, 
                  simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.
                </p>
                <button className="solution-link">
                  Learn more <span>→</span>
                </button>
              </article>

             

              <article className="solution-card">
                <div className="solution-icon">
                  <img src={imgVector2} alt="Open Banking logo" />
                </div>
                <h3 className="solution-title">Open Banking</h3>
                <p className="solution-copy">
                 Our API banking helps you to gain actionable insights, streamline customer onboarding, KYC, and payment initiation,
                 offer powerful budgeting tools, and enhance credit scoring.
                </p>
                <button className="solution-link">
                  Learn more <span>→</span>
                </button>
              </article>

              <article className="solution-card">
                <div className="solution-icon">
                  <img src={imgVector3} alt="Loan Management System logo" />
                </div>
                <h3 className="solution-title">Loan Management System</h3>
                <p className="solution-copy">
                N7 brings full capabilities across strategy, human-centred design,
                operations, engineering and data science to create and deliver disruptive innovation. 
                Our approach to building digital banks is specifically designed to help clients
                </p>
                <button className="solution-link">
                  Learn more <span>→</span>
                </button>
              </article>

              <article className="solution-card">
                <div className="solution-icon">
                  <img src={imgVector1} alt="Digital Banking logo" />
                </div>
                <h3 className="solution-title">Digital Banking N7</h3>
                <p className="solution-copy">
                N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. 
                Our approach to building digital banks is specifically designed to help clients
                </p>
                <button className="solution-link">
                  Learn more <span>→</span>
                </button>
              </article>

              <article className="solution-card">
                <div className="solution-icon">
                  <img src={imgVector3} alt="Loan Origination System logo" />
                </div>
                <h3 className="solution-title">Loan Origination System</h3>
                <p className="solution-copy">
                N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients
                </p>
                <button className="solution-link">
                  Learn more <span>→</span>
                </button>
              </article>

              
            </div>
          </div>
        </div>
      </section>

      {/* Core Banking CB7 Highlight Section (under solutions) */}
      <section className="section container-xxl core-banking-section">
        <div className="core-bg-letter">CB7</div>
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6 position-relative">
            <div className="core-hero">
              <h2 className="section-title mb-3">
                A complete cloud‑based core banking.
              </h2>
              <p className="section-text mb-4">
                Faster time to market with our cloud-based core banking services
              </p>
              <div className="d-flex flex-wrap gap-3 align-items-center">
                <button className="btn btn-cta">
                  Request demo
                </button>
                <button className="learn-more-link" type="button">
                  <span className="learn-more-text">Learn more</span>
                  <span className="learn-more-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="core-image-wrap">
              <img
                src={imgFrame90}
                alt="Cloud-based core banking dashboard"
                className="img-fluid core-banking-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core banking system benefits section (replaces platform) */}
      <section id="platform" className="section container-xxl core-benefits-section">
        <div className="row gy-5 align-items-center flex-lg-row">
          <div className="col-lg-6">
            <div className="core-benefits-image-wrap">
              <img
                src={imgFrame99}
                alt="Core banking dashboard on laptop"
                className="img-fluid core-benefits-image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="core-benefits-title mb-3">
              Run a more efficient, flexible, and digitally connected core
              banking system
            </h2>
            <p className="core-benefits-subtitle mb-3">What you will get:</p>
            <div className="row">
              <div className="col-sm-6">
                <ul className="benefits-list">
                  <li>Customer-On Boarding</li>
                  <li>Managing deposits and withdrawals</li>
                  <li>Transaction management</li>
                  <li>Interest calculation</li>
                  <li>
                    Payments processing (cash, cheques, mandates, NEFT, RTGS etc)
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 mt-3 mt-sm-0">
                <ul className="benefits-list">
                  <li>CRM activities</li>
                  <li>Configuring new banking products</li>
                  <li>Loan disbursal and loan management</li>
                  <li>
                    Establishing criteria for minimum balances, interest rates,
                    and withdrawal limits
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paperless CTA section */}
      <section className="section container-xxl paperless-section">
        <div className="paperless-card">
          <div className="paperless-bg-letter">CB7</div>
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <h2 className="paperless-title">
                Take the full advantage of going paper‑less now.
              </h2>
              <p className="paperless-subtitle mb-0">
                CB7 helps your financial institution improve the client
                experience, automate and optimize procedures, simplify banking
                operations.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="d-flex flex-wrap justify-content-lg-end gap-3 mt-3 mt-lg-0">
                <button className="btn btn-outline-light paperless-contact">
                  Contact us
                </button>
                <button className="btn btn-cta">
                  Request demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Running frame + digital banking section */}
<section className="n7-digital-banking">
  {/* Running frame strip */}
  <div className="n7-running-frame">
    <div className="n7-running-frame-inner">
      {Array.from({ length: 2 }).map((_, index) => (
        <span className="n7-running-frame-item" key={index}>
          <span className="strong">N7</span>
          <span className="star">✴</span>
          <span className="strong">Say</span>
          <span className="emoji">👋</span>
          <span className="strong">to the new way of banking</span>
          <span className="star">✴</span>
          <span className="strong strong-cb7">CB7</span>
          <span>Say</span>
        </span>
      ))}
    </div>
  </div>

  {/* Top hero row: left copy, center phone, right bullets */}
  <div className="n7-digital-banking-inner">
    <div className="n7-digital-banking-left">
      <h2 className="n7-heading">Digital banking out-of-the-box</h2>
      <p className="n7-body">
        N7 helps your financial institution improve the client experience,
        automate and optimize procedures.
      </p>
      <div className="n7-hero-actions">
        <button className="btn btn-cta">Request demo</button>
        <button className="n7-hero-link" type="button">
          Learn more <span>→</span>
        </button>
      </div>
    </div>

    <div className="n7-digital-banking-phone">
      <img
        src={imgIphonePro}
        alt="Digital banking main app screen"
        className="n7-hero-phone"
      />
    </div>

    <div className="n7-digital-banking-right">
      <h3 className="n7-hero-side-title">
        Fully compliant with regulatory requirement
      </h3>
      <p className="n7-hero-side-body">
        The governance of risk management with regulations is achieved by our
        risk management framework that is fully integrated to work with digital
        bank operational-risk protocols and procedures.
      </p>
      <ul className="n7-detail-list">
        <li>Pre-integrated security system</li>
        <li>Fully compliant with regulatory requirement</li>
        <li>Digitally connected core</li>
      </ul>
    </div>
  </div>

  {/* Detail rows matching the provided design (below hero) */}
  <div className="n7-digital-banking-details">
    {/* Row 1 – No legacy IT systems */}
  <div className="n7-detail-row n7-detail-row--compact">
      <div className="n7-detail-text">
        <h3 className="n7-hero-side-title">No legacy IT systems</h3>
        <p className="n7-hero-side-body">
          Our digital banking solution and multilayered approach help financial
          institutions take advantage of digital transformation while ensuring
          customer trust and regulatory compliance.
        </p>
        <ul className="n7-detail-list">
          <li>Adaptive API monetisation</li>
          <li>Ambient user experience</li>
          <li>Cloud-native with lower TCO</li>
        </ul>
      </div>
      <div className="n7-detail-image">
        <img
          src={imgIphonePro1}
          alt="Analytics app screen"
          className="n7-detail-phone"
        />
      </div>
    </div>

    {/* Row 2 – No traditional branches */}
    <div className="n7-detail-row">
      <div className="n7-detail-image">
        <img
          src={imgIphonePro2}
          alt="Profile settings app screen"
          className="n7-detail-phone"
        />
      </div>
      <div className="n7-detail-text">
        <h3>No traditional branches</h3>
        <p>
          Our digital banking out-of-the-box helps you accelerate innovation
          while reducing risk and optimising operational costs for a seamless
          branchless experience.
        </p><br></br>
        <ul className="n7-detail-list">
          <li>Branchless &amp; paperless banking</li>
          <li>Digital transformation capability</li>
          <li>Optimised, adoptable and scalable</li>
        </ul>
      </div>
    </div>
  </div>

   {/* Paperless CTA section */}
   <section className="section container-xxl paperless-section">
        <div className="paperless-card">
          <div className="paperless-bg-letter">CB7</div>
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <h2 className="paperless-title">
                Take the full advantage of going paper‑less now.
              </h2>
              <p className="paperless-subtitle mb-0">
                CB7 helps your financial institution improve the client
                experience, automate and optimize procedures, simplify banking
                operations.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="d-flex flex-wrap justify-content-lg-end gap-3 mt-3 mt-lg-0">
                <button className="btn btn-outline-light paperless-contact">
                  Contact us
                </button>
                <button className="btn btn-cta">
                  Request demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
</section>



      

      {/* Insights section */}
      <section className="section insights-section">
        <div className="container-xxl insights-layout">
          <div className="insights-left">
            <h2 className="insights-heading">
              Get yourself up-to-speed on all the things happening in fintech
            </h2>
            <button className="insights-cta" type="button">
              Insights
            </button>
          </div>

          <div className="insights-right">
            <article className="insight-card insight-card-large">
              <div className="insight-card-media">
                <img
                  src={imgFrame54}
                  alt="Insight logo grid"
                />
              </div>
              <div className="insight-card-content">
                <p className="insight-kicker">Getting started</p>
                <h3 className="insight-title">
                  How to transition from a traditional to a digital bank
                </h3>
                <p className="insight-meta">David Grohl · 17/08/24</p>
                <button className="insight-secondary-btn" type="button">
                  Read more
                </button>
              </div>
            </article>

            <div className="insight-card-row">
              <article className="insight-card">
                <p className="insight-kicker">Getting started</p>
                <h3 className="insight-title">
                  How to transition from a traditional to a digital bank
                </h3>
                <p className="insight-meta">David Grohl · 17/08/24</p>
                <button className="insight-secondary-btn" type="button">
                  Read more
                </button>
              </article>

              <article className="insight-card">
                <p className="insight-kicker">Getting started</p>
                <h3 className="insight-title">
                  How to transition from a traditional to a digital bank
                </h3>
                <p className="insight-meta">David Grohl · 17/08/24</p>
                <button className="insight-secondary-btn" type="button">
                  Read more
                </button>
              </article>
            </div>

            <div className="insights-footer-link">
              <button className="insights-view-all" type="button">
                Read all insights <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies carousel section */}
      <section className="section case-studies-section">
        <div className="container-xxl text-center mb-4">
          <h2 className="case-studies-heading">Our Case Studies</h2>
        </div>
        <div className="container-xxl case-studies-slider">
          <div className="case-card case-card-main">
            <div className="case-card-media">
              <img src={imgFrame54} alt="Client brand grid" />
            </div>
            <div className="case-card-content">
              <p className="case-kicker">Getting started</p>
              <h3 className="case-title">
                How we help brand reach out to more people
              </h3>
              <p className="case-client">⚡ Zoomerr</p>
              <button className="insight-secondary-btn" type="button">
                Read more
              </button>
            </div>
          </div>

          <div className="case-slider-controls">
            <button className="case-arrow" type="button">
              ←
            </button>
            <div className="case-dots">
              <span className="dot active" />
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <button className="case-arrow" type="button">
              →
            </button>
          </div>

          <div className="case-view-all-row">
            <button className="insights-view-all" type="button">
              View all <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Final footer section with N7 mark and columns */}
      <footer className="footer extended-footer">
        <div className="container-xxl footer-top">
          <div className="footer-top-row">
            <div>
              <h2 className="footer-hero-title">
                Take the full advantage of going paper-less now.
              </h2>
              <p className="footer-hero-subtitle">
                CB7 helps your financial institution improve the client
                experience, automate and optimize procedures, simplify banking
                operations.
              </p>
            </div>
            <div className="footer-hero-actions">
              <button className="btn btn-outline-light paperless-contact">
                Contact us
              </button>
              <button className="btn btn-cta">Request demo</button>
            </div>
          </div>

          <div className="footer-main-row">
            <div className="footer-n7-mark">N7</div>

            <div className="footer-columns">
              <div className="footer-column">
                <h4>London</h4>
                <p>
                  Linktia Infosystems Ltd – CB7,
                  <br />
                  26 Main Road Sundridge TN14 6EP,
                  <br />
                  England, United Kingdom.
                </p>
              </div>

              <div className="footer-column">
                <h4>Dubai</h4>
                <p>
                  Linktia Infosystems Ltd – CB7,
                  <br />
                  Jumeirah Business Center 5,
                  <br />
                  Cluster W, Jumeirah Lakes Towers,
                  <br />
                  Dubai, United Arab Emirates.
                </p>
              </div>

              <div className="footer-column">
                <h4>London</h4>
                <p>
                  Linktia Infosystems Ltd – CB7,
                  <br />
                  Nirmal, Anand Nagar,
                  <br />
                  Suncity Road, Pune,
                  <br />
                  Maharashtra, 411041, India.
                </p>
              </div>

              <div className="footer-column footer-links-column">
                <div>
                  <h4>Solutions</h4>
                  <ul>
                    <li>Core&nbsp;Banking&nbsp;CB7</li>
                    <li>Digital&nbsp;Banking&nbsp;N7</li>
                    <li>Open&nbsp;Banking</li>
                    <li>Loan&nbsp;Origination&nbsp;System</li>
                    <li>Loan&nbsp;Management&nbsp;System</li>
                  </ul>
                </div>
                <div>
                  <h4>
                    N7&nbsp;Banking
                  </h4>
                  <ul>
                    <li>About&nbsp;us</li>
                    <li>Solutions</li>
                    <li>Contact</li>
                    <li>Company</li>
                    <li>Careers</li>
                    <li>Insights</li>
                  </ul>
                </div>
                <div>
                  <h4>Our&nbsp;socials</h4>
                  <ul>
                    <li>LinkedIn</li>
                    <li>X</li>
                  </ul>
                </div>
              </div>
            </div>
           
          </div>

          <div className="footer-bottom-row">
            <span className="copyright-text">
              Copyright © 2022 by Linktia Infosystems Limited — CB7 and N7 as
              Commercial Brand — Registered under the Companies Act 2006 in
              England and Wales | Number of Incorporation 13100092
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

