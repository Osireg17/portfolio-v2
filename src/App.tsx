import React, { useState } from 'react';
import pdf from './CV/Osiregbemhe_Obomighie_UK.pdf'
import { IoMenu, IoLogoGithub } from 'react-icons/io5'
import { RxCrossCircled } from 'react-icons/rx'
import { Experience, Projects, SocialLinks, Hackathons, Skills } from "./data";
import { AnimatePresence, motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import ReadMore from './ReadMore';
import hubspotLogo from './images/Company_Logos/HubSpot_Logo.png';
import hpeLogo from './images/Company_Logos/HPE_Logo.avif';
import jpMorganLogo from './images/Company_Logos/JP_Morgan_Logo.jpg';
import morganStanleyLogo from './images/Company_Logos/Morgan_Stanley_Logo.png';
import fordLogo from './images/Company_Logos/Ford_Company_logo.jpg';
const logoMap: Record<string, string> = {
  hubspot: hubspotLogo,
  hpe: hpeLogo,
  jpmorgan: jpMorganLogo,
  morganstanley: morganStanleyLogo,
  ford: fordLogo,
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-4 mb-12 w-full">
    <h2 className="text-sm font-semibold tracking-widest uppercase text-accent whitespace-nowrap">
      {children}
    </h2>
    <div className="flex-1 h-px bg-border" />
  </div>
);

const CompanyBadge = ({ initials, color, logoKey }: { initials: string; color: string; logoKey?: string }) => {
  const logoSrc = logoKey ? logoMap[logoKey] : null;
  return (
    <div
      className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 overflow-hidden"
      style={{ backgroundColor: logoSrc ? "#ffffff" : color }}
    >
      {logoSrc
        ? <img src={logoSrc} alt="" className="w-full h-full object-contain p-1" />
        : <span className="text-xs font-bold text-white">{initials}</span>
      }
    </div>
  );
};

const TechPills = ({ techs }: { techs: string }) => (
  <div className="flex flex-wrap gap-1.5">
    {techs.split(',').map((t) => (
      <span key={t.trim()} className="text-xs text-textSecondary bg-primary border border-border px-2 py-0.5 rounded-md font-mono">
        {t.trim()}
      </span>
    ))}
  </div>
);

function App() {
  const [isActive, setIsActive] = useState(false);
  const [projectExpanded, setProjectExpanded] = useState(new Array(Projects.length).fill(false));
  const [hackathonExpanded, setHackathonExpanded] = useState(new Array(Hackathons.length).fill(false));

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#hackathons", label: "Hackathons" },
    { href: "#contacts", label: "Contact" },
  ];

  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">

        {/* Nav */}
        <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
          <div className="w-full md:w-880 bg-navBar border border-border p-4 rounded-2xl flex items-center">
            <p className="text-base text-textPrimary font-semibold tracking-tight">Osi Obomighie</p>

            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-textBase font-medium hover:text-textPrimary cursor-pointer duration-150 ease-in"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={pdf}
                target="_blank"
                rel="noreferrer"
                className="ml-auto text-sm text-textBase font-medium hover:text-textPrimary cursor-pointer border border-border px-3 py-1.5 rounded-lg hover:border-textSecondary duration-150 ease-in"
              >
                CV
              </a>
            </div>

            <motion.div
              whileTap={{ scale: 0.6 }}
              className="block md:hidden ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className="text-2xl text-textBase" />
            </motion.div>

            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15, type: "tween" }}
                className="p-6 w-56 bg-navBar border border-border rounded-xl fixed top-20 right-6 flex flex-col items-start gap-5"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-textBase font-medium hover:text-textPrimary cursor-pointer duration-150 ease-in"
                    onClick={() => setIsActive(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-textBase font-medium hover:text-textPrimary cursor-pointer border border-border px-3 py-1.5 rounded-lg hover:border-textSecondary duration-150 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  CV
                </a>
                <div className="absolute top-3 right-3 cursor-pointer">
                  <RxCrossCircled
                    className="text-xl text-textBase hover:text-textPrimary"
                    onClick={() => setIsActive(false)}
                  />
                </div>
              </motion.div>
            )}
          </div>
        </nav>

        {/* Hero */}
        <div className="w-screen min-h-screen flex flex-col items-center justify-center relative overflow-hidden" id="home">
          {/* Dot grid background */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #30363d 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            opacity: 0.5,
          }} />
          {/* Radial glow */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)',
          }} />

          <div className="relative flex flex-col items-center justify-center gap-6 px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1
                className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
                style={{
                  background: 'linear-gradient(135deg, #e6edf3 40%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Osi Obomighie
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-lg md:text-xl text-textSecondary max-w-lg leading-relaxed"
            >
              Software Engineer at HubSpot. Building distributed systems and backend infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex items-center gap-4 mt-2"
            >
              <a
                href="#about"
                className="text-sm text-textPrimary bg-accent px-5 py-2.5 rounded-lg font-medium hover:bg-blue-500 duration-150"
              >
                Learn more
              </a>
              <a
                href={pdf}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-textSecondary border border-border px-5 py-2.5 rounded-lg font-medium hover:border-textSecondary hover:text-textPrimary duration-150"
              >
                Download CV
              </a>
            </motion.div>
          </div>
        </div>

        <main className="w-[85%] max-w-5xl mt-4">

          {/* About */}
          <section className="w-full my-24" id="about">
            <SectionHeading>About</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              {/* Skills grid */}
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-textSecondary mb-3">Languages</p>
                  <div className="flex flex-wrap gap-2">
                    {Skills.languages.map((lang) => (
                      <span
                        key={lang}
                        className="text-sm text-textPrimary bg-surface border border-border px-3 py-1 rounded-md font-mono"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-textSecondary mb-3">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {Skills.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm text-textPrimary bg-surface border border-border px-3 py-1 rounded-md font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="flex flex-col gap-4 justify-center">
                <p className="text-base text-textSecondary leading-relaxed">
                  I'm a software engineer at HubSpot working on backend infrastructure — distributed systems, data migrations at scale, and AI-powered features.
                </p>
                <p className="text-base text-textSecondary leading-relaxed">
                  I studied Systems Engineering at the University of Warwick and have worked across companies including Morgan Stanley, Hewlett Packard Enterprise, and Ford Motor Company.
                </p>
                <p className="text-base text-textSecondary leading-relaxed">
                  Outside of work I play basketball competitively, enjoy reading, and build side projects — often at the intersection of AI and backend engineering.
                </p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="w-full my-24">
            <SectionHeading>Experience</SectionHeading>
            <VerticalTimeline layout="1-column-left" lineColor="#30363d">
              {Experience.map((n) => (
                <VerticalTimelineElement
                  key={n.id}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#161b22",
                    color: "#e6edf3",
                    border: "1px solid #30363d",
                    borderRadius: "12px",
                    boxShadow: "none",
                    padding: "20px 24px",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #30363d",
                  }}
                  date={n.date}
                  dateClassName="text-textSecondary text-sm"
                  iconStyle={{
                    background: "#161b22",
                    border: "2px solid #30363d",
                    boxShadow: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  icon={<CompanyBadge initials={n.badge} color={n.badgeColor} logoKey={n.logoKey} />}
                >
                  <div className="flex flex-col gap-1 mb-3">
                    <h2 className="text-base font-semibold text-textPrimary m-0">{n.company}</h2>
                    <h3 className="text-sm font-medium text-accent m-0">{n.title}</h3>
                    <h4 className="text-xs text-textSecondary m-0">{n.location}</h4>
                  </div>
                  <ul className="flex flex-col gap-2 m-0 pl-4 list-disc">
                    {n.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm text-textSecondary leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </section>

          {/* Projects */}
          <section className="w-full my-24" id="projects">
            <SectionHeading>Projects</SectionHeading>
            <div className="flex flex-wrap gap-4 justify-start">
              {Projects.map((n, i) => (
                <motion.div
                  key={n.id}
                  className={`border border-border rounded-xl p-5 w-full sm:w-[300px] hover:border-textSecondary duration-150 ease-in-out flex flex-col gap-3 ${projectExpanded[i] ? 'h-auto' : n.imageSrc ? 'h-[420px]' : 'h-[280px]'}`}
                  style={{ background: "#161b22" }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-textPrimary leading-snug">
                      {n.name}
                    </p>
                    <a href={n.github} target="_blank" rel="noreferrer" className="flex-shrink-0">
                      <motion.div whileTap={{ scale: 0.7 }}>
                        <IoLogoGithub className="text-textSecondary text-lg cursor-pointer hover:text-textPrimary duration-150" />
                      </motion.div>
                    </a>
                  </div>

                  {n.imageSrc && (
                    <img
                      src={n.imageSrc}
                      className="w-full h-[150px] object-cover rounded-md"
                      alt={n.name}
                    />
                  )}

                  <p className="text-sm text-textSecondary leading-relaxed flex-1">
                    <ReadMore onToggle={() => {
                      const next = [...projectExpanded];
                      next[i] = !next[i];
                      setProjectExpanded(next);
                    }}>
                      {n.description}
                    </ReadMore>
                  </p>

                  <div className="pt-3 border-t border-border">
                    <TechPills techs={n.techs} />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Hackathons */}
          <section id="hackathons" className="w-full my-24">
            <SectionHeading>Hackathons</SectionHeading>
            <div className="flex flex-wrap gap-4 justify-start">
              {Hackathons.map((n, i) => (
                <motion.div
                  key={n.id}
                  className={`border border-border rounded-xl p-5 w-full sm:w-[300px] hover:border-textSecondary duration-150 ease-in-out flex flex-col gap-3 ${hackathonExpanded[i] ? 'h-auto' : 'h-[380px]'}`}
                  style={{ background: "#161b22" }}
                >
                  <p className="text-sm font-semibold text-textPrimary leading-snug">
                    {n.name}
                  </p>

                  <img
                    src={n.imageSrc}
                    className="w-full h-[140px] object-cover rounded-md"
                    alt={n.name}
                  />

                  <p className="text-sm text-textSecondary leading-relaxed flex-1">
                    <ReadMore onToggle={() => {
                      const next = [...hackathonExpanded];
                      next[i] = !next[i];
                      setHackathonExpanded(next);
                    }}>
                      {n.description}
                    </ReadMore>
                  </p>

                  <div className="pt-3 border-t border-border">
                    <TechPills techs={n.techs} />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contacts" className="w-full my-24">
            <SectionHeading>Contact</SectionHeading>
            <div className="flex items-center gap-4 flex-wrap">
              {SocialLinks.map((n) => (
                <motion.a
                  whileTap={{ scale: 0.95 }}
                  href={n.link}
                  key={n.id}
                  className="px-6 py-4 border border-border rounded-xl hover:border-textSecondary duration-150 ease-in-out cursor-pointer flex items-center gap-3"
                  style={{ background: "#161b22" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  {n.iconSrc}
                  <p className="text-sm text-textSecondary font-medium">{n.name}</p>
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
