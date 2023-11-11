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
import img7 from './Portfolio_Images/AC-Hack.webp'
import img8 from './Portfolio_Images/Code-for-good.webp'
import img9 from './Portfolio_Images/Kingdom-Code.jpg'
import img10 from './Portfolio_Images/My project-1 (2).jpg'
import img11 from './Portfolio_Images/IC Hack.jpeg'
import img12 from './Portfolio_Images/Halo Logo[66] copy.png'
import img13 from './Portfolio_Images/Logo.png'
import img14 from './Portfolio_Images/IMLondon.logo.webp'
  
export const Experience = [
    {
      id: 1,
      date: "July 2023 - Present",
      iconsSrc: <IoCodeWorking />,
      company: "Hewlett Packard",
      title: "Software Engineer Intern",
      location: "Bristol, UK",
      description:
        "Worked alongside the 'Origin' scrum team in full-stack application development, empowering product managers to release customer notices through a sturdy Golang microservice paired with a dynamic React interface. Employed Jenkins pipelines for smooth build, test, and deploy processes, making use of AWS-based Kubernetes clusters and Helm for expandable infrastructure. Adopted React reducers, context API, and Mirage for efficient UI state control and backend simulation, upholding superior code standards using Jest and Cypress tests",
    },
    {
      id: 2,
      date: "March 2023 - April 2023",
      iconsSrc: <IoCodeWorking />,
      company: "JP Morgan Chase",
      title: "Software Engineer - Spring Intern",
      location: "London, UK",
      description:
        "During my spring internship, I gained TDD proficiency in Spring Boot and JUnit, and expanded my knowledge in cybersecurity and UI/UX. As part of a team developing a web app for UN Goal 4, I led front-end development using React and TailwindCSS, integrating multiple APIs for a seamless, user-friendly platform.",

    },
    {
      id: 3,
      date: "October 2022 - June 2023",
      iconsSrc: <IoCodeWorking />,
      company: "Butterfly",
      title: "Software Engineer",
      location: "Coventry, UK",
      description:
        "I am currently working as a Software Engineer at Butterfly, a startup that is developing a social media platform for students to connect with each other and share their experiences. The app is currently only avaiable to Warwick University students but will be rolled out to other universities in the future."
    },
    {
      id: 4,
      date: "July 2022 - August 2022",
      iconsSrc: <IoCodeWorking />,
      company: "Ford Motors",
      title: "Software Engineer Intern",
      location: "London, UK",
      description:
        "I undertook a summer internship at Ford Motors where I worked with the rapid digital prototype team to develop a prototype for their In-Vehicle Entertainment Project. We built a working prototype of an arcade racing game using Unity and C#. The game is able to interact with the car's sensors and actuators, which is demoed using raspberry pi, arduino and websockets allowing the user to have the ultimate experience of racing the car.",
    },
    {
      id: 5,
      date: "June 2022 - July 2022",
      iconsSrc: <IoCodeWorking />,
      company: "Lloyds Banking Group",
      title: "Software Engineer Intern",
      location: "London, UK",
      description:
        "I undertook a spring week at Lloyds Banking Group, where I developed my knowledge on the Fintech industry. During, the spring week I used python to develop a program to analysis data of 12000 different simulated bank transactions and then presented any findings to a panel of Lloyds bank employees. I also worked in a group to develop a secure video chat application using the MERN stack which included 2 factor authentication using a random generated password.",
    },
    {
      id: 6,
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
    {
      id: 7,
      name: "Fellow",
      imageSrc: img10,
      description:"I developed a social media app where Christians can come and ask about their faith as well as provide their own opinion on the word of God. Click the link below to view the website and sign up for early access.",
      techs: "React Native, Firebase, Typescript, Google Cloud Platform",
      github: "https://fellow-web.vercel.app/",
    },
    {
      id: 8,
      name: "Black Luxury Fashion Summit",
      imageSrc: img13,
      description:"Developed a Sign up page for warwick first Black Luxury Fashion Summit. The website was developed using NextJs for the UI and AWS services for the backend.",
      techs: "NextJs, Typescript, AWS API Gateway, AWS Lambda, AWS Dynamo DB",
      github: "https://www.blackluxuryfashionsummit.com/",
    },
    {
      id: 9,
      name: "Halo Pharmacy",
      imageSrc: img12,
      description:"A webapp that allows for patients to be able to find out more about the new pharmacy as well as nominate the pharmacy to be their permanent pharmacy.",
      techs: "NextJs, Typescript, AWS API Gateway, AWS Lambda, AWS SES, AWS Dynamo DB",
      github: "https://www.halopharmacy.co.uk/",
    },
    {
      id: 10,
      name: "Imperfect London",
      imageSrc: img14,
      description:"A bespoke clothing brand that is based in London. I developed the website for the brand using Shopify CMS and Hydrogen.",
      techs: "Hydrogen, Shopify CMS, Tailwind CSS",
      github: "https://imperfectlondon.com/",
    }
  ];

  export const Hackathons = [
    {
      id: 1,
      name: "Imperial AC Hackathon",
      imageSrc: img7,
      description: "Competed in Imperial College London AC Hack, where I worked with other liked minded individuals to develop a web application that allows users to keep track of their mood and suggest activities that they can do to improve their mood during the day",
      techs: "React, Apache, Python, Flask, Tensorflow, Pytorch ",
      github: "",
    },
    {
      id: 2,
      name: "JP Morgan Code for Good Hackathon",
      imageSrc: img8,
      description: "Won the JP Morgan Code for Good Hackathon, where I worked with 4 other developers to develop a social media app to allow for deafblind people to have a more inclusive social media experience.",
      techs: "Flutter, Firebase, Dart, Google API's",
      github: "",
    },
    {
      id: 3,
      name: "Kingdom Code: Build Hackathon",
      imageSrc: img9,
      description: "1st place in Kingdom Code: Build. This christian hackathon was hosted so that we could create technical solutions to help charities which glorify God. I worked on a team that helped develop a web application that would help foodbanks organise their inventory and help them keep track of their donations.",
      techs: "React, Typescript, GraphQL, Strapi, PostgreSQL",
    },
    {
      id: 4,
      name: "IC Hack",
      imageSrc: img11,
      description: "Secured a top 10 position in the Optiver Sponsor Challenge at ICHack by creating an advanced trading bot. Leveraged machine learning techniques on AWS EC2 for immediate market insights and strategic high-frequency trades.",
      techs: "AWS, Python, Keras, Pandas",
      github: "",
    }
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