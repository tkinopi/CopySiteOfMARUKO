'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function CultureEnvironment() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <motion.section
      ref={ref}
      className="py-20 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating background shapes */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${40 + i * 20}px`,
              height: `${40 + i * 20}px`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              background: i % 2 === 0
                ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))'
                : 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1))',
            }}
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -40, 40, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Works Introduction */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h3
                className="text-red-500 text-sm font-semibold mb-2"
                animate={{
                  color: ["#ef4444", "#f97316", "#fbbf24", "#ef4444"],
                  textShadow: [
                    "0 0 5px rgba(239, 68, 68, 0.3)",
                    "0 0 10px rgba(239, 68, 68, 0.5)",
                    "0 0 5px rgba(239, 68, 68, 0.3)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Works
              </motion.h3>
              <motion.h4
                className="text-3xl font-light text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                仕事紹介
              </motion.h4>
              <motion.p
                className="text-gray-600 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                私たちはクリエイターが「創造性を最大限に発揮」できる環境づくりを第一に考えています。<br />
                ベルクで新しい出会いと、毎日が輝けるお仕事をご紹介します。
              </motion.p>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div
                  className="w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-sm mr-4"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  }}
                  animate={{
                    boxShadow: [
                      "0 4px 6px rgba(0,0,0,0.1)",
                      "0 8px 15px rgba(0,0,0,0.15)",
                      "0 4px 6px rgba(0,0,0,0.1)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-gray-400 text-sm">→</span>
                </motion.div>
                <span className="text-gray-600">View More</span>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-cover bg-center flex items-center justify-center">
                  <div className="bg-white/80 rounded-lg px-6 py-4 text-center shadow-lg">
                    <div className="text-gray-600 font-medium">Modern Office Space</div>
                    <div className="text-sm text-gray-500">una</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Culture & Environment Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.h2
              className="text-sm text-gray-600 mb-2"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Culture&
            </motion.h2>
            <motion.h3
              className="text-5xl font-light text-gray-900 bg-gradient-to-r from-gray-800 to-gray-800 bg-clip-text text-transparent"
              animate={{
                backgroundImage: [
                  "linear-gradient(to right, #1f2937, #1f2937)",
                  "linear-gradient(to right, #8b5cf6, #3b82f6)",
                  "linear-gradient(to right, #1f2937, #1f2937)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Environment
            </motion.h3>
          </motion.div>

          {/* Working Style */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 1 }}
            onMouseEnter={() => setHoveredSection('working')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <motion.h4
              className="text-2xl font-light text-gray-900 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              ベルクの働き方
            </motion.h4>
            <motion.div
              className="relative max-w-2xl mx-auto"
              animate={{ y: hoveredSection === 'working' ? -10 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="aspect-[3/2] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-2xl overflow-hidden"
                animate={{
                  boxShadow: hoveredSection === 'working'
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <motion.div
                    className="bg-white/80 rounded-lg px-6 py-8 text-center shadow-lg"
                    animate={{
                      scale: hoveredSection === 'working' ? 1.05 : 1,
                      backgroundColor: hoveredSection === 'working' ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.8)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-gray-600">Team Collaboration</div>
                    <div className="text-sm text-gray-500 mt-2">Working Together</div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="mt-8 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className="text-gray-600 leading-relaxed">
                スタッフが働きがいを感じられるよう、ベルクでは各種研修とスキルアップに力を入れています。自分らしく働けて、創造的な環境の整備も進めています。
              </p>
            </motion.div>
            <motion.div
              className="mt-6 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <motion.div
                className="w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-sm"
                whileHover={{ scale: 1.2, rotate: 360 }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-gray-400 text-sm">→</span>
              </motion.div>
              <span className="ml-3 text-gray-600 flex items-center">View More</span>
            </motion.div>
          </motion.div>

          {/* Interview Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            onMouseEnter={() => setHoveredSection('interview')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <motion.h4
              className="text-2xl font-light text-gray-900 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              座談会
            </motion.h4>
            <motion.div
              className="relative max-w-2xl mx-auto"
              animate={{ y: hoveredSection === 'interview' ? -10 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="aspect-[3/2] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden"
                animate={{
                  boxShadow: hoveredSection === 'interview'
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <motion.div
                    className="bg-white/90 rounded-lg px-8 py-6 shadow-lg"
                    animate={{
                      scale: hoveredSection === 'interview' ? 1.05 : 1,
                      backgroundColor: hoveredSection === 'interview' ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.9)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-gray-600 text-lg">Team Discussion</div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="mt-8 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <p className="text-gray-600 leading-relaxed">
                仕事やキャリアについて、様々な疑問や不安についても気軽に相談できます。先輩社員がフランクに対応しています。
              </p>
            </motion.div>
            <motion.div
              className="mt-6 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              <motion.div
                className="w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-sm"
                whileHover={{ scale: 1.2, rotate: 360 }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-gray-400 text-sm">→</span>
              </motion.div>
              <span className="ml-3 text-gray-600 flex items-center">View More</span>
            </motion.div>
          </motion.div>

          {/* Work Environment */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.h4
              className="text-2xl font-light text-gray-900 mb-12"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              ベルクの仕事風景
            </motion.h4>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { bg: "from-red-100 to-pink-100", text: "Red", color: "text-red-400", delay: 1.8 },
                { bg: "from-blue-100 to-purple-100", text: "eco", color: "text-blue-400", delay: 1.9 },
                { bg: "from-pink-100 to-red-100", text: "BERG", color: "text-pink-400", delay: 2.0 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`aspect-square bg-gradient-to-br ${item.bg} rounded-lg`}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.8, delay: item.delay }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  }}
                  onMouseEnter={() => setHoveredSection(`card-${index}`)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <motion.div
                      className={`${item.color} ${index === 2 ? 'text-lg' : 'text-6xl'} font-light`}
                      animate={{
                        scale: hoveredSection === `card-${index}` ? 1.2 : 1,
                        rotate: hoveredSection === `card-${index}` ? [0, 10, -10, 0] : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.text}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}