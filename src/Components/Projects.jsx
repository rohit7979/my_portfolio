import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pt-10 md:pt-20 mt-5 pb-10 md:pb-20">
      <div className="text-white w-fit mx-auto text-5xl">
        <span className="josefin-sans-light">My </span>
        <span className="josefin-sans-font">Projects</span>
      </div>
      <div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex flex-col-reverse md:flex-row items-center justify-center md:mt-20 mt-16 md:space-x-16"
        >
          {/* content */}
          <div className="text-white w-[85%] md:w-[40%]">
            <h1 className="text-sm text-purple-600 font-semibold">
              Featured Project
            </h1>
            <h1 className="text-4xl font-bold mt-3 mb-5 josefin-sans-font">
              Fundmitra - Crowdfunding Platform
            </h1>
            <p className="mt-4 bg-purple-700 bg-opacity-10 shadow-md shadow-purple-900 background-blur p-6 rounded-lg">
              The Fundmitra Platform is a web-based solution designed to assist
              students who face financial challenges in their education. This
              platform provides a space for students to create fundraising
              projects and allows donors to contribute to these causes. <br />
              Tech Stacks :- Nodejs, Express, MongoDB, ReactJs, Tailwindcss, JS,
              HTML, CSS
            </p>
            <div className="flex gap-6 mt-9 text-3xl">
              <a
                href="https://github.com/rohit7979/Web-Wrestlers_048"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a href="https://fundmitra.netlify.app/" target="_blank">
                <IoGlobeOutline />
              </a>
            </div>
          </div>
          {/* img */}
          <div className="md:w-[30%] w-[85%] mb-10 md:mb-0 md:relative rounded-xl border-l-4 border-t-4 border-[#1a0523] shadow-2xl shadow-purple-700">
            <a
              href="https://github.com/rohit7979/Web-Wrestlers_048"
              target="_blank"
            >
              <img
                src="/fundmitra.png"
                alt="Project Screenshot"
                className="rounded-lg"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative flex md:flex-row-reverse flex-col-reverse items-center space-x-reverse justify-center mt-20 md:gap-16 "
        >
          {/* content */}
          <div className="text-white w-[85%] md:w-[40%] md:text-right">
            <h1 className="text-sm text-purple-600 font-semibold">
              Featured Project
            </h1>
            <h1 className="text-4xl font-bold mt-3 mb-5 josefin-sans-font">
              Beehome - Real Estate and Accommodation System
            </h1>
            <p className="mt-4 bg-purple-700 bg-opacity-10 shadow-md shadow-purple-900 background-blur p-6 rounded-lg">
              Beehome is a cutting-edge real estate and accommodation platform
              tailored for Bangalore's fast-paced housing market. Designed to
              overcome challenges like outdated listings and unreliable
              contacts, Beehome offers users a streamlined experience to find
              and evaluate properties efficiently. With features such as
              up-to-date listings, advanced search filters, detailed property
              pages, and integrated maps, Beehome simplifies the search for the
              perfect home or apartment in Bangalore. <br />
              Tech Stacks :- ReactJs, Tailwindcss, Chakra UI, API, JS, HTML, CSS
            </p>
            <div className="flex gap-6 mt-9 text-3xl md:justify-end">
              <a
                href="https://github.com/RahulGeorge96/Sovereignty-SQL_033"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a href="https://beehome-realestate.netlify.app/" target="_blank">
                <IoGlobeOutline />
              </a>
            </div>
          </div>
          {/* img */}
          <div className="md:w-[30%] w-[85%] mb-10 md:mb-0 relative rounded-xl border-l-4 border-t-4 border-[#1a0523] shadow-2xl shadow-purple-700">
            <a
              href="https://github.com/RahulGeorge96/Sovereignty-SQL_033"
              target="_blank"
            >
              <img
                src="/beehome1.png"
                alt="Project Screenshot"
                className="rounded-lg"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative flex flex-col-reverse md:flex-row items-center justify-center mt-20 md:space-x-16"
        >
          {/* content */}
          <div className="text-white w-[85%] mt-10 md:w-[40%]">
            <h1 className="text-sm text-purple-600 font-semibold">
              Featured Project
            </h1>
            <h1 className="text-4xl font-bold mt-3 mb-5 josefin-sans-font">
              FWRD.com
            </h1>
            <p className="mt-4 bg-purple-700 bg-opacity-10 shadow-md shadow-purple-900 background-blur p-6 rounded-lg">
              FWRD.com (Forward) is a modern e-commerce platform that offers a
              wide range of fashion apparel, dresses, and designer brands. This
              project is a clone of the FWRD website, which focuses on
              delivering a seamless shopping experience by offering excellent
              customer service and showcasing an extensive collection of
              designers—ranging from established fashion houses to emerging
              talents. <br />
              Tech Stacks :- HTML, CSS, JAVASCRIPT, API, BOOTSTRAP
            </p>
            <div className="flex gap-6 mt-9 text-3xl">
              <a
                href="https://github.com/rohit7979/Spotify-Strategists_022"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a href="https://cheerful-kheer-485925.netlify.app/" target="_blank">
                <IoGlobeOutline />
              </a>
            </div>
          </div>
          {/* img */}
          <div className="md:w-[30%] w-[85%] relative rounded-xl border-l-4 border-t-4 border-[#1a0523] shadow-2xl shadow-purple-700">
            <a
              href="https://github.com/rohit7979/Spotify-Strategists_022"
              target="_blank"
            >
              <img
                src="/fwrd.png"
                alt="Project Screenshot"
                className="rounded-lg"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative flex md:flex-row-reverse flex-col-reverse items-center space-x-reverse justify-center mt-20 md:gap-16"
        >
          {/* content */}
          <div className="text-white w-[85%] md:w-[40%] md:text-right">
            <h1 className="text-sm text-purple-600 font-semibold">
              Featured Project
            </h1>
            <h1 className="text-4xl font-bold mt-3 mb-5 josefin-sans-font">
              NEXUS B2B-CONNECTION
            </h1>
            <p className="mt-4 bg-purple-700 bg-opacity-10 shadow-md shadow-purple-900 background-blur p-6 rounded-lg">
              NEXUS B2B-CONNECTION is a comprehensive platform designed for
              businesses to streamline their sales processes by combining a vast
              buyer database of over 270 million contacts with powerful sales
              engagement and automation tools. This project is inspired by
              Apollo.io and serves as a clone, providing businesses with tools
              to grow, engage, and convert prospects into customers more
              effectively. <br />
              Tech Stacks :- HTML, CSS, SASS, BOOTSTRAP
            </p>
            <div className="flex gap-6 mt-9 text-3xl md:justify-end">
              <a
                href="https://github.com/Mayank1st/Beas-Boolean-009"
                target="_blank"
              >
                <FaGithub />
              </a>

              <a href="https://nexus-b2b.netlify.app/" target="_blank">
                <IoGlobeOutline />
              </a>

            </div>
          </div>
          {/* img */}
          <div className="md:w-[30%] w-[90%] mb-10 relative rounded-xl border-l-4 border-t-4 border-[#1a0523] shadow-2xl shadow-purple-700">
            <a
              href="https://github.com/Mayank1st/Beas-Boolean-009"
              target="_blank"
            >
              <img
                src="/nexus.png"
                alt="Project Screenshot"
                className="rounded-lg"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
