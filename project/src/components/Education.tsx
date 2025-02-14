import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  
  {
    degree: 'Bachelor of Computer Science',
    school: 'College of Engineering Roorkee',
    period: '2020 - 2024',
    description: 'Major in Software Engineering',
  },
  {
    degree: 'Intermediate',
    school: 'Shri Guru Nanak Sen. Sec. School',
    period: '2019 - 2020',
    description: 'Learning Cse ',
  },
];

export default function Education() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <div className="max-w-4xl mx-auto grid gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-8 rounded-lg backdrop-blur-sm border border-purple-500/20"
            >
              <div className="flex items-center mb-4">
                <GraduationCap size={24} className="text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
              </div>
              <div className="text-purple-400 mb-4">
                {edu.school}
                <span className="mx-2">•</span>
                {edu.period}
              </div>
              <p className="text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}