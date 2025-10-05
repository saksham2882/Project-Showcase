export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  features?: string[];
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Job Tracker",
    description:
      "A full-stack application designed to manage and track job applications, featuring an interactive dashboard and a robust backend.",
    techStack: ["React", "Node.js", "Tailwind CSS", "Chart.js", "Nodemailer", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/saksham2882/Job-Tracker",
    liveUrl: "https://trackmyjobs.vercel.app",
    imageUrl: "/JobTracker.png",
    features: [
      "Secure user authentication with JWT",
      "Interactive dashboard with job statistics",
      "Calendar for deadlines and interviews",
    ],
  },
  {
    id: "2",
    title: "LeetCode Learning Assistant",
    description:
      "A Chrome extension to enhance the LeetCode problem-solving approach with smart, AI-powered guidance that helps in logic building.",
    techStack: ["JavaScript", "HTML", "CSS", "Gemini API", "Chrome Extension APIs"],
    githubUrl: "https://github.com/saksham2882/LeetCode-Learning-Assistant",
    liveUrl: "https://www.youtube.com/embed/OhWyguzOLOg?si=54sRyTs6AMWr44Ag",
    imageUrl: "/Leetcode-Learning-Assistant.png",
    features: [
      "AI-powered step-by-step problem guidance",
      "Seamless integration with LeetCode",
      "Concise hints to spark logical thinking",
    ],
  },
  {
    id: "3",
    title: "Yummigoo - MERN Food App",
    description:
      "A full-stack food ordering platform featuring secure authentication, category-wise menu browsing, cart management, and a seamless checkout experience.",
    techStack: ["React", "Node.js", "MongoDB", "Express.js", "Stripe", "JWT"],
    githubUrl: "https://github.com/saksham2882/mern-food-app",
    liveUrl: "https://mern-food-app-zeta.vercel.app",
    imageUrl: "/Yummigoo.png",
    features: [
      "Dynamic menu with category filtering",
      "Real-time cart synchronization",
      "Secure Stripe payment integration",
    ],
  },
  {
    id: "4",
    title: "Mood Chat: Real-Time Chat App",
    description:
      "A fully real-time MERN chat app enabling random user chatting via WebSocket & Socket.io, shows online users with live status, and offers searching for smooth chat experience.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express.js", "Tailwind CSS"],
    githubUrl: "https://github.com/saksham2882/mern-chat-app",
    liveUrl: "https://moodchat.vercel.app",
    imageUrl: "/MoodChat.png",
    features: [
      "Real-time messaging with Socket.io",
      "Online user indicator with live status",
      "Chat search and history",
    ],
  },
  {
    id: "5",
    title: "Trend Bazaar",
    description:
      "A stylish front-end fashion e-commerce website focused on UI/UX and seamless user interaction, built using HTML, CSS, and JavaScript.",
    techStack: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    githubUrl: "https://github.com/saksham2882/e-commerce-trend-bazaar",
    liveUrl: "https://mytrendbazaar.vercel.app",
    imageUrl: "/TrendBazaar.png",
    features: [
      "Responsive design for all devices",
      "Dynamic auto-scrolling slideshow",
      "Dark/light theme toggle",
    ],
  },
  {
    id: "6",
    title: "Prime Feed",
    description:
      "A frontend React news application that shows news using the NewsAPI, and includes features like search and category filtering.",
    techStack: ["React", "News API", "CSS", "Vite"],
    githubUrl: "https://github.com/saksham2882/react-news-app",
    imageUrl: "/PrimeFeed.png",
    features: [
      "Search by keywords functionality",
      "Clean and responsive UI",
      "Category-based filtering (Tech, Business, etc.)",
    ],
  },
  {
    id: "7",
    title: "Sky Hint - Weather Dashboard",
    description:
      "A beautiful weather dashboard with forecasts, hourly data, location-based weather, and next 7-days data.",
    techStack: ["React", "JavaScript", "OpenWeather API", "Tailwind CSS"],
    githubUrl: "https://github.com/saksham2882/weather-info",
    liveUrl: "https://skyhint.vercel.app",
    imageUrl: "/SkyHint.png",
    features: [
      "7-day weather forecast",
      "Location search and favorites",
      "Interactive weather Dashboard",
    ],
  },
];
