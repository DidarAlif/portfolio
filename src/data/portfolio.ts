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
      id: "nfv-system",
      name: "nfv-system",
      description:
        "Network Function Virtualization orchestration system with dynamic service chaining and real-time telemetry.",
      longDescription:
        "Enterprise-grade NFV orchestrator managing the lifecycle of virtualized network functions. Supports dynamic service function chaining, auto-scaling, and comprehensive network telemetry.",
      language: "Go",
      languageColor: "#00ADD8",
      techStack: ["Go", "gRPC", "React", "Redis", "Prometheus", "OpenStack"],
      stars: 85,
      forks: 21,
      issues: 5,
      watchers: 28,
      updated: "1 week ago",
      github: "https://github.com/DidarAlif/nfv-system",
      live: "",
      pinned: true,
      topics: ["networking", "nfv", "orchestration", "golang"],
      visibility: "Public",
      year: "2026",
    },
    {
      id: "reconscience",
      name: "reconscience",
      description:
        "An intelligent reconnaissance framework for red team operations. Automates discovery and enumeration of attack surfaces with AI-powered analysis.",
      longDescription:
        "Reconscience combines traditional OSINT techniques with machine learning to intelligently discover, enumerate, and prioritize potential attack vectors. Features automated subdomain discovery, port scanning with service fingerprinting, web technology detection, and AI-driven risk scoring.",
      language: "Python",
      languageColor: "#3572A5",
      techStack: [
        "Python",
        "FastAPI",
        "React",
        "PostgreSQL",
        "Docker",
        "Nmap",
        "AI/ML",
      ],
      stars: 48,
      forks: 12,
      issues: 3,
      watchers: 15,
      updated: "2 days ago",
      github: "https://github.com/DidarAlif/reconscience",
      live: "",
      pinned: true,
      topics: ["security", "recon", "osint", "red-team", "python"],
      visibility: "Public",
      year: "2025",
    },
    {
      id: "threat-intel-dashboard",
      name: "threat-intel-dashboard",
      description:
        "Real-time threat intelligence aggregation dashboard with automated IOC enrichment and MITRE ATT&CK mapping.",
      longDescription:
        "A centralized threat intelligence platform that ingests data from OSINT feeds and honeypots. Automatically correlates IOCs and maps threats to MITRE ATT&CK techniques.",
      language: "TypeScript",
      languageColor: "#3178C6",
      techStack: [
        "TypeScript",
        "Next.js",
        "Python",
        "Elasticsearch",
        "Kafka",
        "D3.js",
      ],
      stars: 63,
      forks: 15,
      issues: 2,
      watchers: 20,
      updated: "3 weeks ago",
      github: "https://github.com/DidarAlif/threat-intel",
      live: "https://threat-intel.demo.dev",
      pinned: true,
      topics: ["security", "threat-intel", "dashboard", "mitre-attack"],
      visibility: "Public",
      year: "2025",
    },
    {
      id: "ai-platform",
      name: "ai-platform",
      description:
        "A modular AI platform for building, training, and deploying ML models with visual pipeline builder.",
      longDescription:
        "Built to democratize AI deployment with drag-and-drop pipeline builder, automated hyperparameter tuning, model versioning, and seamless deployment.",
      language: "TypeScript",
      languageColor: "#3178C6",
      techStack: [
        "TypeScript",
        "Next.js",
        "Python",
        "TensorFlow",
        "Kubernetes",
        "gRPC",
      ],
      stars: 127,
      forks: 34,
      issues: 8,
      watchers: 42,
      updated: "5 days ago",
      github: "https://github.com/DidarAlif/ai-platform",
      live: "https://ai-platform.demo.dev",
      pinned: true,
      topics: ["ai", "machine-learning", "typescript", "nextjs"],
      visibility: "Public",
      year: "2025",
    },
    {
      id: "port-scanner",
      name: "fast-port-scanner",
      description:
        "High-performance async port scanner with service fingerprinting and banner grabbing.",
      longDescription:
        "Blazing fast port scanner using async I/O. Supports TCP/UDP scanning, service version detection, OS fingerprinting, and multi-format export.",
      language: "Rust",
      languageColor: "#DEA584",
      techStack: ["Rust", "Tokio", "Serde"],
      stars: 34,
      forks: 8,
      issues: 1,
      watchers: 10,
      updated: "1 month ago",
      github: "https://github.com/DidarAlif/fast-port-scanner",
      live: "",
      pinned: false,
      topics: ["rust", "security", "networking", "scanner"],
      visibility: "Public",
      year: "2025",
    },
    {
      id: "dotfiles",
      name: "dotfiles",
      description:
        "Personal development environment configs. Neovim, tmux, zsh, and security tool configurations.",
      longDescription:
        "Curated collection of dotfiles for a productive security-focused development environment.",
      language: "Shell",
      languageColor: "#89E051",
      techStack: ["Shell", "Lua", "Vim Script"],
      stars: 22,
      forks: 5,
      issues: 0,
      watchers: 8,
      updated: "2 months ago",
      github: "https://github.com/DidarAlif/dotfiles",
      live: "",
      pinned: false,
      topics: ["dotfiles", "neovim", "linux", "config"],
      visibility: "Public",
      year: "2024",
    },
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
