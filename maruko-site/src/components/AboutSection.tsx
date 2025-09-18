'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <motion.section
      ref={ref}
      className="py-20 bg-gray-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
              scale: [1, 1.5, 1, 1.5, 1],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* About Us Header */}
        <motion.div
          className="text-right mb-20"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2
            className="text-6xl font-light text-gray-900 bg-gradient-to-r from-gray-800 to-gray-800 bg-clip-text text-transparent"
            animate={isInView ? {
              backgroundImage: [
                "linear-gradient(to right, #1f2937, #1f2937)",
                "linear-gradient(to right, #3b82f6, #8b5cf6)",
                "linear-gradient(to right, #1f2937, #1f2937)",
              ],
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          >
            About
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Us
          </motion.p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h3
                className="text-red-500 text-sm font-semibold mb-2"
                animate={{ color: ["#ef4444", "#f97316", "#ef4444"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Mission
              </motion.h3>
              <h4 className="text-2xl font-light text-gray-900 mb-6">ベルクが目指す未来</h4>
              <motion.p
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                私たちの仕事は革新的なソリューションで社会に貢献すること。クライアントと共に、「理想の未来」を実現していく。テクノロジーとクリエイティブを融合した企業として成長し続けます。
              </motion.p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              onMouseEnter={() => setHoveredCard('mission')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className="aspect-video bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-lg overflow-hidden"
                animate={{
                  backgroundImage: hoveredCard === 'mission'
                    ? "linear-gradient(to bottom right, #dbeafe, #e9d5ff, #fce7f3)"
                    : "linear-gradient(to bottom right, #eff6ff, #f3e8ff, #fdf2f8)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <motion.div
                    className="text-center"
                    animate={{ scale: hoveredCard === 'mission' ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="text-purple-400 text-sm">View More</span>
                    </motion.div>
                    <motion.div
                      className="w-32 h-16 bg-purple-200 rounded-lg mx-auto opacity-60"
                      animate={{
                        width: hoveredCard === 'mission' ? 140 : 128,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Data Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              onMouseEnter={() => setHoveredCard('data')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className="aspect-video bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      className="text-gray-400 text-8xl font-light mb-4"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      100
                    </motion.div>
                    <motion.div
                      className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-orange-400 text-sm">View More</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.h3
                className="text-orange-500 text-sm font-semibold mb-2"
                animate={{ color: ["#f97316", "#fbbf24", "#f97316"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Data
              </motion.h3>
              <h4 className="text-2xl font-light text-gray-900 mb-6">データで見るベルク</h4>
              <p className="text-gray-600 leading-relaxed">
                ベルクについて数値的な観点で知りたい方向け、数字やインフォグラフィックでベルクを紹介しています。
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Works Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.h3
                className="text-gray-900 text-sm font-semibold mb-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Works
              </motion.h3>
              <h4 className="text-2xl font-light text-gray-900 mb-6">仕事紹介</h4>
              <motion.p
                className="text-gray-600 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                私たちはクリエイターが「創造性を最大限に発揮」できる環境づくりを第一に考えています。<br />
                ベルクで新しい出会いと、毎日が輝けるお仕事をご紹介します。
              </motion.p>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.div
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg mr-4"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  whileHover={{ scale: 1.2 }}
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
              transition={{ duration: 0.8, delay: 1.1 }}
              onMouseEnter={() => setHoveredCard('works')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden"
                animate={{
                  backgroundImage: hoveredCard === 'works'
                    ? "linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)"
                    : "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <motion.div
                    className="bg-white/80 rounded-lg p-4 text-center"
                    animate={{
                      scale: hoveredCard === 'works' ? 1.1 : 1,
                      backgroundColor: hoveredCard === 'works' ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.8)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-gray-600">Office Interior</div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}