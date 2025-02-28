import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Globe, Briefcase, Award, Terminal, Coffee } from 'lucide-react';
import aadi from "./aadi.jpg"
const skills = [
  { name: 'Frontend Development', icon: Code2, color: 'text-blue-500' },
  { name: 'Backend Development', icon: Server, color: 'text-green-500' },
  { name: 'Database Design', icon: Database, color: 'text-purple-500' },
  { name: 'API Development', icon: Globe, color: 'text-pink-500' },
  { name: 'Project Management', icon: Briefcase, color: 'text-yellow-500' },
  { name: 'System Architecture', icon: Terminal, color: 'text-red-500' },
  { name: 'Problem Solving', icon: Coffee, color: 'text-indigo-500' },
  { name: 'Team Leadership', icon: Award, color: 'text-orange-500' },
];

export default function About() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="w-full h-full"
>
  <img
    src={aadi}
    alt="Profile"
    className="rounded-lg shadow-2xl ring-4 bg-gray-900 ring-purple-500/50 object-cover w-full h-full"
  />
</motion.div>

          <div>
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Passionate MERN stack developer with 1+ years of experience building scalable web applications.
              Specialized in creating responsive, user-friendly interfaces and robust backend systems.
            </motion.p>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 bg-gray-800 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <skill.icon className={`${skill.color}`} size={24} />
                  <span className="text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}