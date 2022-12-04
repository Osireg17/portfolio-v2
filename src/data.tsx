import {
    IoCodeWorking,
    IoLogoGithub,
    IoLogoYoutube,
    IoLogoTwitter,
    IoLogoLinkedin,
    IoLogoWhatsapp,
    IoLogoJavascript,
    IoLogoPython,
    IoLogoReact,
    IoLogoNodejs,
} from "react-icons/io5";
import {FaBootstrap} from 'react-icons/fa'
import {DiMongodb} from 'react-icons/di'
import {SiExpress, SiOpencv, SiGraphql, SiMysql, SiTypescript} from 'react-icons/si'

//impot javascript from react-icons
import img1 from './Portfolio_Images/CashCow.jpg'
import img2 from './Portfolio_Images/NarutoNotions.jpg'
import img3 from './Portfolio_Images/Wordle Clone.jpg'
import img4 from './Portfolio_Images/Vivy.webp'
import img5 from './Portfolio_Images/NBA.jpg'
import img6 from './Portfolio_Images/Chat-App.webp'
  
export const Experience = [
    {
      id: 1,
      date: "July 2023 - June 2024",
      iconsSrc: <IoCodeWorking />,
      company: "Hewlett Packard Enterprise",
      title: "Incoming Software Engineer",
      location: "Bristol, UK",
      description:
        "Incoming Software Engineer Intern for Hewlett Packard Enterprise",
    },
    {
      id: 2,
      date: "October 2022 - Present",
      iconsSrc: <IoCodeWorking />,
      company: "Butterfly",
      title: "Software Engineer",
      location: "Coventry, UK",
      description:
        "I am currently working as a Software Engineer at Butterfly, a startup that is developing a social media platform for students to connect with each other and share their experiences. The app is currently only avaiable to Warwick University students but will be rolled out to other universities in the future."
    },
    {
      id: 3,
      date: "July 2022 - August 2022",
      iconsSrc: <IoCodeWorking />,
      company: "Ford Motors",
      title: "Software Engineer Intern",
      location: "London, UK",
      description:
        "I undertook a summer internship at Ford Motors where I worked with the rapid digital prototype team to develop a prototype for their In-Vehicle Entertainment Project. We built a working prototype of an arcade racing game using Unity and C#. The game is able to interact with the car's sensors and actuators, which is demoed using raspberry pi, arduino and websockets allowing the user to have the ultimate experience of racing the car.",
    },
    {
      id: 4,
      date: "June 2022 - July 2022",
      iconsSrc: <IoCodeWorking />,
      company: "Lloyds Banking Group",
      title: "Software Engineer Intern",
      location: "London, UK",
      description:
        "I undertook a spring week at Lloyds Banking Group, where I developed my knowledge on the Fintech industry. During, the spring week I used python to develop a program to analysis data of 12000 different simulated bank transactions and then presented any findings to a panel of Lloyds bank employees. I also worked in a group to develop a secure video chat application using the MERN stack which included 2 factor authentication using a random generated password.",
    },
    {
      id: 5,
      date: "July 2021 - August 2021",
      iconsSrc: <IoCodeWorking />,
      company: "Leonardo",
      title: "Technology Intern",
      location: "Remote",
      description:
        "During this experience with Leonardo, I undertook a project to use python to program a raspberry pi to control a small robot to move around a room without bumping into any obstacles. The robot was able to move around the room using a combination of the motors and the infrared sensors. I also shadowed senior software engineers to deepen my understanding of the software development process.",
    },
  ];
  
  export const Projects = [
    {
      id: 1,
      name: "Cash Cow",
      imageSrc: img1,
      techs: "Javascript, React, Geeko API", 
      github: "https://github.com/Osireg17/CashCow",
    },
    {
      id: 2,
      name: "Naruto Notions",
      imageSrc: img2,
      techs: "Javascript, Node.js, Express, MongoDB, Bootstrap",
      github: "https://github.com/Osireg17/Naruto-Notions",
    },
    {
      id: 3,
      name: "Wordle Clone",
      imageSrc: img3,
      techs: "React, WordsAPI, Javascript",
      github: "https://github.com/Osireg17/Wordle-Clone",
    },
    {
      id: 4,
      name: "Vivy Fluorite Eye's Song",
      imageSrc: img4,
      techs: "Python, Flask, Tensorflow, Pytorch, Bootstrap",
      github: "https://github.com/Osireg17/Sorting-Algorithm-Visualizer",
    },
    {
      id: 5,
      name: "NBA Face Smash",
      imageSrc: img5,
      techs: "Python, OpenCV",
      github: "https://github.com/Osireg17/Facial-Recognition",
    },
    {
      id: 6,
      name: "Chat Application",
      imageSrc: img6,
      techs: "React, Node.Js, GraphQL, Typescript, MySQL",
      github: "https://github.com/Osireg17/Chat-Application",
    },
  ];
  
  export const SocialLinks = [
    {
      id: 1,
      iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
      name: "GitHub",
      link: "https://github.com/Osireg17",
    },
    
    {
      id: 1,
      iconSrc: (
        <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
      ),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/osiobomighie/",
    },
    
  ];