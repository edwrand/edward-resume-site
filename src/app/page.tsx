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
      <Navbar />
      <main className="container">
        {/* Hero Section */}
        <header id="home" className="hero">
          <div className="hero-text">
            <h1>
              Hi, I'm Edward <span className="wave-emoji">👋</span>
            </h1>
            <p className="subtitle">
              Data Engineer, I love building things!
            </p>
          </div>
          <img
            src="https://via.placeholder.com/150"
            alt="Edward Randall Profile Picture"
            className="hero-img"
          />
        </header>

        {/* About Section */}
        <section id="about">
          <h2>About</h2>
          <p>
            I am a Data Engineer with a passion for transforming raw data into actionable insights.
            I specialize in building scalable data solutions and full‑stack applications that drive business impact.
            Whether architecting backend systems or designing efficient data pipelines, I thrive on solving challenging problems.
          </p>
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
            description="Led data modeling, architecture, ETL pipelines, and reporting for a Snowflake data warehouse with over 100 billion records. Reduced DBT model replication build time by ~25% and increased testing/alerting coverage by ~60%. Upgraded DBT core versions and SQL syntax, built three-dimensional models for new lending products, and created a cloud cost reporting system. Technologies: Python, Advanced SQL, Jinja SQL, Looker, Snowflake, DBT, Airflow."
          />

          <ExperienceEntry
            logo="/longfisolutions.jpg"
            alt="LongFi Solutions Logo"
            title="Software Engineer Intern, LongFi Solutions"
            dates="May 2022 - July 2022"
            description="Built ETL scripts with Python to process Solana and Pollen blockchain data for crypto miner placement optimization. Technologies: Python (Flask, Plotly, Matplotlib, Pandas, Solana APIs), GitHub, PGAdmin, SQLAlchemy."
          />

          <ExperienceEntry
            logo="https://via.placeholder.com/50"
            alt="Devridge Technology Logo"
            title="Co-Founder & Technical Project Manager, Devridge Technology Software Agency"
            dates="November 2021 - May 2022"
            description="Managed Ethereum smart contract development with Solidity and JavaScript for four clients. Oversaw technical documentation, client meetings, product management, and workflow structure. Earned 14 contracts on Upwork. Technologies/Tools: JavaScript, Solidity, Python, GitHub, Jira."
          />

          <ExperienceEntry
            logo="https://via.placeholder.com/50"
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
              src="https://via.placeholder.com/50"
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
          <h2>Computer Skills</h2>
          <div className="skills-entry">
            <img
              src="https://via.placeholder.com/50"
              alt="Skills Logo"
              className="logo-img"
            />
            <div>
              <p>
                <strong>Programming Languages:</strong> Python, JavaScript, basic Java<br />
                <strong>Other Skills:</strong> Advanced SQL, Jinja SQL, HTML, CSS<br />
                <strong>Data Visualizers:</strong> Looker, PowerBI, Tableau, SAP, Python (Matplotlib, Dash, Plotly)<br />
                <strong>Data Concepts:</strong> Data Modeling, Data Architecture, ETL/ELT Procedures, Monitoring and Reporting Analytics
              </p>
            </div>
          </div>
        </section>

        {/* My Projects Section */}
        <section id="projects">
          <h2>My Projects</h2>
          <p>
            Check out my latest work. I’ve worked on a variety of projects—from simple websites to complex web applications.
            (Project details coming soon.)
          </p>
        </section>


        <footer>
          <p>&copy; 2025 Edward Randall. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
