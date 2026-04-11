import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Petpooja — Restaurant POS & Management System",
      location: "Ahmedabad, Gujarat",
      duration: "Dec 2024 – Mar 2026",
      achievements: [
        "Designed and optimized the Website Landing Page, ensuring a seamless, SEO-friendly user experience and improved engagement metrics with modern web performance techniques.",
        "Built and integrated marketing automation features enabling restaurant businesses to create and manage advertising campaigns across Meta, Zomato, JioHotstar and digital display platforms — reducing manual effort significantly.",
        "Developed and maintained the Franchisee Management module in Next.js, streamlining multi-outlet workflow automation and enhancing operational efficiency for restaurant chains.",
        "Integrated secure JWT-based authentication and optimized API data handling using React Query and Redux Toolkit, improving application performance, scalability, and developer experience.",
      ],
    },
  ];

  return (
    <div className="pt-24 mt-5 pb-20 px-4 md:px-0">
      <div className="text-white w-fit mx-auto text-4xl md:text-5xl mb-16">
        <span className="josefin-sans-light">Work </span>
        <span className="josefin-sans-font">Experience</span>
      </div>

      <div className="md:w-[80%] mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className=""
          >
            <div className="bg-purple-700 bg-opacity-10 shadow-md shadow-purple-900 background-blur p-6 rounded-lg"
            >
              {/* Header Section */}
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-white josefin-sans-font">
                    {exp.role}
                  </h2>
                  <span className="text-sm md:text-base text-purple-300 font-semibold mt-2 md:mt-0">
                    {exp.duration}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl text-purple-400 font-semibold">
                  {exp.company}
                </h3>
                <p className="text-sm text-purple-300 mt-1">{exp.location}</p>
              </div>

              {/* Divider */}
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent mb-6"></div>

              {/* Achievements Section */}
              <div className="space-y-4">
                {exp.achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-3 md:gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-500 text-white text-sm font-bold">
                        ✓
                      </div>
                    </div>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
