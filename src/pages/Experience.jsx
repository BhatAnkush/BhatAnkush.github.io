import { useState } from "react";
import assets from "../components/Assets";

const Experience = () => {
  const jobs = [
    {
      title: "Cloud Explorer-Technology",
      company: "Niveus Solutions part of NTT Data",
      location: "Mangaluru, Karnataka, India",
      employmentType: "Full-time",
      logo: assets.nivlogo,
      date: "May 2025 - Present",
      duration: "1 mo",
      skills: [
        "React.js",
        "Node.js",
        "Google Cloud Platform (GCP)",
        "Cascading Style Sheets (CSS)",
        "PostgreSQL",
        "Postman",
      ],
      description: [
        "Developed responsive UI components using React JS with Ant Design and PrimeReact libraries, ensuring consistent design patterns and optimal performance.",
        "Contributed to the development of library for multiple functions of a table component.",
        "Collaborated with cross-functional teams to gather requirements, debug issues, and implement front-end and back-end solutions aligned with needs of the project.",
      ],
    },
    {
      title: "Software Engineer-Intern",
      company: "Niveus Solutions part of NTT Data",
      location: "Mangaluru, Karnataka, India",
      employmentType: "Internship",
      logo: assets.nivlogo,
      date: "November 2024 - May 2025",
      duration: "6 mos",
      skills: [
        "React.js",
        "Node.js",
        "Google Cloud Platform (GCP)",
        "Cascading Style Sheets (CSS)",
        "PostgreSQL",
      ],
      description: [
        "Developed responsive UI components using React JS with Ant Design and PrimeReact libraries, ensuring consistent design patterns and optimal performance.",
        "Contributed to the development of library for multiple functions of a table component.",
        "Collaborated with cross-functional teams to gather requirements, debug issues, and implement front-end and back-end solutions aligned with needs of the project.",
      ],
      certificate: "Internship completion certificate",
      certificateUrl: assets.intern,
    },
    {
      title: "Intern",
      company: "EvoluteIQ",
      location: "Remote",
      employmentType: "Internship",
      logo: "https://evoluteiq.com/wp-content/uploads/2025/02/logo-n-evoluteiq.png",
      url: "https://evoluteiq.com/",
      date: "February 2024 - April 2024",
      duration: "3 mos",
      skills: [
        "Robotic Process Automation (RPA)",
        "UiPath",
        "Automation Anywhere",
      ],
      description: [
        "Worked on automating business processes using the EvoluteIQ Hyperautomation platform combining RPA, AI, ML, and workflow orchestration.",
        "Assisted in building UI components and integrations for low-code/no-code automation dashboards using React and Node.js.",
        "Collaborated with senior engineers to streamline data flows and automate repetitive tasks, reducing manual effort by over 30%.",
      ],
      certificate: "Internship completion certificate",
      certificateUrl: assets.evalute,
    },
  ];

  // State to track expanded skill lists
  const [expandedSkills, setExpandedSkills] = useState({});

  // Toggle function for expanding/collapsing skills
  const toggleSkills = (jobIndex) => {
    setExpandedSkills({
      ...expandedSkills,
      [jobIndex]: !expandedSkills[jobIndex],
    });
  };

  // Function to display limited skills or all based on expanded state
  const renderSkills = (skills, jobIndex) => {
    const isExpanded = expandedSkills[jobIndex];
    const visibleSkillCount = 2; // Number of skills to show initially

    if (skills.length <= visibleSkillCount || isExpanded) {
      // Show all skills if there are few skills or if expanded
      return skills.map((skill, j) => (
        <div key={j} className="skill-badge">
          <span className="skill-icon">♦</span>
          <span>{skill}</span>
        </div>
      ));
    } else {
      // Show limited skills with "more" button
      return (
        <>
          {skills.slice(0, visibleSkillCount).map((skill, j) => (
            <div key={j} className="skill-badge">
              <span className="skill-icon">♦</span>
              <span>{skill}</span>
            </div>
          ))}
          <div
            className="skill-badge more-skills"
            onClick={() => toggleSkills(jobIndex)}
          >
            <span>+{skills.length - visibleSkillCount} more</span>
          </div>
        </>
      );
    }
  };

  return (
    <section id="experience" style={{ padding: "100px 0" }}>
      <div className="container">
        <style>
          {`
            .experience-container {
              max-width: 800px;
              margin: 0 auto;
              font-family: var(--font-sans);
              color: var(--text-primary);
            }
            
            .experience-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 20px;
              padding-bottom: 10px;
              border-bottom: 1px solid var(--text-secondary);
            }
            
            .experience-title {
              font-size: 20px;
              font-weight: 600;
              margin: 0;
            }
            
            .job-entry {
              display: flex;
              margin-bottom: 24px;
              padding-bottom: 24px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.1);
              position: relative;
            }
            
            .job-entry:last-child {
              border-bottom: none;
            }
            
            .logo-container {
              width: 48px;
              height: 48px;
              margin-right: 12px;
              border-radius: 8px;
              overflow: hidden;
              background-color: white;
              padding: 4px;
              flex-shrink: 0;
            }
            
            .job-details {
              flex: 1;
            }
            
            .job-company {
              font-size: 18px;
              font-weight: 600;
              margin-bottom: 4px;
              color: var(--text-primary);
            }
            
            .job-title {
              font-size: 16px;
              font-weight: 500;
              margin-bottom: 4px;
              color: var(--text-primary);
              display: flex;
              align-items: center;
              gap: 8px;
            }
            
            .job-meta {
              font-size: 14px;
              color: var(--text-secondary);
              margin-bottom: 4px;
            }
            
            .job-duration {
              display: flex;
              align-items: center;
              gap: 8px;
              margin-bottom: 8px;
              font-size: 14px;
              color: var(--text-secondary);
            }
            
            .job-skills {
              display: flex;
              align-items: center;
              margin-top: 12px;
              margin-bottom: 16px;
              flex-wrap: wrap;
              gap: 8px;
            }
            
            .skill-badge {
              background-color: var(--secondary-color);
              color: var(--accent-color);
              padding: 4px 8px;
              border-radius: 4px;
              font-size: 14px;
              font-weight: 500;
              display: flex;
              align-items: center;
              gap: 6px;
              border: 1px solid var(--accent-color);
            }
            
            .skill-icon {
              color: var(--accent-color);
            }
            
            .more-skills {
              cursor: pointer;
              background-color: rgba(100, 255, 218, 0.1);
              transition: all 0.2s ease;
            }
            
            .more-skills:hover {
              background-color: rgba(100, 255, 218, 0.2);
              transform: translateY(-2px);
            }
            
            .job-description {
              margin-top: 16px;
            }
            
            .job-bullet {
              position: relative;
              padding-left: 24px;
              margin-bottom: 12px;
              line-height: 1.5;
              color: var(--text-secondary);
            }
            
            .job-bullet:before {
              content: "▹";
              position: absolute;
              left: 0;
              color: var(--accent-color);
            }
            
            .job-bullet:hover {
              color: var(--text-primary);
            }
            
            .certificate-badge {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              background-color: rgba(100, 255, 218, 0.1);
              color: var(--accent-color);
              border: 1px solid var(--accent-color);
              padding: 4px 12px;
              border-radius: 4px;
              font-size: 14px;
              margin-top: 12px;
              cursor: pointer;
              transition: all 0.2s ease;
            }
            
            .certificate-badge:hover {
              background-color: rgba(100, 255, 218, 0.2);
              transform: translateY(-2px);
            }
            
            .timeline-marker {
              position: absolute;
              left: 24px;
              top: 48px;
              bottom: 0;
              width: 2px;
              background-color: var(--accent-color);
              opacity: 0.3;
              z-index: 1;
            }
            
            .new-role-badge {
              background-color: var(--accent-color);
              color: var(--dark-navy);
              font-size: 12px;
              padding: 2px 8px;
              border-radius: 12px;
              font-weight: 500;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            
            .employment-type {
              font-size: 14px;
              color: var(--text-secondary);
              margin-bottom: 4px;
            }
          `}
        </style>

        <h2
          className="section-title fade-in"
          style={{ alignItems: "baseline", gap: 8 }}
        >
          <span className="number">02.</span>
          <span className="gradient-text" style={{ fontWeight: 800 }} id="work">
            Work
          </span>
          <span
            aria-hidden
            style={{
              flex: 1,
              height: 2,
              background:
                "linear-gradient(90deg, transparent, var(--accent-color))",
              borderRadius: 2,
            }}
          ></span>
        </h2>

        <div className="experience-container fade-in">
          <div className="experience-header">
            <h3 className="experience-title">Experience</h3>
          </div>

          <div className="job-timeline">
            {jobs.map((job, i) => (
              <div key={i} className="job-entry">
                {i < jobs.length - 1 && <div className="timeline-marker"></div>}
                <div className="logo-container">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>

                <div className="job-details">
                  <h4 className="job-company">{job.company}</h4>
                  <div className="job-title">{job.title}</div>
                  <div className="employment-type">{job.employmentType}</div>
                  <div className="job-meta">{job.location}</div>
                  <div className="job-duration">
                    <span>{job.date}</span>
                    <span>·</span>
                    <span>{job.duration}</span>
                  </div>

                  <div className="job-skills">
                    {renderSkills(job.skills, i)}
                  </div>

                  <div className="job-description">
                    {job.description.map((point, j) => (
                      <div key={j} className="job-bullet">
                        {point}
                      </div>
                    ))}
                  </div>

                  {job.certificate && (
                    <a
                      href={job.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-badge"
                    >
                      <span>📄</span>
                      <span>{job.certificate}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
