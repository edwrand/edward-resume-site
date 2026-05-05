"use client";
import { useState } from "react";
import React from "react";
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

  const renderDescription = () => {
    const lines = description.split('\n').filter(l => l.trim() !== '');
    const elements: React.ReactNode[] = [];
    let bulletBuffer: string[] = [];

    const flushBullets = (key: number) => {
      if (bulletBuffer.length === 0) return;
      elements.push(
        <ul key={`ul-${key}`} className="description-bullets">
          {bulletBuffer.map((b, i) => <li key={i}>{b.replace(/^•\s*/, '')}</li>)}
        </ul>
      );
      bulletBuffer = [];
    };

    lines.forEach((line, i) => {
      if (line.trim().startsWith('•')) {
        bulletBuffer.push(line);
      } else {
        flushBullets(i);
        elements.push(<p key={i} className="description">{line}</p>);
      }
    });
    flushBullets(lines.length);

    return elements;
  };

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
          {renderDescription()}
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
            src="/new_profile_pic.png"
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
            logo="/tabbed.png"
            alt="Tabbed Logo"
            title="Software Engineer, Tabbed Inc"
            dates="October 2025 - May 2026"
            description={`Built and maintained production TypeScript services in a Node.js API and React Native mobile application.\n• Refactored legacy implementations into clean, standardized architectures aligned with modern TypeScript best practices.`}
          />

          <ExperienceEntry
            logo="/lifeskribe.png"
            alt="Lifeskribe Logo"
            title="Software Engineer, Lifeskribe"
            dates="May 2025 - September 2025"
            description={`Full Stack .NET 6 C# implementation of Stripe and Plaid for a financial budgeting web application.\n• Supported 50+ users with 99% uptime\n• Designed data models, SPROCs, API services, frontend UIs, error handling, and audit tracing in Azure SQL and C#`}
          />

          <ExperienceEntry
            logo="/datagift.jpg"
            alt="DataGift Logo"
            title="Software Engineer, DataGift"
            dates="October 2024 - April 2025"
            description={`Architected and implemented a full stack feedback marketplace SaaS platform.\n• Built a scalable backend using Flask Python routes serving HTML, CSS, and ReactJS pages\n• Designed database models, RLDB star schema, character enforcements, security and fraud features using StripeJS, Google Auth, and proprietary workflow features\n• Built admin superuser tooling for dispute resolution and fraud handling\n• Deployed live to several hundred users`}
          />

          <ExperienceEntry
            logo="/borrowworks.jpg"
            alt="BorrowWorks Logo"
            title="Data Engineer, BorrowWorks"
            dates="August 2023 - October 2024"
            description={`Data modeling, architecture, ETL pipelines, reporting, monitoring, and testing for a 1,000+ model Snowflake data warehouse with 100+ billion records.\n• Led efforts to reduce DBT model replication build time by ~25% using incremental and ephemeral strategies\n• Increased model testing and alerting coverage by ~60% using Slack, DBT, and Snowflake APIs\n• Upgraded DBT core versions and SQL syntax, enabling open source packages for greater data auditability across all 1,000+ models\n• Built three-dimensional models for new lending product launches\n• Built a cloud cost reporting system using Snowflake SQL for visibility into 3rd party role costs\nTechnologies: Python, Advanced SQL, Jinja SQL, Looker, Snowflake, DBT, Airflow | Workflow: Agile, Jira, Confluence, Git CI/CD`}
          />

          <ExperienceEntry
            logo="/longfisolutions.jpg"
            alt="LongFi Solutions Logo"
            title="Software Engineer Intern, LongFi Solutions"
            dates="May 2022 - July 2022"
            description={`Built ETL scripts with Python to process Solana and Pollen blockchain data for crypto miner placement optimization and troubleshooting.\nTechnologies: Python (Flask, Plotly, Matplotlib, Pandas, Solana APIs), GitHub, PGAdmin, SQLAlchemy.`}
          />

          <ExperienceEntry
            logo="/devridge.jpg"
            alt="Devridge Technology Logo"
            title="Co-Founder &amp; Technical Project Manager, Devridge Technology"
            dates="November 2021 - May 2022"
            description={`Worked with 8 clients on Ethereum smart contract development using Solidity and JavaScript. Managed technical documentation, client meetings, product management, and workflow structure. Earned 14 contracts on Upwork.\nTechnologies: JavaScript, Solidity, Python, GitHub, Jira.`}
          />

          <ExperienceEntry
            logo="/f.png"
            alt="FMedia Network Logo"
            title="Co-Founder, FMedia Network"
            dates="January 2018 - January 2021"
            description="Built and managed social media networks with 2.5+ million followers and 1.5 million weekly impressions. Monetized via advertising and partnerships, and successfully exited through a sale."
          />
        </section>

        {/* Education Section */}
        <section id="education">
          <h2>Education</h2>
          <div className="education-entry">
            <img
              src="/georgiatech.png"
              alt="Georgia Tech Logo"
              className="logo-img"
            />
            <div>
              <h3>Georgia Institute of Technology</h3>
              <p>
                Master of Science in Computer Science<br />
                In progress — expected 2029
              </p>
            </div>
          </div>
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
