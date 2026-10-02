export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  githubUrl: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "aura-lift",
    name: "Aura-Lift",
    description: "A fitness-focused mobile application designed to help users track and manage their workout activities, built as part of my exploration into mobile application development.",
    tags: ["Dart", "Flutter"],
    githubUrl: "https://github.com/Subhodip57/Aura-Lift",
    category: "Mobile Application"
  },
  {
    id: "bella-torta",
    name: "Bella Torta",
    description: "A collaborative bakery e-commerce project focused on creating a modern online shopping experience for bakery products, with an emphasis on interactive web functionality and user experience.",
    tags: ["HTML", "Tailwind CSS", "AJAX"],
    githubUrl: "https://github.com/Subhodip57/Bella-Torta",
    category: "E-Commerce / Web"
  },
  {
    id: "hardware-iot",
    name: "Hardware & IoT Projects",
    description: "A collection of hardware experiments combining microcontrollers, electronics, and software to build practical automation and control projects, including ESP8266-based projects.",
    tags: ["ESP8266", "C/C++", "Python", "IoT", "Electronics"],
    githubUrl: "https://github.com/Subhodip57",
    category: "Hardware / IoT"
  },
  {
    id: "terminal-tetris",
    name: "Terminal Tetris",
    description: "A terminal-based Tetris implementation created to explore game logic, matrix transformations, randomized piece generation, and algorithmic programming.",
    tags: ["C++", "Algorithms", "Matrix Transformations"],
    githubUrl: "https://github.com/Subhodip57",
    category: "C++ / Algorithms"
  }
];

export const skills = {
  Programming: ["C", "Java", "Python", "TypeScript", "JavaScript"],
  Web: ["HTML", "CSS", "React", "Responsive Web Design"],
  Database: ["SQL", "DBMS", "Oracle", "MongoDB"],
  "Dev Tools": ["Git", "GitHub", "Linux", "VS Code"],
  Other: ["Flutter/Dart", "Manim", "IoT Fundamentals"]
};

export const journeyItems = [
  "Started Programming",
  "Learned C & Programming Fundamentals",
  "Java & Object-Oriented Programming",
  "DBMS & SQL",
  "Operating Systems",
  "Web Development",
  "React + TypeScript",
  "Mobile Development / IoT",
  "Building Real Projects"
];