import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay"; // Import autoplay CSS if necessary
import { EffectCards, Autoplay } from "swiper/modules"; // Import Autoplay
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion"; // Import framer-motion

const About = () => {
  return (
    <div className="pt-20">
      <div className="text-white w-fit mx-auto text-5xl">
        <span className="josefin-sans-light">About </span>
        <span className="josefin-sans-font">Me</span>
      </div>
      <div className="md:w-[80%] mx-auto flex flex-col-reverse lg:flex-row py-10">
        {/* content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          whileInView={{ opacity: 1, x: 0 }} // Animate in when in view
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }} // Smooth animation
        >
          <div className="m-8 md:text-lg">
            <p className="text-white/80 md:w-[90%]">
              Hello, I'm Rohit Kumar Verma, a Full Stack Developer specializing
              in the MERN stack. I build scalable, responsive, and user-centric
              web applications with a strong focus on performance and clean
              code. I have experience working on real-world projects like
              e-commerce platforms and real estate systems, handling both
              frontend and backend development. Alongside this, I actively use
              AI tools like Claude, Chatgpt, Cursor, Copilot, and explore AI agents to build smarter, more efficient,
              and intelligent applications. I’m passionate about solving
              real-world problems, continuously learning, and leveraging both
              web and AI technologies to create impactful digital products.
            </p>
          </div>
          {/* socials */}
          <div className="ml-7">
            <div className="text-white text-3xl flex gap-10">
              <a
                href="https://www.linkedin.com/in/rohit-verma769/"
                target="_blank"
              >
                <div className="bg-purple-50 hover:scale-125 transition 3s socShad rounded-full p-2">
                  <FaLinkedin className=" text-blue-400 " />
                </div>
              </a>
              <a href="https://github.com/rohit7979" target="_blank">
                <div className="bg-purple-50 hover:scale-125 transition 3s socShad rounded-full p-2">
                  <FaGithub className="text-black" />
                </div>
              </a>

              <a href="https://x.com/rebelindia01" target="_blank">
                <div className="bg-purple-50 hover:scale-125 transition 3s socShad rounded-full p-2">
                  <FaSquareXTwitter className="text-black" />
                </div>
              </a>
              {/* <a href="https://www.instagram.com/l_rohitsoni_l/" target="_blank">
                <div className="bg-purple-50 hover:scale-125 transition 3s socShad rounded-full p-2">
                  <BsInstagram className="text-pink-400" />
                </div>
              </a> */}
            </div>
          </div>
        </motion.div>

        {/* images */}
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
          whileInView={{ opacity: 1, x: 0 }} // Animate in when in view
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }} // Smooth animation
          // className="md:shadow-2xl md:shadow-purple-800"
        >
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true} // Enable loop for continuous slides
            autoplay={{
              delay: 4000, // Set autoplay delay (4 seconds)
              disableOnInteraction: false, // Keep autoplay running even when interacted with
            }}
            modules={[EffectCards, Autoplay]} // Add Autoplay module here
            className="mySwiper bg-transparent md:shadow-2xl md:shadow-purple-800 rounded-2xl"
          >
            <SwiperSlide>
              <img
                src="/rohit5.jpeg"
                alt="Your Photo 1"
                className="w-[80%] h-[80%] md:w-full md:h-full object-cover bg-transparent" // Smaller on mobile
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <img
                src="/rohit2.jpg"
                alt="Your Photo 2"
                className="w-[80%] h-[80%] md:w-full md:h-full object-cover bg-transparent" // Smaller on mobile
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/rohit3.jpg"
                alt="Your Photo 3"
                className="w-[80%] h-[80%] md:w-full md:h-full object-cover bg-transparent" // Smaller on mobile
              />
            </SwiperSlide> */}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
