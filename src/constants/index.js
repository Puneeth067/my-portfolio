import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  postgresql,
  tailwind,
  cpp,
  python,
  pandas,
  numpy,
  matplotlib,
  tensorflow,
  scikit_learn,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  novigo,
  mlsa,
  dreamforge,
  acad,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI/ML Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "Matplotlib",
    icon: matplotlib,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "scikit-learn",
    icon: scikit_learn,
  },
];

const experiences = [  
  {
    title: "Innoventure Internship",
    company_name: "Novigo Solutions",
    iconBg: "#E6DEDD",
    date: "October 9, 2023 - November 4, 2023",
    points: [
      "Completed internship program focused on Sentiment Analysis.",
      "Involved in collecting and cleaning data (removing noise, special characters, URLs, and stopwords), normalizing it (lowercasing, expanding contractions, handling negations, and correcting spelling), tokenizing, applying stemming or lemmatization, managing emojis and imbalanced datasets, extracting features (using methods like Bag of Words, TF-IDF, or embeddings), and splitting the processed data into training, validation, and testing sets."
    ],
    icon: novigo,
  },
  {
    title: "MLSA Web Lead",
    company_name: "Sahyadri College Of Engineering and Management",
    iconBg: "#383E56",
    date: "2021 - Present",
    points: [
      "Collaborated with peers to organize and promote Microsoft events on campus.",
      "Assisted in organizing workshops, webinars, to encourage technical skill development.",
    ],
    icon: mlsa,
  },
];

const projects = [
  {
    name: "DreamForge",
    description: "A user-friendly web application connecting creators (skilled professionals) with patrons (clients seeking creative talent).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
      {
        name: "supabase",
        color: "blue-text-gradient",
      },
    ],
    image: dreamforge,
    source_code_link: "https://github.com/Puneeth067/UpLiftAI-DreamForge",
  },
  {
    name: "AcademiCalPro",
    description: "An automated web application to streamline university timetable creation and resource allocation using Genetic Algorithms.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
    ],
    image: acad, 
    source_code_link: "https://github.com/Puneeth067/scheduloom",
  },
  
];

export { services, technologies, experiences, projects };