import {
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";

import img7 from './Portfolio_Images/AC-Hack.webp'
import img8 from './Portfolio_Images/Code-for-good.webp'
import img9 from './Portfolio_Images/Kingdom-Code.jpg'
import img10 from './Portfolio_Images/My project-1 (2).jpg'
import img11 from './Portfolio_Images/IC Hack.jpeg'
import img15 from './Portfolio_Images/ICHack.jpeg'
import topicTutor from './Portfolio_Images/TopicTutor.png'
import img17 from './Portfolio_Images/AstonHack.png'
import img18 from './Portfolio_Images/AI_Hackathon.jpeg'
import img19 from './Portfolio_Images/Random-Bible-Verse-Generator.png'
import img20 from './Portfolio_Images/video-to-mp3.png'
import img22 from './Portfolio_Images/Price_tracker.webp'
import img23 from './Portfolio_Images/HackTheBurgh.png'
import Algothon from './Portfolio_Images/Algothon.jpg'
import ManGroup from './Portfolio_Images/ManGroup.png'
import ICHack2025 from './Portfolio_Images/ICHack_2025.png'

export const Skills = {
  languages: ["Java", "Python", "Golang", "TypeScript", "C++"],
  technologies: ["MySQL", "Kafka", "Docker", "Spring", "React", "PostgreSQL", "Redis", "RabbitMQ", "gRPC", "Kubernetes"],
};

export const Experience = [
  {
    id: 1,
    date: "June 2025 — Present",
    badge: "HS",
    badgeColor: "#ff7a59",
    logoKey: "hubspot",
    company: "HubSpot",
    title: "Software Engineer",
    location: "London, UK",
    bullets: [
      "Reduced cross-region request latency by 50% migrating a critical playlist service to multi-region architecture as sole backend owner, executing a zero-downtime distributed ID migration, REST-to-RPC transition, and Kafka-based synchronisation.",
      "Built a data validation framework to verify a 1.7B row user progress migration, creating a 4-module evaluation suite with a field-level comparator engine achieving a 99.95% match rate across 168K+ compared records.",
      "Built an AI-powered playlist generation feature enabling trainers to create personalised learning paths from natural language prompts, designing a content search RPC endpoint with parallel async search strategy for mixed-content edge cases.",
    ],
  },
  {
    id: 2,
    date: "June 2024 — August 2024",
    badge: "MS",
    badgeColor: "#1e40af",
    logoKey: "morganstanley",
    company: "Morgan Stanley",
    title: "Software Engineer Intern",
    location: "London, UK",
    bullets: [
      "Developed a Non-Production Environment Dashboard using Angular and Java/Spring Boot APIs, enhancing observability for 450+ developers across 40+ teams.",
      "Integrated Jenkins jobs to automate periodic data retrieval from an in-house container system, ensuring real-time status updates across DEV, UAT, and QA environments.",
    ],
  },
  {
    id: 7,
    date: "July 2023 — June 2024",
    badge: "HP",
    badgeColor: "#0ea5e9",
    logoKey: "hpe",
    company: "Hewlett Packard Enterprise",
    title: "Software Engineer Intern",
    location: "Bristol, UK",
    bullets: [
      "Designed and implemented the update announcement feature with a REST API endpoint using Golang, achieving 80% test coverage.",
      "Engineered the publish announcement feature integrating a Golang-based gRPC server adapter with over 80% test coverage.",
      "Enhanced deployment reliability through Docker images for functional tests and Jenkins-automated build and push processes.",
    ],
  },
  {
    id: 8,
    date: "March 2023 — April 2023",
    badge: "JP",
    badgeColor: "#374151",
    logoKey: "jpmorgan",
    company: "JP Morgan Chase",
    title: "Software Engineer — Spring Intern",
    location: "London, UK",
    bullets: [
      "Led front-end development using React and TailwindCSS for a web app targeting UN Goal 4, integrating multiple APIs as part of a team of five.",
    ],
  },
  {
    id: 10,
    date: "July 2022 — August 2022",
    badge: "FM",
    badgeColor: "#2563eb",
    logoKey: "ford",
    company: "Ford Motor Company",
    title: "Software Engineer Intern",
    location: "London, UK",
    bullets: [
      "Architected a 4DX racing game for Ford's Sync System using Unity, C#, Python, and C/C++, achieving a 60% reduction in latency through low-level programming optimisations.",
      "Implemented advanced graphics rendering techniques resulting in a 40% improvement in frame rates.",
    ],
  },
];

export const Projects = [
  {
    id: 1,
    name: "Agentic Bidding Platform",
    imageSrc: null,
    placeholderLabel: "Go · RabbitMQ · Redis",
    description: "A distributed, microservices-based AI bidding platform using Go with dedicated services for auctions, bidding, and autonomous bot agents. Architected an autonomous bot agent service that monitors real-time auction snapshots and executes strategic bids based on personality-specific logic and remaining budget.",
    techs: "Golang, Google ADK, PostgreSQL, RabbitMQ, Redis, React",
    github: "https://github.com/Osireg17/AI-Bidding-Platform",
  },
  {
    id: 2,
    name: "AI Code Reviewer",
    imageSrc: null,
    placeholderLabel: "FastAPI · Pinecone · LangChain",
    description: "An event-driven code review system using FastAPI and GitHub webhooks, integrating a tool-calling agent to autonomously analyse code changes and provide pull request suggestions. Integrated a vector database using Pinecone and OpenAI embeddings to create a searchable knowledge base of coding standards with semantic search across multiple languages.",
    techs: "FastAPI, Pydantic, Pinecone, LangChain, OpenAI, Redis",
    github: "https://github.com/Osireg17/AI-Code-Reviewer",
  },
  {
    id: 3,
    name: "Kingdom Code",
    imageSrc: img9,
    placeholderLabel: null,
    description: "A self-improving AI content generation system integrating OpenAI API with an automated feedback loop, enabling prompt regeneration based on user sentiment and reducing poor-quality AI responses. Architected ReadServiceV2 with Bolls.Life API integration and comprehensive caching strategy for consistent scripture content delivery.",
    techs: "Kotlin, Spring Boot, OpenAI API, Redis, PostgreSQL",
    github: "https://github.com/Osireg17",
  },
  {
    id: 4,
    name: "Fellow",
    imageSrc: img10,
    placeholderLabel: null,
    description: "A social media app where Christians can ask questions about their faith and share their own perspectives on scripture. Built with React Native and Firebase, available via early access sign-up.",
    techs: "React Native, Firebase, TypeScript, Google Cloud Platform",
    github: "https://fellow-web.vercel.app/",
  },
  {
    id: 5,
    name: "Youtube Video to Audio Converter",
    imageSrc: img20,
    placeholderLabel: null,
    description: "A microservice application that converts YouTube videos to MP3 files. Three services handle authentication, conversion, and download respectively, communicating via RabbitMQ with Kubernetes orchestration.",
    techs: "Python, Flask, Docker, Kubernetes, MySQL, MongoDB, RabbitMQ",
    github: "https://github.com/Osireg17/Youtube-Converter",
  },
  {
    id: 6,
    name: "Topic Tutor",
    imageSrc: topicTutor,
    placeholderLabel: null,
    description: "A web application that generates personalised courses from user-specified topics. Uses the YouTube API and OpenAI to curate relevant videos, transcripts, questions, and notes. Developed at AstonHack9 and the AI Encode Hackathon.",
    techs: "Next.js, TypeScript, Docker, PostgreSQL, OpenAI API, Prisma, NextAuth",
    github: "https://www.topictutor.co.uk",
  },
  {
    id: 7,
    name: "Bible Verse Image Generator",
    imageSrc: img19,
    placeholderLabel: null,
    description: "A web application that generates downloadable images of Bible verses, combining the Bible API for verse content with the Unsplash API for background images.",
    techs: "Next.js, TypeScript, Bible API, AWS Amplify, Unsplash API",
    github: "https://prod.d3bl58w44ip2gh.amplifyapp.com/",
  },
  {
    id: 8,
    name: "Amazon Price Tracker",
    imageSrc: img22,
    placeholderLabel: null,
    description: "A Django web application that tracks prices of Amazon products through web scraping, alerting users when prices drop to their target threshold.",
    techs: "Python, Django, SQLite",
    github: "https://github.com/Osireg17/Amazon-Price-Tracker",
  },
];

export const Hackathons = [
  {
    id: 1,
    name: "Imperial ACS Hackathon 2023",
    imageSrc: img7,
    description: "Developed a web application to track mood and suggest activities to improve it throughout the day.",
    techs: "React, Apache Spark, Python, Flask, TensorFlow, PyTorch",
  },
  {
    id: 2,
    name: "JP Morgan Code for Good 2023",
    imageSrc: img8,
    description: "Won the JP Morgan Code for Good Hackathon, building a social media app for a more inclusive experience for deafblind people.",
    techs: "Flutter, Firebase, Dart, Google APIs",
  },
  {
    id: 3,
    name: "Kingdom Code: Build 2023",
    imageSrc: img9,
    description: "1st place. Built a web application to help foodbanks organise inventory and track donations.",
    techs: "React, TypeScript, GraphQL, Strapi, PostgreSQL",
  },
  {
    id: 4,
    name: "IC Hack 2023",
    imageSrc: img11,
    description: "Top 10 in the Optiver Sponsor Challenge. Built a statistical arbitrage trading bot using historical stock data and machine learning on AWS EC2.",
    techs: "Python, NumPy, Pandas, Optibook API",
  },
  {
    id: 5,
    name: "Kingdom Code: Build 2024",
    imageSrc: img10,
    description: "Returned as project lead for a team of 5, refactoring and redesigning the UI of a mobile application and implementing a real-time chat feature.",
    techs: "React Native, Firebase, TypeScript, Google Cloud Platform",
  },
  {
    id: 6,
    name: "IC Hack 2024",
    imageSrc: img15,
    description: "Top 5 in the Marshall Wace Sponsor Challenge. Built 'QuizQPT', a web app generating on-demand past papers for teachers and students. Led development of the DSL interpreter transforming text prompts into diagrams.",
    techs: "React, TypeScript, Supabase, GPT-4, Express.js",
  },
  {
    id: 7,
    name: "AstonHack 9",
    imageSrc: img17,
    description: "Started building Topic Tutor — a full-stack application generating personalised courses from user-specified topics using the YouTube API and OpenAI.",
    techs: "Next.js, Prisma, OpenAI, YouTube API, MySQL",
  },
  {
    id: 8,
    name: "HackTheBurgh 2024",
    imageSrc: img23,
    description: "Won the Optiver challenge. Engineered a trading bot using sentiment analysis to dynamically adapt to abrupt market fluctuations triggered by news events.",
    techs: "Python, Pandas, NumPy, Optibook API",
  },
  {
    id: 9,
    name: "Encode Club AI Hackathon",
    imageSrc: img18,
    description: "Extended Topic Tutor solo, adding a quiz feature to test understanding of YouTube videos and a summary feature.",
    techs: "Next.js, Prisma, OpenAI, YouTube API, MySQL",
  },
  {
    id: 10,
    name: "Man Group Open Source Hackathon 2024",
    imageSrc: ManGroup,
    description: "Contributed to finmarketpy (a Python backtesting library) and findatapy (a market data download library), writing unit tests for the backtestengine.",
    techs: "Python, finmarketpy, findatapy",
  },
  {
    id: 11,
    name: "Algothon 2024",
    imageSrc: Algothon,
    description: "Competed in a portfolio allocation challenge, maximising performance by strategically allocating funds across a range of investment strategies.",
    techs: "Python, NumPy, Pandas",
  },
  {
    id: 12,
    name: "IC Hack 2025",
    imageSrc: ICHack2025,
    description: "Participated in Optiver's market making challenge, building an algorithmic trading system for semiconductor stocks and ETFs across US and EU markets. Implemented automated arbitrage strategies, market making logic, and risk parameter management.",
    techs: "Python, NumPy, Pandas, Optibook API",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textPrimary text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/Osireg17",
  },
  {
    id: 2,
    iconSrc: (
      <IoLogoLinkedin className="text-accent text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/osiobomighie/",
  },
];
