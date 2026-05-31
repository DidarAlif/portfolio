// ============================================================
// Portfolio Data — Md Didarul Alam Alif
// Cybersecurity Engineer | System Engineer | VAPT Specialist | Full Stack Developer
// ============================================================

export const portfolioData = {
  personal: {
    name: "Md Didarul Alam Alif",
    username: "DidarAlif",
    roles: [
      "Cybersecurity Engineer",
      "System Engineer",
      "VAPT Specialist",
      "Full Stack Developer",
      "Offensive Security Professional",
    ],
    bio: "Offensive security-driven VAPT professional with a strong foundation in web application and network penetration testing, focused on delivering measurable security improvements. Experienced in black-box and gray-box assessments, deep reconnaissance, attack surface mapping, vulnerability validation, and system hardening.",
    currentRole: "Assistant System Engineer",
    pronouns: "he/him",
    resumePath: "/resume.pdf",
    profileImage: "/alif.png",
    location: "Dhaka, Bangladesh",
    company: "AmberIT",
    email: "didarulalamalif@gmail.com",
    website: "",
    githubUsername: "DidarAlif",
    socials: {
      github: "https://github.com/DidarAlif",
      linkedin: "https://linkedin.com/in/didarul-alam-alif",
      twitter: "https://twitter.com/DidarAlif",
      muine: "https://github.com/DidarAlif/muine",
    },
    followers: 142,
    following: 87,
    stars: 12,
  },

  overview: {
    summary: `Offensive security-focused System Engineer with hands-on experience in Vulnerability Assessment & Penetration Testing (VAPT), enterprise networking, and secure full-stack development. Proficient in identifying and exploiting OWASP Top 10 and business logic vulnerabilities, executing deep reconnaissance, and delivering structured security hardening reports.`,
    highlights: [
      "VAPT & Penetration Testing across web, API, and network platforms",
      "Experience conducting black-box and gray-box security assessments",
      "Identifying OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, IDOR, SSRF)",
      "Enterprise network engineering with Cisco, MikroTik, Fortinet, and Juniper",
      "Full-stack development using Next.js, FastAPI, Vue.js, and Ruby on Rails",
      "Deployment of secure containerized infrastructures using Docker",
      "Delivering CVSS v3.1 risk assessments and actionable hardening reports",
    ],
  },

  experience: [
    {
      id: "amberit",
      company: "AmberIT",
      location: "Dhaka, Bangladesh",
      role: "Assistant System Engineer",
      period: "March 1, 2026 — Present",
      startDate: "2026-03-01",
      description:
        "Design, deploy, and maintain enterprise network infrastructure. Leading network security operations, VAPT assessments, and infrastructure monitoring across client environments.",
      responsibilities: [
        "Design, configure, and troubleshoot complex network architectures, including routers, switches, firewalls, Wi-Fi routers, and access points for internal and endpoint devices.",
        "Provide expert-level Layer 2 and Layer 3 VPN configuration, troubleshooting, and remote support.",
        "Perform remote monitoring, fault isolation, and network diagnostics using enterprise-grade monitoring systems.",
        "Monitor and manage network devices using Zabbix and related NMS tools.",
        "Work with Cisco, MikroTik, Juniper, Fortinet, WinBox, and ABX systems.",
        "Handle incident response, technical escalation, and service restoration for network infrastructure.",
      ],
      techUsed: [
        "Cisco",
        "MikroTik",
        "Juniper",
        "Fortinet",
        "Zabbix",
        "WinBox",
        "Linux",
      ],
      color: "#58A6FF",
      isCurrent: true,
    },
    {
      id: "estoma",
      company: "Estoma Inc.",
      location: "Tokyo, Japan (METI Govt. Internship)",
      role: "AI/IT Intern",
      period: "Oct 2025 — Dec 2025",
      startDate: "2025-10-01",
      description:
        "Worked on backend architecture and full-stack logic components, while conducting web application and API penetration testing in production environments.",
      responsibilities: [
        "Worked with Ruby on Rails, Ruby, Vue.js, Vite, and Docker in production environments.",
        "Designed backend architectures including data models, API routing, and scalable logic components.",
        "Conducted Vulnerability Assessment and Penetration Testing (VAPT) on web applications and APIs.",
      ],
      techUsed: ["Ruby on Rails", "Ruby", "Vue.js", "Vite", "Docker", "VAPT"],
      color: "#FF7B72",
      isCurrent: false,
    },
    {
      id: "deshlink",
      company: "DeshLink Ltd.",
      location: "Dhaka, Bangladesh",
      role: "Cybersecurity Specialist Intern",
      period: "Jul 2023 — Nov 2023",
      startDate: "2023-07-01",
      description:
        "Executed network security audits, vulnerability assessments, and delivered comprehensive documentation on network hardening.",
      responsibilities: [
        "Performed penetration testing, network security audits, and comprehensive security assessments.",
        "Identified and documented security vulnerabilities with risk-based prioritization.",
        "Delivered structured security hardening reports with actionable remediation recommendations.",
      ],
      techUsed: ["Penetration Testing", "Security Auditing", "Network Hardening", "Reports"],
      color: "#7EE787",
      isCurrent: false,
    },
    {
      id: "senselearner",
      company: "Senselearner Technologies Pvt. Ltd.",
      location: "Remote",
      role: "Cybersecurity Intern",
      period: "Sep 2023 — Nov 2023",
      startDate: "2023-09-01",
      description:
        "Conducted VAPT on enterprise web applications, threat intelligence mapping, and cyber awareness documentation.",
      responsibilities: [
        "Executed VAPT activities for enterprise web applications and infrastructure.",
        "Wrote cyber awareness guides and comprehensive security documentation.",
        "Supported threat intelligence operations and continuous vulnerability monitoring initiatives.",
      ],
      techUsed: ["VAPT", "Threat Intelligence", "Technical Writing", "Security Docs"],
      color: "#BC8CFF",
      isCurrent: false,
    },
  ],

  notableProjects: [
    {
      name: "ReconScience VAPT Platform",
      year: "2025",
      description:
        "Engineered an automated VAPT platform with Next.js and FastAPI, integrating Nuclei for real-time CVE and vulnerability scanning with live SSE status streaming.",
    },
    {
      name: "Multi-Tenant SaaS Penetration Test",
      year: "2025",
      description:
        "Conducted full-scope authenticated and unauthenticated VAPT testing aligned with OWASP WSTG 4.2 and API Top 10, uncovering 22 findings.",
    },
    {
      name: "ICBC Expo by CoAB",
      year: "2026",
      description:
        "Network infrastructure deployment and management for the ICBC Expo event.",
    },
    {
      name: "3rd DRMC National Islamic Cultural Festival",
      year: "2026",
      description:
        "End-to-end network setup and event connectivity management.",
    },
    {
      name: "Business Fest Bangladesh 2026",
      year: "2026",
      description:
        "Large-scale event networking and security infrastructure deployment.",
    },
  ],

  repositories: [
    {
      id: "portfolio",
      name: "portfolio",
      description:
        "Modern cybersecurity and system engineering portfolio website showcasing VAPT audits, enterprise networking, and custom tools.",
      longDescription:
        "A highly optimized, premium portfolio website showcasing cybersecurity engineering, VAPT audits, enterprise networking configurations, and system administration skills. Features interactive terminal navigation, real-time repository fetching, contribution charts, and direct contact system.",
      language: "TypeScript",
      languageColor: "#3178C6",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
      stars: 1,
      forks: 0,
      issues: 0,
      watchers: 1,
      updated: "just now",
      github: "https://github.com/DidarAlif/portfolio",
      live: "https://me-didar.vercel.app",
      pinned: true,
      topics: ["nextjs", "typescript", "tailwindcss", "portfolio", "framer-motion"],
      visibility: "Public",
      year: "2026",
    },
    {
      id: "vapt-platform",
      name: "vapt-platform",
      description:
        "ReconScience: Advanced Security Reconnaissance & Vulnerability Assessment Platform. A full-stack VAPT platform leveraging Nuclei for web security scanning.",
      longDescription:
        "ReconScience is a modern, full-stack VAPT platform that leverages Nuclei's 9000+ security templates for comprehensive web application security scanning, custom scan profiles, secure JWT authentication, and detailed HTML/JSON report generation.",
      language: "Python",
      languageColor: "#3572A5",
      techStack: ["Next.js", "FastAPI", "Python", "PostgreSQL", "Nuclei", "Docker"],
      stars: 5,
      forks: 1,
      issues: 0,
      watchers: 5,
      updated: "recently",
      github: "https://github.com/DidarAlif/vapt-platform",
      live: "",
      pinned: true,
      topics: ["vapt", "security", "penetration-testing", "fastapi", "nuclei"],
      visibility: "Public",
      year: "2026",
    },
    {
      id: "Deep-Axis",
      name: "Deep-Axis",
      description:
        "Mess Manager — Deep Axis: A secure, dynamic mess management application for tracking meals, bazar costs, rent, and member balances.",
      longDescription:
        "Mess Manager is a professional, secure, and dynamic mess management application featuring role-based access control, a peer-review dual verification system, personalized avatars, and 3D card flip animations.",
      language: "Python",
      languageColor: "#3572A5",
      techStack: ["Python", "HTML", "CSS", "JavaScript", "Excel Data"],
      stars: 2,
      forks: 0,
      issues: 0,
      watchers: 2,
      updated: "recently",
      github: "https://github.com/DidarAlif/Deep-Axis",
      live: "",
      pinned: true,
      topics: ["python", "mess-manager", "html-css", "verification-system"],
      visibility: "Public",
      year: "2026",
    },
    {
      id: "3d-portfolio",
      name: "3d-portfolio",
      description:
        "An interactive 3D developer portfolio showcasing security credentials, full-stack projects, and system expertise.",
      longDescription:
        "An interactive 3D developer portfolio built using React, Vite, and Three.js/React Three Fiber for rich rendering and animations.",
      language: "JavaScript",
      languageColor: "#F1E05A",
      techStack: ["React", "Vite", "Three.js", "React Three Fiber", "JavaScript"],
      stars: 1,
      forks: 0,
      issues: 0,
      watchers: 1,
      updated: "recently",
      github: "https://github.com/DidarAlif/3d-portfolio",
      live: "",
      pinned: true,
      topics: ["threejs", "react-three-fiber", "react", "vite", "3d-portfolio"],
      visibility: "Public",
      year: "2026",
    },
    {
      id: "OWASP-Aligned-Web-API-Penetration-Testing-of-Multi-Tenant-SaaS-Platform",
      name: "OWASP-Aligned-Web-API-Penetration-Testing-of-Multi-Tenant-SaaS-Platform",
      description:
        "Full-scope authenticated and unauthenticated VAPT audit report of a multi-tenant web application (Vue.js, Ruby on Rails, Auth0). Highlights discovery and remediation of 22 findings.",
      longDescription:
        "A comprehensive security penetration testing and assessment repository detailing an OWASP-aligned VAPT audit on a multi-tenant SaaS application. Covers authorization bypasses, secure session management, and API hardening.",
      language: "HTML",
      languageColor: "#e34c26",
      techStack: ["Vue.js", "Ruby on Rails", "Auth0", "Burp Suite", "OWASP ZAP", "Docker"],
      stars: 3,
      forks: 0,
      issues: 0,
      watchers: 3,
      updated: "recently",
      github: "https://github.com/DidarAlif/OWASP-Aligned-Web-API-Penetration-Testing-of-Multi-Tenant-SaaS-Platform",
      live: "",
      pinned: true,
      topics: ["vapt", "security-audit", "penetration-testing", "owasp-top-10"],
      visibility: "Public",
      year: "2026",
    },
    {
      id: "ADVANCE-DATABASE-MANAGEMENT-SYSTEM-Project",
      name: "ADVANCE-DATABASE-MANAGEMENT-SYSTEM-Project",
      description:
        "Superstore Management database schema design, technical report, and optimized PL/SQL queries for high-performance operations.",
      longDescription:
        "An advanced database management system project focusing on database normalization, index optimization, custom triggers, stored procedures, and PL/SQL queries for managing high-volume transactions in a superstore environment.",
      language: "PLpgSQL",
      languageColor: "#3178C6",
      techStack: ["PostgreSQL", "SQL", "PL/pgSQL", "ER Diagrams"],
      stars: 2,
      forks: 0,
      issues: 0,
      watchers: 2,
      updated: "recently",
      github: "https://github.com/DidarAlif/ADVANCE-DATABASE-MANAGEMENT-SYSTEM-Project",
      live: "",
      pinned: false,
      topics: ["adms", "database-design", "postgresql", "pl-sql"],
      visibility: "Public",
      year: "2025",
    },
    {
      id: "StudyAssist-C-Sharp-based-project",
      name: "StudyAssist-C-Sharp-based-project",
      description:
        "Study Assist: C# Windows Forms desktop application designed to streamline educational center administration, scheduling, attendance tracking, and finance.",
      longDescription:
        "A comprehensive C# Windows Forms desktop application designed to manage staff, tutor databases, attendance tracking, schedule classes, and process manager salaries with SQL Server database back-end and ADO.NET data access.",
      language: "C#",
      languageColor: "#178600",
      techStack: ["C#", "Windows Forms", "SQL Server", "ADO.NET", ".NET Framework"],
      stars: 1,
      forks: 0,
      issues: 0,
      watchers: 1,
      updated: "recently",
      github: "https://github.com/DidarAlif/StudyAssist-C-Sharp-based-project",
      live: "",
      pinned: false,
      topics: ["csharp", "winforms", "sql-server", "management-system"],
      visibility: "Public",
      year: "2025",
    },
    {
      id: "Elite-Depot-E-commerce-website",
      name: "Elite-Depot-E-commerce-website",
      description:
        "Elite Depot: A full-featured responsive e-commerce web platform built with PHP and MySQL. Includes shopping cart, checkout process, and admin panel.",
      longDescription:
        "A full-featured responsive e-commerce website built with PHP and MySQL. Includes customer registration/login, shopping cart operations, search page, checkout flow, and a comprehensive admin panel for products, orders, and messages management.",
      language: "PHP",
      languageColor: "#4F5D95",
      techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      stars: 1,
      forks: 0,
      issues: 0,
      watchers: 1,
      updated: "recently",
      github: "https://github.com/DidarAlif/Elite-Depot-E-commerce-website",
      live: "",
      pinned: true,
      topics: ["php", "mysql", "ecommerce", "admin-panel"],
      visibility: "Public",
      year: "2025",
    },
    {
      id: "Cyber-Security-Project-Report-on-Vulnerability-Assessment-ang-Penetration-Testing-",
      name: "Cyber-Security-Project-Report-on-Vulnerability-Assessment-ang-Penetration-Testing-",
      description:
        "Comprehensive report on automated and manual security assessments of network endpoints following NIST frameworks.",
      longDescription:
        "Detailed project documentation and reports outlining NIST-aligned vulnerability assessment and penetration testing (VAPT) methodologies, proof of concepts, risk ratings, and actionable remediation guidelines.",
      language: "CSS",
      languageColor: "#563d7c",
      techStack: ["Nmap", "Metasploit", "Nessus", "Wireshark", "Burp Suite", "Kali Linux"],
      stars: 1,
      forks: 0,
      issues: 0,
      watchers: 1,
      updated: "recently",
      github: "https://github.com/DidarAlif/Cyber-Security-Project-Report-on-Vulnerability-Assessment-ang-Penetration-Testing-",
      live: "",
      pinned: false,
      topics: ["cybersecurity", "vapt-report", "nist-standards", "vulnerability-assessment"],
      visibility: "Public",
      year: "2024",
    },
    {
      id: "Object-oriented-analysis-and-design-project",
      name: "Object-oriented-analysis-and-design-project",
      description:
        "UML diagram designs, system architectures, and object-oriented models for building scalable software solutions.",
      longDescription:
        "A comprehensive project analysis report covering Object-Oriented Analysis and Design (OOAD) principles. Uses UML diagrams (use case, class, sequence, activity) and software design patterns to outline detailed software blueprints.",
      language: "Java",
      languageColor: "#b07219",
      techStack: ["Java", "UML", "StarUML", "Design Patterns", "OOP"],
      stars: 1,
      forks: 0,
      issues: 0,
      watchers: 1,
      updated: "recently",
      github: "https://github.com/DidarAlif/Object-oriented-analysis-and-design-project",
      live: "",
      pinned: false,
      topics: ["ooad", "uml", "software-architecture", "design-patterns"],
      visibility: "Public",
      year: "2023",
    },
    {
      id: "Database-project-with-SQL",
      name: "Database-project-with-SQL",
      description:
        "Relational database design, table structures, normalized schemas, and SQL scripts for data management.",
      longDescription:
        "Academic project covering relational database implementation, entity-relationship models, schema constraints, and queries using SQL for commercial systems.",
      language: "HTML",
      languageColor: "#e34c26",
      techStack: ["SQL", "MySQL", "Database Design", "ER Models"],
      stars: 1,
      forks: 0,
      issues: 0,
      watchers: 1,
      updated: "recently",
      github: "https://github.com/DidarAlif/Database-project-with-SQL",
      live: "",
      pinned: false,
      topics: ["sql", "mysql", "database-design", "relational-database"],
      visibility: "Public",
      year: "2023",
    },
    {
      id: "Java-project-1",
      name: "Java-project-1",
      description:
        "Desktop application built using Java GUI swing and object-oriented concepts.",
      longDescription:
        "An object-oriented programming implementation project demonstrating class hierarchies, polymorphism, encapsulation, file I/O, and custom graphical user interfaces using Java Swing and AWT.",
      language: "Java",
      languageColor: "#b07219",
      techStack: ["Java", "Swing", "AWT", "OOP"],
      stars: 1,
      forks: 0,
      issues: 0,
      watchers: 1,
      updated: "recently",
      github: "https://github.com/DidarAlif/Java-project-1",
      live: "",
      pinned: false,
      topics: ["java", "swing-gui", "oop", "desktop-app"],
      visibility: "Public",
      year: "2023",
    },
    {
      id: "Java-project-2",
      name: "Java-project-2",
      description:
        "Advanced Java desktop application with database connectivity and user session management.",
      longDescription:
        "Desktop software constructed in Java, highlighting GUI layout forms, local file databases, multi-role user privileges, and OOP architectural design patterns.",
      language: "Java",
      languageColor: "#b07219",
      techStack: ["Java", "Swing", "OOP", "File Database"],
      stars: 1,
      forks: 0,
      issues: 0,
      watchers: 1,
      updated: "recently",
      github: "https://github.com/DidarAlif/Java-project-2",
      live: "",
      pinned: false,
      topics: ["java", "swing", "oop", "software-engineering"],
      visibility: "Public",
      year: "2025",
    },
    {
      id: "Computer-project",
      name: "Computer-project",
      description:
        "Algorithms and logic modules written in C++ for computer graphics or scheduling operations.",
      longDescription:
        "Procedural computer programming implementation featuring custom data structures, graph search algorithms, or basic rendering routines coded in C++.",
      language: "C++",
      languageColor: "#f34b7d",
      techStack: ["C++", "Algorithms", "Data Structures"],
      stars: 1,
      forks: 0,
      issues: 0,
      watchers: 1,
      updated: "recently",
      github: "https://github.com/DidarAlif/Computer-project",
      live: "",
      pinned: false,
      topics: ["cpp", "algorithms", "data-structures"],
      visibility: "Public",
      year: "2023",
    },
    {
      id: "C-project",
      name: "C-project",
      description:
        "C programming projects demonstrating basic structures, array manipulation, and procedural code logic.",
      longDescription:
        "A compilation of basic console utility applications and data sorting algorithms implemented in pure C language for school labs.",
      language: "C",
      languageColor: "#555555",
      techStack: ["C", "Algorithms", "Procedural Coding"],
      stars: 1,
      forks: 0,
      issues: 0,
      watchers: 1,
      updated: "recently",
      github: "https://github.com/DidarAlif/C-project",
      live: "",
      pinned: false,
      topics: ["c-language", "algorithms", "procedural-programming"],
      visibility: "Public",
      year: "2023",
    },
    {
      id: "Autocad-works",
      name: "Autocad-works",
      description:
        "Design files and engineering layout blueprints created in AutoCAD.",
      longDescription:
        "Collection of computer-aided drafting (CAD) schematics, floor designs, and engineering layout blueprints created using AutoCAD software.",
      language: "HTML",
      languageColor: "#e34c26",
      techStack: ["AutoCAD", "Drafting", "CAD Layouts"],
      stars: 1,
      forks: 0,
      issues: 0,
      watchers: 1,
      updated: "recently",
      github: "https://github.com/DidarAlif/Autocad-works",
      live: "",
      pinned: false,
      topics: ["autocad", "cad", "drafting", "schematics"],
      visibility: "Public",
      year: "2023",
    }
  ],

  // Documentation / research repos shown in Projects tab
  documentationRepos: [
    {
      id: "OWASP-Aligned-Web-API-Penetration-Testing-of-Multi-Tenant-SaaS-Platform",
      title: "OWASP-Aligned Web & API Penetration Testing of Multi-Tenant SaaS Platform",
      description:
        "Full-scope authenticated and unauthenticated VAPT audit report of a multi-tenant web application (Vue.js, Ruby on Rails, Auth0). Highlights discovery and remediation of 22 findings.",
      category: "Security Research",
      tags: ["VAPT", "OWASP WSTG", "API Security", "Penetration Testing"],
      techStack: ["Vue.js", "Ruby on Rails", "Auth0", "Burp Suite", "Nmap", "OWASP ZAP", "Docker"],
      readTime: "15 min",
      date: "2025",
    },
    {
      id: "Cyber-Security-Project-Report-on-Vulnerability-Assessment-ang-Penetration-Testing-",
      title: "Cyber Security Project Report on Vulnerability Assessment & Penetration Testing",
      description:
        "Comprehensive report on automated and manual vulnerability assessment and penetration testing following NIST guidelines. Detailed proof of concept and remediation recommendations.",
      category: "Security Research",
      tags: ["VAPT", "NIST", "Security Audit", "Remediation"],
      techStack: ["Nmap", "Metasploit", "Nessus", "Wireshark", "Burp Suite", "SQLMap", "Linux"],
      readTime: "20 min",
      date: "2025",
    },
    {
      id: "ADVANCE-DATABASE-MANAGEMENT-SYSTEM-Project",
      title: "Advanced Database Management System (ADMS) Superstore Management Report",
      description:
        "Technical report and schema documentation for a high-performance superstore management database design. Focuses on advanced database patterns and optimized query design.",
      category: "Documentation",
      tags: ["ADMS", "PostgreSQL", "Database Design", "SQL"],
      techStack: ["PostgreSQL", "SQL", "PL/pgSQL", "ER Diagrams", "pgAdmin"],
      readTime: "25 min",
      date: "2024",
    },
    {
      id: "Object-oriented-analysis-and-design-project",
      title: "Object-Oriented Analysis and Design (OOAD) Project Report",
      description:
        "Comprehensive analysis and system architecture report design using UML diagrams, design patterns, and OOP principles to build scalable software blueprints.",
      category: "Documentation",
      tags: ["OOAD", "Software Architecture", "UML", "Design Patterns"],
      techStack: ["Java", "UML", "StarUML", "Design Patterns", "OOP"],
      readTime: "18 min",
      date: "2024",
    },
  ],

  skills: {
    "Cybersecurity & VAPT": [
      { name: "Vulnerability Assessment", level: 92 },
      { name: "Penetration Testing", level: 90 },
      { name: "OWASP WSTG 4.2", level: 85 },
      { name: "OWASP API Top 10", level: 88 },
      { name: "MITRE CWE", level: 82 },
      { name: "CVSS v3.1", level: 85 },
      { name: "Security Auditing", level: 87 },
      { name: "Threat Intelligence", level: 80 },
      { name: "Risk Assessment", level: 82 },
    ],
    "Security Tools": [
      { name: "Burp Suite", level: 92 },
      { name: "Nuclei", level: 82 },
      { name: "Nmap", level: 95 },
      { name: "Metasploit", level: 90 },
      { name: "Nessus", level: 88 },
      { name: "Wireshark", level: 90 },
      { name: "SQLMap", level: 85 },
      { name: "Katana", level: 80 },
      { name: "Dirsearch", level: 82 },
      { name: "Gobuster", level: 85 },
      { name: "OWASP ZAP", level: 87 },
      { name: "OpenVAS", level: 78 },
    ],
    "Programming & Scripting": [
      { name: "Python", level: 92 },
      { name: "Ruby", level: 60 },
      { name: "PHP", level: 75 },
      { name: "JavaScript", level: 88 },
      { name: "C++", level: 68 },
      { name: "Java", level: 70 },
      { name: "C#", level: 65 },
      { name: "Bash", level: 90 },
    ],
    "Web & Frameworks": [
      { name: "Ruby on Rails", level: 55 },
      { name: "Next.js", level: 82 },
      { name: "FastAPI", level: 88 },
      { name: "Vue.js", level: 65 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 82 },
      { name: "HTML/CSS", level: 90 },
      { name: "REST APIs", level: 88 },
    ],
    "Databases & Systems": [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 78 },
      { name: "Oracle", level: 70 },
      { name: "Docker", level: 85 },
      { name: "VMware", level: 80 },
      { name: "VirtualBox", level: 82 },
      { name: "Linux", level: 95 },
      { name: "Windows Server", level: 75 },
    ],
    Networking: [
      { name: "Cisco Routers/Switches", level: 88 },
      { name: "VLANs", level: 92 },
      { name: "OSPF", level: 85 },
      { name: "NAT", level: 90 },
      { name: "TCP/IP", level: 95 },
      { name: "Network Security", level: 92 },
      { name: "Firewall Configuration", level: 88 },
    ],
    Specializations: [
      { name: "Web Application Security", level: 92 },
      { name: "API Security", level: 90 },
      { name: "Network Security", level: 92 },
      { name: "Cloud Security", level: 80 },
      { name: "IoT Security", level: 78 },
      { name: "VANETs", level: 85 },
      { name: "SDN/NF", level: 82 },
    ],
  },

  certifications: [
    {
      id: "meti-japan",
      name: "Internship in Japan for AI and Tech Talent",
      issuer: "METI Govt. Japan",
      date: "December 2025",
      credentialId: "METI-JAPAN-AI-2025",
      verifyUrl: "#",
      color: "#FF7B72",
      icon: "🇯🇵",
    },
    {
      id: "ccna",
      name: "CCNA (Course Completion)",
      issuer: "Cisco Networking Academy",
      date: "October 2025",
      credentialId: "CISCO-CCNA-2025",
      verifyUrl: "#",
      color: "#58A6FF",
      icon: "🌐",
    },
    {
      id: "practical-ethical-hacking",
      name: "Practical Ethical Hacking",
      issuer: "Udemy",
      date: "September 2025",
      credentialId: "UDEMY-PEH-2025",
      verifyUrl: "#",
      color: "#7EE787",
      icon: "🛡️",
    },
    {
      id: "ai-cybersecurity",
      name: "AI-Driven Cybersecurity",
      issuer: "Udemy",
      date: "September 2025",
      credentialId: "UDEMY-AI-SEC-2025",
      verifyUrl: "#",
      color: "#BC8CFF",
      icon: "🤖",
    },
    {
      id: "senselearner-intern",
      name: "Cyber Security Internship",
      issuer: "Senselearner Technologies",
      date: "November 2023",
      credentialId: "SL-SEC-INT-2023",
      verifyUrl: "#",
      color: "#F0883E",
      icon: "💼",
    },
    {
      id: "du-iit-intern",
      name: "Cyber Security Internship",
      issuer: "University of Dhaka (IIT)",
      date: "October 2023",
      credentialId: "DU-IIT-SEC-2023",
      verifyUrl: "#",
      color: "#58A6FF",
      icon: "🏫",
    },
    {
      id: "cisco-network-support",
      name: "Network Support & Security",
      issuer: "Cisco Networking Academy",
      date: "October 2023",
      credentialId: "CISCO-NET-SUP-2023",
      verifyUrl: "#",
      color: "#7EE787",
      icon: "🔒",
    },
    {
      id: "cisco-net-basics",
      name: "Network Basics",
      issuer: "Cisco Networking Academy",
      date: "October 2023",
      credentialId: "CISCO-NET-BAS-2023",
      verifyUrl: "#",
      color: "#BC8CFF",
      icon: "🔌",
    },
  ],

  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering (CGPA: 3.81/4.00)",
      institution: "American International University-Bangladesh (AIUB)",
      period: "Graduated: April 2025",
      description:
        "Graduated with Magna Cum Laude academic honor. Awarded Dean's Honorable Mention 3 times for academic excellence. Merit-based academic scholarship recipient. Thesis: 'Hybrid Approach Towards Modernizing Efficient Vehicular Networks'.",
    },
  ],

  achievements: [
    "Graduated Magna Cum Laude with a CGPA of 3.81/4.00 from AIUB",
    "Selected for METI Government of Japan AI/IT Internship Program (Tokyo, Japan)",
    "Awarded Dean's Honorable Mention (3×) for academic excellence",
    "Developed ReconScience - an automated web VAPT platform using Next.js/FastAPI",
    "Conducted full-scope VAPT security audit on a multi-tenant SaaS platform, identifying 22 vulnerabilities",
  ],

  // Contribution graph data (52 weeks x 7 days)
  contributionData: generateContributions(),

  stats: {
    contributions: 154,
    currentStreak: 3,
    longestStreak: 12,
  },

  // Navbar features data
  navFeatures: {
    contributions: {
      title: "Contributions",
      items: [
        "Open-source security tools and automation script contributor",
        "Maintaining custom VAPT scanner utilities",
        "Active in repository script configuration and automation",
      ],
    },
    problemSolving: {
      title: "Problem Solving",
      items: [
        "VAPT audit of multi-tenant SaaS application (Vue.js, Rails, Auth0)",
        "Remediation of exposed debug consoles and IDOR in API endpoints",
        "Configuring secure network routing and VPN troubleshooting",
        "Security validation and incident escalation under CVSS frameworks",
      ],
    },
    toolkit: {
      title: "Toolkit",
      tools: [
        { name: "Burp Suite Pro", category: "Security" },
        { name: "Metasploit Framework", category: "Security" },
        { name: "Wireshark", category: "Network Analysis" },
        { name: "VS Code", category: "Development" },
        { name: "Neovim", category: "Editor" },
        { name: "Docker", category: "DevOps" },
        { name: "Zabbix", category: "Monitoring" },
        { name: "Kali Linux", category: "Security OS" },
      ],
    },
    research: {
      title: "Research & Blogs",
      items: [
        "VAPT Methodology for Web Applications & API Security",
        "Enterprise Network Security & VLAN Segmentation",
        "MITRE ATT&CK Mapping for Small-to-Medium Enterprises",
        "B.Sc. Thesis: Hybrid Approach Towards Modernizing Efficient Vehicular Networks",
      ],
    },
  },
};

function generateContributions(): number[][] {
  const weeks: number[][] = [];
  // Use a seeded pseudo-random for consistent SSR/client rendering
  let seed = 42;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  for (let w = 0; w < 52; w++) {
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      const rand = random();
      if (rand < 0.25) week.push(0);
      else if (rand < 0.5) week.push(1);
      else if (rand < 0.72) week.push(2);
      else if (rand < 0.88) week.push(3);
      else week.push(4);
    }
    weeks.push(week);
  }
  return weeks;
}

export type Repository = (typeof portfolioData.repositories)[number];
export type Experience = (typeof portfolioData.experience)[number];
export type Certification = (typeof portfolioData.certifications)[number];
export type DocumentationRepo =
  (typeof portfolioData.documentationRepos)[number];
