import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const letterAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function Hero() {
  const name = "Aadarsh Chauhan".split("");
  const title = "MERN Stack Developer".split("");

  const socialLinks = [
    { Icon: Github, link: "https://github.com/aadarsh1503" },
    { Icon: Linkedin, link: "https://www.linkedin.com/in/aadarsh-chauhan-1b6648206/" },
    { Icon: Mail, link: "mailto:aadarshchauhan35@gmail.com" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="mb-8"
        >
          <div className="overflow-hidden">
            <h1 className="text-7xl font-bold mb-6 flex justify-center gap-2">
              {name.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterAnimation}
                  initial="initial"
                  animate="animate"
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h1>
          </div>
          <div className="overflow-hidden">
            <h2 className="text-4xl mb-8 flex justify-center gap-1">
              {title.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i + name.length}
                  variants={letterAnimation}
                  initial="initial"
                  animate="animate"
                  className="inline-block text-gray-300"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h2>
          </div>
        </motion.div>

        {/* Social Icons with Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center relative top-6 space-x-8"
        >
          {socialLinks.map(({ Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                rotate: 5,
                filter: "hue-rotate(60deg)",
              }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white transition-colors relative"
            >
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 blur"
                initial={false}
                whileHover={{ opacity: 0.5 }}
              />
              <Icon size={32} className="relative z-10" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-6 h-10 border-2 border-purple-500 rounded-full p-[6px]"
          >
            <motion.div
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-2 h-2 bg-purple-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
