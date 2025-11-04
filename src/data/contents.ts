// ===================================
// 1. PROJECT DATA
// ===================================
export interface Project {
  type: 'breadth' | 'depth';
  title: string;
  challenge: string;
  action: string;
  result: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  writeupUrl?: string;
}

// นี่คือ "ฐานข้อมูลกลาง" ของโปรเจกต์ทั้งหมด
export const allProjects: Project[] = [
  // --- BREADTH PROJECTS ---
  {
    type: 'breadth',
    title: 'University Online Registration System',
    challenge: 'This was my first project acting as a formal Project Manager. The primary challenge was to establish a functional agile workflow for the team, manage the entire development lifecycle, and be the main presenter for all project milestones.',
    action: 'I served as the PM, defining sprints and managing tasks. Concurrently, I was a full-stack developer, building critical front-end components for student registration and the back-end APIs for course management.',
    result: 'Successfully delivered a functional system within the academic deadline. This role was pivotal in solidifying my ability to lead a technical team, manage scope, and translate complex engineering processes into clear business presentations.',
    tags: ['Project Management', 'Full-Stack', 'Software Engineering', 'Agile', 'Scum'],
    githubUrl: 'https://github.com/thanattouth/cs261-group5-650001'
  },
  {
    type: 'breadth',
    title: 'Route Optimization for Last-Mile Delivery',
    challenge: 'This was a highly complex initiative integrating two courses: Big Data Engineering and Cloud-Base Software Architecture. The challenge was twofold: 1) Designing a sophisticated algorithm for route optimization, and 2) Architecting a scalable, well-architected cloud system to process and pipeline real-time traffic data.',
    action: 'As Project Manager, I designed the end-to-end system architecture and data pipelines. As the back-end developer, I was responsible for engineering the data ingestion process, developing the logic to derive traffic insights, and implementing the core optimization algorithm.',
    result: 'This project was a deep dive into managing high-complexity systems. It proved my ability to not only design a robust, well-architected cloud solution but also to execute the deep, algorithmic back-end work, all while leading the team through concurrent technical discovery and learning.',
    tags: ['Cloud Architecture', 'Big Data', 'System Design', 'Project Management', 'Algorithm'],
    githubUrl: 'https://github.com/phuwalit6609650590/CS341-CS361_LastMile'
  },
  // --- DEPTH PROJECTS ---
  {
    type: 'depth',
    title: 'Self-Driven Learning: TryHackMe (THM) Challenges',
    challenge: 'To move beyond academic theory and gain practical, hands-on offensive and defensive security skills in realistic, sandboxed environments.',
    action: 'I dedicate consistent time to completing THM Learning Paths, focusing on real-world scenarios like network penetration testing, web application vulnerabilities (OWASP), and privilege escalation.',
    result: 'This continuous, self-motivated effort sharpens my technical skills daily, keeping me current with emerging threats and providing a practical foundation for the "attacker mindset" that theory alone cannot.',
    tags: ['Self-Learning', 'Offensive Security', 'TryHackMe', 'Hands-On'],
  },
  {
    type: 'depth',
    title: 'Competition: AWS x SANS Capture the Flag (CTF)',
    challenge: 'To test my practical skills against industry professionals and peers in a high-pressure, live-fire environment hosted by two industry leaders (AWS and SANS).',
    action: 'I competed in the intensive, multi-day event, tackling challenges across cloud security, forensics, incident response, and offensive security within a complex AWS environment.',
    result: 'Achieved 31st place (overall) and ranked within the Top 20 for Thailand. As a reward, I was awarded the SANS Skill Quest by NetWars, validating my hands-on capabilities against a global standard.',
    tags: ['CTF', 'Offensive Security', 'SANS', 'Competition', 'Incident Response'],
  },
  // ▼▼▼ เพิ่มโปรเจกต์ที่ 5, 6, 7... ที่นี่ได้เลย ▼▼▼
  // {
  //   type: 'breadth',
  //   title: 'Project 5: My New Awesome Project',
  //   ...
  // },
];

// ===================================
// 2. CERTIFICATE DATA
// ===================================
export interface Certificate {
  title: string;
  issuer: string; // ผู้ออก
  date: string; // วันที่ได้รับ
  credentialUrl?: string; // ลิงก์ไปที่ Credly/etc.
  tags: string[]; // เช่น 'Cloud', 'Security'
}

// ฐานข้อมูลเกียรติบัตร
export const allCertificates: Certificate[] = [
  {
    title: 'AWS Certified Security - Specialty',
    issuer: 'Amazon Web Services',
    date: 'Oct 2025',
    credentialUrl: '#',
    tags: ['Cloud', 'Security'],
  },
  {
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    date: 'Jun 2025',
    credentialUrl: '#',
    tags: ['Security', 'Offensive'],
  },
  {
    title: 'Google Cloud Professional Cloud Architect',
    issuer: 'Google Cloud',
    date: 'Jan 2025',
    credentialUrl: '#',
    tags: ['Cloud', 'Generalist'],
  },
  // ▼▼▼ เพิ่มเกียรติบัตรอื่นๆ ที่นี่ ▼▼▼
];