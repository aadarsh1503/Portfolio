import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Let's Connect
          </h2>
          <p className="text-2xl text-gray-300 text-center mb-12">
            I'm always open to discussing new projects and opportunities.
          </p>
          
          <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm border border-purple-500/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your message..."
                />
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-shadow flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={18} />
              </motion.button>
            </form>
            
            <div className="mt-12 grid md:grid-cols-2 gap-6">
  <motion.a
    href="mailto:aadarshchauhan35@gmail.com?subject=Hii Aadarsh"
    className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
    whileHover={{ x: 5 }}
  >
    <Mail size={20} />
    <span>aadarshchauhan35@gmail.com</span>
  </motion.a>
  <motion.a
    href="tel:+91730064899"
    className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
    whileHover={{ x: 5 }}
  >
    <Phone size={20} />
    <span>+91 730064899</span>
  </motion.a>
</div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}