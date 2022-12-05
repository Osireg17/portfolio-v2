import {
    IoCodeWorking,
    IoLogoGithub,
    IoLogoLinkedin,
} from "react-icons/io5";


//impot javascript from react-icons
import img1 from './Portfolio_Images/CashCow.jpg'
import img2 from './Portfolio_Images/NarutoNotions.jpg'
import img3 from './Portfolio_Images/Picture2.jpg'
import img4 from './Portfolio_Images/Vivy.webp'
import img5 from './Portfolio_Images/NBA.jpg'
import img6 from './Portfolio_Images/Chat-App.webp'
  
export const Experience = [
    {
      id: 1,
      date: "July 2023 - June 2024",
      iconsSrc: <IoCodeWorking />,
      company: "Hewlett Packard Enterprise",
      title: "Incoming Software Engineer Intern",
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
      description: "A web application that allows users to keep track of various cryptocurrencies and their prices. The application uses the Geeko API to fetch the latest prices of the cryptocurrencies and then displays them in a table.",
      github: "https://github.com/Osireg17/CashCow",
    },
    {
      id: 2,
      name: "Naruto Notions",
      imageSrc: img2,
      description: "full stack web application that allows users to create and share their own Naruto fan theories. The application uses the MERN stack and is hosted on Heroku.",
      techs: "Javascript, Node.js, Express, MongoDB, Bootstrap",
      github: "https://github.com/Osireg17/Naruto-Notions",
    },
    {
      id: 3,
      name: "Robotic Arm",
      imageSrc: img3,
      description: "Group project that involved the design and development of a robotic arm that can be controlled using a joystick. The arm was able to move in 6 different directions and was able to pick up and drop objects. ",
      techs: "Arduino, C++, 3D Printing",
      github: "https://github.com/Osireg17/ES2C6-Robotic-Arm-Project",
    },
    {
      id: 4,
      name: "Vivy Fluorite Eye's Song",
      imageSrc: img4,
      description: "A chatbot that is based off the anime Vivy: Fluorite Eye's Song. The chatbot is able to answer questions about the anime and also has a personality that is based off the character Vivy.",
      techs: "Python, Flask, Tensorflow, Pytorch, Bootstrap",
      github: "https://github.com/Osireg17/AI-Chatbot",
    },
    {
      id: 5,
      name: "NBA Face Smash",
      imageSrc: img5,
      description: "OpenCV project that estimates how much you look like a NBA player. The application uses OpenCV to detect the user's face and then uses a pre-trained model to estimate how much the user looks like the NBA player.",
      techs: "Python, OpenCV",
      github: "https://github.com/Osireg17/Facial-Recognition",
    },
    {
      id: 6,
      name: "Chat Application",
      imageSrc: img6,
      description:"Still in progress...",
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