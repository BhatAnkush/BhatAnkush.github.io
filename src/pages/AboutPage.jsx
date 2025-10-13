import { useState } from "react";
import assets from "../components/Assets";
import {
  FiGithub,
  FiLinkedin,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiCalendar,
  FiDownload,
  FiExternalLink,
  FiAward,
  FiBriefcase,
  FiBookOpen,
  FiCode,
  FiGitBranch,
  FiDatabase,
  FiCloud,
  FiTool,
} from "react-icons/fi";


const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const experience = [
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

  const education = [
    {
      degree: "Bachelor of Engineering - Information Science",
      school: "Sahyadri College of Engineering",
      period: "2020 — 2024",
      grade: "CGPA: 8.26/10",
      location: "Mangaluru, India",
      logo: assets.sahyadriLogo,
      coursework: [
        "Data Structures",
        "Algorithms",
        "Database Systems",
        "Software Engineering",
        "Web Technologies",
        "Computer Networks",
      ],
    },
    {
      degree: "Pre‑University Course (Science)",
      school: "Indraprastha PU College",
      period: "2018 — 2020",
      grade: "Percentage: 87.66%",
      location: "Mangaluru, India",
      logo: assets.indraprasthaLogo,
      subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    },
  ];

  const certificates = [
    {
      id: "ACEC",
      title: "Associate Cloud Engineer Certification",
      issuer: "Google Cloud",
      date: "July 21, 2025 - July 21, 2028",
      description:
        "Achieved Google Cloud Associate Cloud Engineer certification, validating expertise in deploying, managing, and securing scalable cloud solutions on GCP.",
      skills: [
        "Cloud Architecture",
        "Cloud Computing",
        "Cloud Security",
        "Cloud Storage",
        "Compute Engine",
        "GKE",
        "Google Cloud Platform (GCP)",
        "Identity And Access Management (IAM)",
        "Infrastructure as Code (IaC)",
        "Networking",
        "Pub/sub",
        "SQL",
      ],
      image: assets.associate,
      url: "https://www.credly.com/badges/48ac672d-cb2b-44cc-b67a-d72a9c697b3c/public_url",
    },
    {
      id: "evoluteiq-intern",
      title: "RPA Intern",
      issuer: "EvoluteIQ",
      date: "Feb 2024 - Apr 2024",
      description:
        "Completed internship in Robotic Process Automation with hands-on experience in UiPath and business process optimization.",
      skills: ["UiPath", "Process Automation", "Python", "Business Analysis"],
      image: assets.evoluteiqInternshipCert,
      url: assets.evalute,
    },
  ];

  const skills = {
    frontend: {
      title: "Frontend Development",
      icon: FiCode,
      items: [
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Responsive Design",
      ],
    },
    backend: {
      title: "Backend Development",
      icon: FiGitBranch,
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication",
        "JWT",
        "OAuth",
        "Microservices",
      ],
    },
    databases: {
      title: "Databases",
      icon: FiDatabase,
      items: ["PostgreSQL", "MySQL", "Database Design", "Query Optimization"],
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: FiCloud,
      items: ["Google Cloud Platform", "Docker", "Cloud Run", "Firebase"],
    },
    tools: {
      title: "Tools & Technologies",
      icon: FiTool,
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "ESLint",
        "Prettier",
        "Jest",
        "Webpack",
        "Vite",
      ],
    },
  };

  const personalInfo = {
    location: "Mangaluru, Karnataka, India",
    timezone: "Asia/Kolkata (UTC+5:30)",
    languages: ["English", "Hindi", "Kannada", "Tulu"],
    availability: "Open to new opportunities",
    workType: "Remote, Hybrid, On-site",
  };

  const socialLinks = [
    {
      icon: FiGithub,
      label: "GitHub",
      url: "https://github.com/BhatAnkush",
      color: "#333",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ankushab/",
      color: "#0077B5",
    },
    {
      icon: FiMail,
      label: "Email",
      url: "mailto:ankushbhataab@gmail.com",
      color: "#EA4335",
    },
    { icon: FiGlobe, label: "Portfolio", url: "#", color: "#00d4ff" },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: FiBriefcase },
    { id: "experience", label: "Experience", icon: FiBriefcase },
    { id: "education", label: "Education", icon: FiBookOpen },
    { id: "skills", label: "Skills", icon: FiCode },
    { id: "certificates", label: "Certificates", icon: FiAward },
  ];

  return (
    <section style={{ padding: "100px 0", minHeight: "100vh" }}>
      <style>
        {`
          .about-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .about-header {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 40px;
            margin-bottom: 40px;
            backdrop-filter: blur(10px);
          }
          
          .profile-section {
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 30px;
            align-items: center;
          }
          
          .profile-image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--accent-color);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
          
          .profile-info h1 {
            font-size: clamp(2rem, 4vw, 3rem);
            margin: 0 0 10px 0;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .profile-title {
            font-size: 1.3rem;
            color: var(--text-secondary);
            margin-bottom: 15px;
          }
          
          .profile-meta {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            margin-bottom: 20px;
          }
          
          .meta-chip {
            background: rgba(100, 255, 218, 0.1);
            color: var(--accent-color);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          
          .social-links {
            display: flex;
            gap: 15px;
          }
          
          .social-link {
            width: 45px;
            height: 45px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: var(--white);
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 1.1rem;
          }
          
          .social-link:hover {
            transform: translateY(-3px);
            border-color: var(--accent-color);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          }
          
          .download-resume {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 20px;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            color: var(--primary-color);
            text-decoration: none;
            border-radius: 12px;
            font-weight: 600;
            transition: all 0.3s ease;
          }
          
          .download-resume:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(100, 255, 218, 0.3);
          }
          
          .tabs-container {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            overflow: hidden;
          }
          
          .tabs-header {
            display: flex;
            background: rgba(255, 255, 255, 0.05);
            overflow-x: auto;
          }
          
          .tab-button {
            flex: 1;
            padding: 20px;
            background: none;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-weight: 500;
            min-width: max-content;
          }
          
          .tab-button.active {
            color: var(--accent-color);
            background: rgba(100, 255, 218, 0.1);
            border-bottom: 3px solid var(--accent-color);
          }
          
          .tab-button:hover:not(.active) {
            color: var(--white);
            background: rgba(255, 255, 255, 0.05);
          }
          
          .tab-content {
            padding: 40px;
          }
          
          .intro-text {
            font-size: 1.1rem;
            line-height: 1.8;
            color: var(--text-secondary);
            margin-bottom: 30px;
          }
          
          .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 30px;
          }
          
          .info-card {
            background: rgba(255, 255, 255, 0.03);
            padding: 20px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .info-card h4 {
            color: var(--accent-color);
            margin: 0 0 10px 0;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .info-card p {
            color: var(--text-secondary);
            margin: 0;
            line-height: 1.5;
          }
          
          .experience-item {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 25px;
            transition: all 0.3s ease;
          }
          
          .experience-item:hover {
            border-color: rgba(100, 255, 218, 0.3);
            transform: translateY(-2px);
          }
          
          .experience-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;
            flex-wrap: wrap;
            gap: 15px;
          }

          .experience-logo {
            width: 48px;
            height: 48px;
            border-radius: 8px;
            overflow: hidden;
            background-color: white;
            padding: 4px;
            flex-shrink: 0;
            margin-right: 15px;
          }

          .experience-logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          .experience-details {
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 15px;
            flex-wrap: wrap;
          }
          
          .experience-title {
            flex: 1;
          }
          
          .experience-title h3 {
            color: var(--white);
            margin: 0 0 5px 0;
            font-size: 1.3rem;
          }
          
          .experience-title .company {
            color: var(--accent-color);
            font-weight: 600;
            margin-bottom: 5px;
          }
          
          .experience-meta {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            font-size: 0.8rem;
            color: var(--text-secondary);
          }
          
          .experience-period {
            background: rgba(100, 255, 218, 0.1);
            color: var(--accent-color);
            padding: 6px 12px;
            border-radius: 20px;
            font-weight: 500;
          }
          
          .experience-description {
            color: var(--text-secondary);
            line-height: 1.6;
            margin: 15px 0;
          }

          .description-point {
            color: var(--text-secondary);
            padding: 5px 0;
            padding-left: 20px;
            position: relative;
            line-height: 1.5;
          }

          .description-point:before {
            content: '▸';
            position: absolute;
            left: 0;
            color: var(--accent-color);
            font-weight: bold;
          }

          .certificate-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background-color: rgba(100, 255, 218, 0.1);
            color: var(--accent-color);
            border: 1px solid var(--accent-color);
            padding: 8px 16px;
            border-radius: 20px;
            text-decoration: none;
            font-size: 0.9rem;
            margin-top: 15px;
            transition: all 0.2s ease;
          }

          .certificate-badge:hover {
            background-color: rgba(100, 255, 218, 0.2);
            transform: translateY(-2px);
          }
          
          .achievements-list {
            margin: 20px 0;
            padding: 0;
            list-style: none;
          }
          
          .achievements-list li {
            color: var(--text-secondary);
            padding: 5px 0;
            padding-left: 20px;
            position: relative;
            line-height: 1.5;
          }
          
          .achievements-list li::before {
            content: '▸';
            position: absolute;
            left: 0;
            color: var(--accent-color);
            font-weight: bold;
          }
          
          .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 20px;
          }
          
          .tech-tag {
            background: rgba(100, 255, 218, 0.1);
            color: var(--accent-color);
            padding: 4px 10px;
            border-radius: 15px;
            font-size: 0.7rem;
            font-weight: 500;
          }
          
          .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
          }
          
          .skill-category {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 25px;
            transition: all 0.3s ease;
          }
          
          .skill-category:hover {
            border-color: rgba(100, 255, 218, 0.3);
            transform: translateY(-3px);
          }
          
          .skill-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
          }
          
          .skill-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary-color);
          }
          
          .skill-title {
            color: var(--white);
            font-size: 1.1rem;
            font-weight: 600;
            margin: 0;
          }
          
          .skill-items {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          
          .skill-item {
            background: rgba(255, 255, 255, 0.05);
            color: var(--text-secondary);
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            transition: all 0.2s ease;
          }
          
          .skill-item:hover {
            background: rgba(100, 255, 218, 0.1);
            color: var(--accent-color);
          }
          
          .certificates-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
          }
          
          .certificate-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(100, 255, 218, 0.2);
            border-radius: 15px;
            padding: 25px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .certificate-image {
            width: 100%;
            height: 200px;
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 20px;
            background: rgba(255, 255, 255, 0.1);
          }

          .certificate-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          .certificate-card:hover .certificate-image img {
            transform: scale(1.05);
          }          .certificate-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
          }
          
          .certificate-card:hover {
            border-color: rgba(100, 255, 218, 0.3);
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
          
          .certificate-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;
          }
          
          .certificate-title {
            color: var(--white);
            font-size: 1.2rem;
            font-weight: 600;
            margin: 0 0 5px 0;
          }
          
          .certificate-issuer {
            color: var(--accent-color);
            font-weight: 500;
            margin-bottom: 5px;
          }
          
          .certificate-date {
            color: var(--text-secondary);
            font-size: 0.8rem;
            display: flex;
            align-items: center;
            gap: 5px;
          }
          
          .certificate-description {
            color: var(--text-secondary);
            line-height: 1.6;
            margin: 15px 0;
          }
          
          .certificate-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--accent-color);
            text-decoration: none;
            font-weight: 500;
            font-size: 0.9rem;
            transition: all 0.2s ease;
          }
          
          .certificate-link:hover {
            color: #00d4ff;
            transform: translateX(3px);
          }
          
          @media (max-width: 768px) {
            .profile-section {
              grid-template-columns: 1fr;
              text-align: center;
              gap: 20px;
            }
            
            .tabs-header {
              flex-direction: column;
            }
            
            .tab-content {
              padding: 20px;
            }
            
            .experience-header {
              flex-direction: column;
              align-items: flex-start;
            }
            
            .skills-grid,
            .certificates-grid {
              grid-template-columns: 1fr;
            }
            
            .profile-meta {
              justify-content: center;
            }
            
            .social-links {
              justify-content: center;
            }
          }
        `}
      </style>

      <div className="about-container">
        <div className="about-header">
          <div className="profile-section">
            <img
              src={assets.aboutme}
              alt="Ankush Bhat"
              className="profile-image"
            />
            <div className="profile-info">
              <h1>Ankush Bhat</h1>
              <div className="profile-title">
                Full Stack Developer & Cloud Engineer
              </div>
              <div className="profile-meta">
                <div className="meta-chip">
                  <FiMapPin size={14} />
                  {personalInfo.location}
                </div>
                <div className="meta-chip">
                  <FiCalendar size={14} />
                  {personalInfo.availability}
                </div>
              </div>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
            <a href={assets.resume} className="download-resume" download>
              <FiDownload />
              Download Resume
            </a>
          </div>
        </div>

        <div className="tabs-container">
          <div className="tabs-header">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === "overview" && (
              <div>
                <p className="intro-text">
                  Hello! I’m Ankush Ananth Bhat, a passionate Web Developer with
                  a strong foundation in Information Science. I earned my
                  Bachelor's in Engineering from Sahyadri College of Engineering
                  & Management, Mangaluru, and have since been dedicated to
                  crafting impactful web applications and solutions.
                </p>
                <p className="intro-text">
                  Currently, I serve as a Cloud Explorer-Technology at Niveus
                  Solutions, where I gain hands-on experience in developing
                  real-world applications and enhancing my skills in modern web
                  technologies. I thrive on taking on new projects and
                  challenges that drive me to learn and innovate. From building
                  responsive interfaces to developing robust backend systems,
                  I’m dedicated to crafting solutions that are efficient,
                  scalable, and user-centered.
                </p>
                <p className="intro-text">
                  Thanks for taking the time to read a bit about me!
                </p>
              </div>
            )}

            {activeTab === "experience" && (
              <div>
                {experience.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <div className="experience-header">
                      <div className="experience-logo">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg";
                          }}
                        />
                      </div>
                      <div className="experience-details">
                        <div className="experience-title">
                          <h3>{exp.title}</h3>
                          <div className="company">{exp.company}</div>
                          <div className="experience-meta">
                            <span>{exp.employmentType}</span>
                            <span>•</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <div className="experience-period">
                          <span>{exp.date}</span>
                          <span>•</span>
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="experience-description">
                      {exp.description.map((desc, i) => (
                        <div key={i} className="description-point">
                          {desc}
                        </div>
                      ))}
                    </div>

                    <div className="tech-tags">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="tech-tag">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {exp.certificate && (
                      <div className="certificate-link">
                        <a
                          href={exp.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="certificate-badge"
                        >
                          <FiAward />
                          <span>{exp.certificate}</span>
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === "education" && (
              <div>
                {education.map((edu, index) => (
                  <div key={index} className="experience-item">
                    <div className="experience-header">
                      <div className="experience-logo">
                        <img
                          src={edu.logo}
                          alt={`${edu.school} logo`}
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg";
                          }}
                        />
                      </div>
                      <div className="experience-details">
                        <div className="experience-title">
                          <h3>{edu.degree}</h3>
                          <div className="company">{edu.school}</div>
                          <div className="experience-meta">
                            <span>{edu.location}</span>
                            <span>•</span>
                            <span>{edu.grade}</span>
                          </div>
                        </div>
                        <div className="experience-period">{edu.period}</div>
                      </div>
                    </div>

                    {edu.coursework && (
                      <div>
                        <h4
                          style={{
                            color: "var(--accent-color)",
                            margin: "15px 0 10px 0",
                          }}
                        >
                          Key Coursework:
                        </h4>
                        <div className="tech-tags">
                          {edu.coursework.map((course, i) => (
                            <span key={i} className="tech-tag">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {edu.subjects && (
                      <div>
                        <h4
                          style={{
                            color: "var(--accent-color)",
                            margin: "15px 0 10px 0",
                          }}
                        >
                          Subjects:
                        </h4>
                        <div className="tech-tags">
                          {edu.subjects.map((subject, i) => (
                            <span key={i} className="tech-tag">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === "skills" && (
              <div className="skills-grid">
                {Object.values(skills).map((category, index) => (
                  <div key={index} className="skill-category">
                    <div className="skill-header">
                      <div className="skill-icon">
                        <category.icon size={20} />
                      </div>
                      <h3 className="skill-title">{category.title}</h3>
                    </div>
                    <div className="skill-items">
                      {category.items.map((skill, i) => (
                        <span key={i} className="skill-item">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "certificates" && (
              <div className="certificates-grid">
                {certificates.map((cert, index) => (
                  <div key={index} className="certificate-card">
                    <div className="certificate-image">
                      <img
                        src={cert.image}
                        alt={`${cert.title} certificate`}
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    <div className="certificate-header">
                      <div>
                        <h3 className="certificate-title">{cert.title}</h3>
                        <div className="certificate-issuer">{cert.issuer}</div>
                        <div className="certificate-date">
                          <FiCalendar size={14} />
                          {cert.date}
                        </div>
                      </div>
                    </div>

                    <div className="certificate-description">
                      {cert.description}
                    </div>

                    <div className="tech-tags">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="tech-tag">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-link"
                      >
                        <FiExternalLink size={14} />
                        View Certificate
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
