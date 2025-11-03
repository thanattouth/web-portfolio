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
    title: 'Project 1: ',
    challenge: 'description',
    action: 'description',
    result: 'description',
    tags: ['React', 'Node.js', 'GCP'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    type: 'breadth',
    title: 'Project 2: ',
    challenge: 'description',
    action: 'description',
    result: 'description',
    tags: ['Python', 'Flask', 'Docker'],
    githubUrl: '#',
  },
  // --- DEPTH PROJECTS ---
  {
    type: 'depth',
    title: 'Project 3: ',
    challenge: 'description',
    action: 'description',
    result: 'description',
    tags: ['Pentesting', 'Kali Linux', 'CTF'],
    writeupUrl: '#',
  },
  {
    type: 'depth',
    title: 'Project 4: ',
    challenge: 'description',
    action: 'description',
    result: 'description',
    tags: ['Security Audit', 'OWASP'],
    githubUrl: '#', 
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