'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.footer
      ref={ref}
      className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-pink-300/30 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-blue-300/30 to-transparent rounded-full blur-2xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Main Message */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl lg:text-4xl font-light text-gray-800 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            「理想のキャリア」に、向かっていく。
          </motion.h2>

          {/* ENTRY Button */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
          >
            <motion.button
              className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-12 rounded-lg shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-lg tracking-wider">ENTRY</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Company Info and Navigation */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Company Logo and Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-blue-600 font-bold text-xl">BERG</span>
            </div>
            <p className="text-gray-600 text-sm">©2024 BERG CO.LTD. コーポレートサイト</p>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-end">
            <nav className="flex flex-wrap gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-800 transition-colors">TOP</a>
              <a href="#" className="hover:text-gray-800 transition-colors">About</a>
              <a href="#" className="hover:text-gray-800 transition-colors">People</a>
              <a href="#" className="hover:text-gray-800 transition-colors">Environment</a>
              <a href="#" className="hover:text-gray-800 transition-colors">Information</a>
            </nav>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}