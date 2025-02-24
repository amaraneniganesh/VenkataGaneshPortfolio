import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    title: 'Movie Blogs',
    description: 'A platform to see movie blogs and tweets.',
    image: 'https://amaraneniganesh.onrender.com/Blogsapp.png',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/amaraneniganesh/FrontendBlogs',
    live: 'https://frontendblogs.onrender.com/',
  },
  {
    title: 'Weather App',
    description: 'A simple yet powerful tool that allows users to check real-time weather conditions With 3 days forcast and every hour parameters.',
    image: 'weatherv.png',
    technologies: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/amaraneniganesh/WeatherApp',
    live: 'https://vaatavaranman.onrender.com/',
  },
  {
    title: 'Streaming APP',
    description: 'A React-based streaming app offering diverse movies with multi-audio support. Enjoy seamless streaming and smooth navigation.',
    image: 'SsNF.png',
    technologies: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/amaraneniganesh/StreamSphere-NF',
    live: 'https://streamspherenf.vercel.app/',
  },
  {
    title: 'Social Media Video Downloader',
    description: 'The Social Media Downloader App is a versatile and user-friendly tool designed to help users easily download content from various social media platforms.',
    image: 'https://amaraneniganesh.onrender.com/SocialMEDIA.png',
    technologies: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/amaraneniganesh/Social-media-downloader',
    live: 'https://social-media-downloader-qnh2.onrender.com',
  },
  {
    title: 'Weather App',
    description: 'A simple yet powerful tool that allows users to check real-time weather conditions.',
    image: 'https://amaraneniganesh.onrender.com/Weather.png',
    technologies: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/amaraneniganesh/Weather',
    live: 'https://weather-6cn2.onrender.com',
  },
  {
    title: 'Instagram Video Downloader',
    description: 'Download Instagram videos by providing their link.',
    image: 'https://amaraneniganesh.onrender.com/videodown.png',
    technologies: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/amaraneniganesh/video-downloader',
    live: 'https://video-downloader-dzd2.onrender.com/',
  },
  {
    title: 'Twitter Engagement Rate Calculator',
    description: 'Calculate Twitter engagement per post or time period.',
    image: 'https://amaraneniganesh.onrender.com/twittereng.png',
    technologies: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/amaraneniganesh/Engagementcalci',
    live: 'https://mahesher-engagement-calci.onrender.com/',
  },
  {
    title: 'Twitter Comments and Follower Checker',
    description: 'Check comments and followers on Twitter.',
    image: 'https://amaraneniganesh.onrender.com/follower.png',
    technologies: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/amaraneniganesh/twitter-verified',
    live: 'https://twitter-verified.onrender.com/comments-check/',
  },
  {
    title: 'Chatting App',
    description: 'A real-time messaging platform for private or group chats.',
    image: 'https://amaraneniganesh.onrender.com/Chat.png',
    technologies: ['React', 'CSS', 'Node.js', 'WebSockets'],
    github: 'https://github.com/amaraneniganesh/FrontEndChat',
    live: 'https://frontendchat-uh98.onrender.com',
  },
  {
    title: 'Sustainable Development',
    description: 'An educational portal for sustainable development.',
    image: 'https://amaraneniganesh.onrender.com/JFSD.png',
    technologies: ['React', 'CSS', 'SpringBoot'],
    github: 'https://github.com/amaraneniganesh/JFSD-Sustainability-Education',
    live: 'https://jfsd-sustainability-education.onrender.com/',
  },
  {
    title: 'Grabz Cart',
    description: 'An e-commerce platform with a user-friendly interface.',
    image: 'https://amaraneniganesh.onrender.com/grabz.png',
    technologies: ['React', 'CSS', 'MongoDB'],
    github: 'https://github.com/amaraneniganesh/GrabzCartfend',
    live: 'https://grabzcartfend.onrender.com/',
  },
  {
    title: 'Twitter User Revenue Estimator',
    description: 'Estimate Twitter user revenue based on engagement and audience size.',
    image: 'https://amaraneniganesh.onrender.com/revnuex.png',
    technologies: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/amaraneniganesh/Xrevenue-estimator',
    live: 'https://mahesher-xrevenue-estimator.onrender.com/',
  },
  {
    title: 'YouTube Transcriptor',
    description: 'Convert YouTube video audio into text transcriptions.',
    image: 'https://amaraneniganesh.onrender.com/utube.png',
    technologies: ['React', 'CSS', 'Node.js', 'YouTube API'],
    github: 'https://github.com/amaraneniganesh/UtubeTranscript',
    live: 'https://utubetranscript-0fsd.onrender.com/',
  },
  {
    title: 'StreamSphere',
    description: 'Stream movies and TV shows on one platform.',
    image: 'https://amaraneniganesh.onrender.com/streamsphere.png',
    technologies: ['React', 'CSS', 'Node.js'],
    github: 'https://github.com/amaraneniganesh/streamsphere',
    live: 'https://streamsphere.onrender.com/',
  },
  {
    title: 'Online Job Portal',
    description: 'Connect job seekers with potential employers.',
    image: 'https://amaraneniganesh.onrender.com/mswdsdp.png',
    technologies: ['React', 'CSS', 'Node.js', 'MongoDB'],
    github: 'https://github.com/amaraneniganesh/frontendsdp',
    live: 'https://frontendsdp.onrender.com/',
  },
  {
    title: 'Rules Approval',
    description: 'Approve or reject proposed rules with ease.',
    image: 'https://amaraneniganesh.onrender.com/rules.png',
    technologies: ['React', 'CSS', 'Node.js'],
    github: 'https://github.com/amaraneniganesh/RulesApproval',
    live: 'https://rulesapproval.onrender.com/',
  },
  {
    title: 'CineDisco',
    description: 'Track movies and get movie news.',
    image: 'https://amaraneniganesh.onrender.com/cinedisco.png',
    technologies: ['React', 'CSS', 'Node.js'],
    github: 'https://github.com/amaraneniganesh/CineDisco',
    live: 'https://cinedisco.onrender.com/',
  },
  {
    title: 'LinkTree',
    description: 'Add multiple links and share a public view.',
    image: 'https://amaraneniganesh.onrender.com//Lnktree.png',
    technologies: ['React', 'CSS', 'Node.js'],
    github: 'https://github.com/amaraneniganesh/LinkTree',
    live: 'https://linktree-te6f.onrender.com/dashboard',
  },
];


const ProjectCard = ({ project }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My <span>Projects</span></h2>
      <div className="projects-container">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      {!showAll && projectsData.length > 3 && (
        <motion.button
          className="show-more-btn"
          onClick={() => setShowAll(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Show More Projects
        </motion.button>
      )}
    </section>
  );
};

export default Projects;