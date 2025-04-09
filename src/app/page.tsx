"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";

// A component for a single experience entry with a collapsible description.
function ExperienceEntry({ logo, alt, title, dates, description }: {
  logo: string;
  alt: string;
  title: string;
  dates: string;
  description: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="experience-entry">
      <img src={logo} alt={alt} className="logo-img" />
      <div>
        <div className="job-header">
          <h3 className="job-title">
            {title}
            <button
              className="collapse-btn"
              onClick={() => setExpanded(!expanded)}
              aria-label={expanded ? "Collapse description" : "Expand description"}
            >
              {expanded ? "▲" : "▼"}
            </button>
          </h3>
          <p className="dates">{dates}</p>
        </div>
        <div className={`description-container ${expanded ? "expanded" : ""}`}>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main className="container">
        {/* Hero Section */}
        <header id="home" className="hero">
          <div className="hero-text">
            <h1>
              Hi, I&apos;m Edward <span className="wave-emoji">👋</span>
            </h1>
          </div>
          <img
            src="/mypicture.jpg"
            alt="Edward Randall Profile Picture"
            className="hero-img"
          />
        </header>

        {/* Navbar placed immediately under the hero section */}
        <Navbar />

        {/* About Section */}
        <section id="about">
          <h2>About</h2>
          <p>
            Hi welcome to my resume/personal page. I like to code, read, and build stuff. Check out my links to connect with me or see my work.</p>
        </section>

        {/* Work Experience Section */}
        <section id="experience">
          <h2>Work Experience</h2>

          <ExperienceEntry
            logo="/datagift.jpg"
            alt="DataGift Logo"
            title="Solo Full Stack Software Engineer, DataGift"
            dates="October 2024 - Present"
            description="Architected and implemented a full stack feedback marketplace SaaS platform for my small business venture. Built a scalable backend using Flask to serve HTML, CSS, and ReactJS pages. Designed everything from scratch—including database models, an RLDB star schema, security and fraud features using StripeJS, Google Auth, and proprietary workflows. Served as the admin superuser for dispute resolution. The live application serves several hundred users."
          />

          <ExperienceEntry
            logo="/borrowworks.jpg"
            alt="BorrowWorks Logo"
            title="Data Engineer, BorrowWorks"
            dates="August 2023 - October 2024"
            description="Data modeling, architecture, ETL pipelines, and reporting for a Snowflake data warehouse with over 100 billion records. Reduced DBT model replication build time by ~25% and increased testing/alerting coverage by ~60%. Upgraded DBT core versions and SQL syntax, built three-dimensional models for new lending products, and created a cloud cost reporting system. Technologies: Python, Advanced SQL, Jinja SQL, Looker, Snowflake, DBT, Airflow."
          />

          <ExperienceEntry
            logo="/longfisolutions.jpg"
            alt="LongFi Solutions Logo"
            title="Software Engineer Intern, LongFi Solutions"
            dates="May 2022 - July 2022"
            description="Built ETL scripts with Python to process Solana and Pollen blockchain data for crypto miner placement optimization. Technologies: Python (Flask, Plotly, Matplotlib, Pandas, Solana APIs), GitHub, PGAdmin, SQLAlchemy."
          />

          <ExperienceEntry
            logo="/devridge.jpg"
            alt="Devridge Technology Logo"
            title="Co-Founder, Devridge Technology Software Agency"
            dates="November 2021 - May 2022"
            description="Managed Ethereum smart contract development with Solidity and JavaScript for more than eight clients. Oversaw technical documentation, client meetings, product management, and workflow structure. Earned 14 contracts on Upwork. Technologies/Tools: JavaScript, Solidity, Python, GitHub, Jira."
          />

          <ExperienceEntry
            logo="/f.png"
            alt="FMedia Network Logo"
            title="Co-Founder, FMedia Network"
            dates="January 2018 - January 2021"
            description="Built and managed social media networks with 2.5+ million followers and 15+ million weekly impressions. Monetized via advertising and partnerships, earning ~$5,000 MRR, and successfully exited through a sale."
          />
        </section>

        {/* Education Section */}
        <section id="education">
          <h2>Education</h2>
          <div className="education-entry">
            <img
              src="/tcu.jpg"
              alt="TCU Logo"
              className="logo-img"
            />
            <div>
              <h3>Texas Christian University</h3>
              <p>
                Bachelor of Science in Business Information Systems<br />
                FinTech Certificate (Blockchain with Python, Machine Learning with Python, and AI with R)<br />
                Founder and Social Chair of TCU Blockchain Club (2021)<br />
                Independent senior study of JavaScript, HTML, and CSS through the Odin Project
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>Python</li>
            <li>JavaScript</li>
            <li>Advanced SQL</li>
            <li>Jinja SQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Looker</li>
            <li>PowerBI</li>
            <li>Tableau</li>
            <li>SAP</li>
            <li>Matplotlib</li>
            <li>Plotly</li>
            <li>Data Modeling</li>
            <li>Data Architecture</li>
            <li>ETL/ELT</li>
            <li>PostgresSQL</li>
            <li>Cybersecurity</li>
          </ul>
        </section>

        <footer>
          <p>&copy; 2025 Edward Randall</p>
        </footer>
      </main>
    </>
  );
}
