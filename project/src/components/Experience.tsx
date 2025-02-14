import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'MERN Stack Developer',
    company: 'Global Vision Solution',
    period: '2024 Oct - Present',
    description: 'building scalable web applications using the MERN stack.',
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'The Entrepreneurship Network',
    period: '2024 June - 2024 Oct',
    description: 'Developed and maintained multiple web applications using React, Node.js, and MongoDB.',
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Internpe',
    period: '2023 Dec - 2024 April',
    description: 'Specialized in creating responsive and interactive user interfaces using React.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Experience() {
  return (
    <section className="py-20 bg-gray-900/50 relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-purple-500 to-transparent"
            style={{
              top: `${(i * 100) / 20}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute left-0 top-0 w-px bg-gradient-to-b from-purple-500 to-pink-500"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-500"
              />
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm border border-purple-500/20 shadow-lg hover:shadow-purple-500/10"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                <div className="flex items-center text-purple-400 mb-4">
                  <Briefcase size={16} className="mr-2" />
                  <span>{exp.company}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}