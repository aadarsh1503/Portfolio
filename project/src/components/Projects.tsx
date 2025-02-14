import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import i1 from "./i1.png"
import i2 from "./i2.jpg"
import i3 from "./i3.jpg"
const projects = [
  {
    title: 'GVS Cargo Website',
    description: 'Full-stack Cargo Website with React, Node.js, Express, and MongoDB',
    image: i1,
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://gvscargo.com/', 
  },
  {
    title: 'Food Ordering Website',
    description: 'Logistics Website with React, Tailwindcss',
    image: i2,
    tags: ['ReactJs', 'Tailwindcss', 'Frontend'],
    link: 'https://arabiaseel.com/',
  },
  {
    title: 'GVS Logistics',
    description: 'Logistics Website with React, Tailwindcss',
    image: i3,
    tags: ['React','APIs', 'Express', 'MongoDB'],
    link: 'https://alshaheenexpress.com/', 
  },
];


export default function Projects() {
  const { scrollYProgress } = useScroll();
  const springConfig = { stiffness: 300, damping: 30, bounce: 0 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);
  
  // Enhanced parallax effects
  const y = useTransform(smoothProgress, [0, 1], [0, -100]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.1, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 1]);

  return (
    <section className="py-20 bg-gray-900/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold  text-center mb-32 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              style={{ 
                y,
                scale: scale,
                opacity: opacity,
              }}
              className="group relative"
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-lg"
                  >
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-black/50 to-transparent flex items-end justify-center p-8"
                    >
                    <motion.a
  href={project.link} // Har project ka unique link yahan use ho raha hai
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold hover:bg-white/20 transition-colors"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  View Project
</motion.a>
                    </motion.div>
                  </motion.div>
                </div>
                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} p-8`}>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-bold mb-4 text-white"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-gray-300 mb-6"
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-3 mb-8"
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 bg-purple-900/50 text-purple-300 rounded-full text-sm font-medium backdrop-blur-sm border border-purple-500/20"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                  <motion.a
  href={project.link} // Yahan bhi same link dynamically apply ho raha hai
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center text-purple-400 hover:text-purple-300 text-lg font-medium"
  whileHover={{ x: 10, color: '#fff' }}
>
  Explore Details <ExternalLink size={20} className="ml-2" />
</motion.a>

                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}