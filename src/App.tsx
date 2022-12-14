import React , {useState}from 'react';
import Spline from '@splinetool/react-spline';
import pdf from './CV/Osiregbemhe.pdf'
import {IoMenu, IoLogoGithub} from 'react-icons/io5'
import {RxCrossCircled} from 'react-icons/rx'
import { Experience, Projects, SocialLinks, Hackathons } from "./data";
import { AnimatePresence, motion } from "framer-motion";
import profile from './images/profile.jpg'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import ReadMore from './ReadMore';
import Typewriter from 'typewriter-effect';



function App() {

  
  
  const [isActive, setIsActive] = useState(false)
  return (
    <AnimatePresence initial={false}>
    <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        <nav className="w-full px-6 z-50  fixed inset-x-0 top-2 flex justify-center items-center ">
          <div className=" w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
            <p className="text-2xl text-slate-200 font-medium">Osi Obomighie</p>

            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                About
              </a>
              <a href="#experience" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in">Experience</a>
              <a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Projects
              </a>
              <a href="#hackathons" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in">Hackathons</a>
              <a
                href="#contacts"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Contact
              </a>
              <a
                href={pdf}
                target="_blank"
                rel='noreferrer'
                className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
              >
                Download CV
              </a>
            </div>

            <motion.div
              whileTap={{ scale: 0.6 }}
              className="block md:hidden  ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className="text-2xl text-textBase " />
            </motion.div>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: 0.1, type: "spring" }}
                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
              >
                <a
                  href="#home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  About
                </a>
                <a href="#experience" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in" onClick={() => setIsActive(false)}>Experience</a>
                <a
                  href="#projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                </a>
                <a href="#hackathons" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in" onClick={() => setIsActive(false)}>Hackathons</a>

                <a href="#contacts" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in" onClick={() => setIsActive(false)}>
                  Contact
                </a>
                <a
                  href={pdf}
                  target="_blank"
                  rel='noreferrer'
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Download
                </a>
                {/* create a button that closes the pop up */}
                <div className="absolute top-2 right-2 cursor-pointer">
                  <RxCrossCircled
                    className="text-2xl text-textBase"
                    onClick={() => setIsActive(false)}
                  />
                </div>
              </motion.div>
            )}
          </div>
        </nav>

        <div className="w-screen h-screen flex flex-col items-center justify-center relative" id="home">
        <Spline scene="https://prod.spline.design/V8fVYCI-HhjhVe6E/scene.splinecode" />
        
        {/* <Spline scene="https://prod.spline.design/8CNI2WaiKU8c-jxH/scene.splinecode" /> */}
        {/* <Spline scene="https://prod.spline.design/V8fVYCI-HhjhVe6E/scene.splinecode" /> */}
          <div className="absolute bottom-10 w-full flex justify-center items-center">
            <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl ">
              <p className="text-white">Press and drag to orbit</p>
            </div>
          </div>
        </div>

        <main className="w-[80%] mt-4">
          <div className="flex flex-col items-center justify-center mb-3">
            <h1 className="text-5xl font-bold text-center text-slate-200">
              {/* Hi ???? , I'm Osi Obomighie */}
              <Typewriter options={{
                strings: ['Hi ???? , I\'m Osi Obomighie', 'Aspiring Software Engineer', 'Basketball Enthusiast', 'Anime Fan'],
                  autoStart: true,
                  loop: true,
                }}
/>
            </h1>
          </div>
          <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
            id="about"
          >
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 relative bg-emerald-200 rounded-md mb-20">
                <img
                  src={profile}
                  alt=""
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full h-420 flex flex-col items-center justify-center mt-5">
              <p className="text-lg text-textBase text-center">
                Currently an undergraduate at the University of Warwick studying Systems Engineering. I am passionate about technology and how it can be used to solve real world problems.
              </p>
              <p className="text-lg text-textBase text-center">
                I am also a keen learner and I am always looking to learn new technologies.
              </p>
              <p className="text-lg text-textBase text-center">
                I enjoy using my skills to create projects and compete in hackathons, I use them as an opportunity to learn new technologies and to work with new people and win some prizes along the way.
              </p>
              <p className="text-lg text-textBase text-center">
                I hope to one day create a piece of technology that I saw in an anime and make it a reality.
              </p>
            </div>
          </section>


          <section id="experience" className="w-full flex items-center justify-center">
            <VerticalTimeline>
              {Experience &&
                Experience.map((n) => (
                  <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(21, 24, 31)",
                      color: "#888",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(21, 24, 31)",
                    }}
                    date={n.date}
                    iconStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
                    icon={n.iconsSrc}
                  >
                    <h2 className="vertical-timeline-element-title">
                      {n.company}
                    </h2>
                    <h3 className="vertical-timeline-element-title">
                      {n.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {n.location}
                    </h4>
                    <p>{n.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>

          <section
            className="flex flex-wrap items-center justify-evenly my-24 gap-4"
            id="projects"
          >
            {Projects &&
              Projects.map((n, i) => (
                <motion.div
                  key={n.id}
                  className="border border-zinc-800 rounded-md p-2 min-w-[300px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className="text-lg text-textBase font-medium uppercase">
                    {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                  </p>

                  <img
                    src={n.imageSrc}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt=""
                  />
                  <p className="text-lg text-textBase">
                  <ReadMore>
                    {n.description}
                  </ReadMore>
                  </p>
                  
                
                    {/* <p className="text-textBase text-sm">
                      {n.description.length > 50
                        ? `${n.description.slice(0, 50)}...`
                        : n.description}
                    </p> */}
                

                  

                  <div className="flex flex-1 items-center justify-between">
                    <p className="text-lg text-gray-300">
                      Technologies
                      <span className="block text-sm text-gray-500">
                        {n.techs}
                      </span>
                    </p>
                    <a href={n.github}>
                      <motion.div whileTap={{ scale: 0.5 }}>
                        <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                      </motion.div>
                    </a>
                  </div>
                </motion.div>
              ))}
          </section>

          <section id='hackathons' className="flex flex-col items-center justify-evenly w-full my-24">
            <p className="text-2xl text-gray-400 capitalize">Hackathons</p>
            <div className="flex flex-wrap items-center justify-evenly w-full my-4 gap-4">
              {Hackathons &&
                Hackathons.map((n) => (
                  <motion.div
                    key={n.id}
                    className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                  >
                    <p className="text-lg text-textBase font-medium uppercase">
                      {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                    </p>

                    <img
                    src={n.imageSrc}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt=""
                  />
                  <p className="text-lg text-textBase">
                  <ReadMore>
                    {n.description}
                  </ReadMore>
                  </p>

                    <div className="flex flex-1 items-center justify-between">
                      <p className="text-lg text-gray-300">
                        Technologies
                        <span className="block text-sm text-gray-500">
                          {n.techs}
                        </span>
                      </p>
                      <a href={n.github}>
                        <motion.div whileTap={{ scale: 0.5 }}>
                          <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                        </motion.div>
                      </a>
                    </div>
                  </motion.div>
                ))}
            </div>
          </section>

          <section
            id="contacts"
            className="flex flex-col items-center justify-evenly w-full my-24"
          >
            <p className="text-2xl text-gray-400 capitalize">Social Links</p>
            <div className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4">
              {SocialLinks &&
                SocialLinks.map((n) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    href={n.link}
                    key={n.id}
                    className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                    target='_blank'
                  >
                    {n.iconSrc}
                    <p className="text-lg text-textBase">{n.name}</p>
                  </motion.a>
                ))}
            </div>
          </section>

        </main>
      </div>
      </AnimatePresence>
  );
}

export default App;
