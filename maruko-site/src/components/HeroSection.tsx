'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200"
        animate={{
          background: [
            'linear-gradient(to bottom right, #fbbf24, #c084fc, #60a5fa)',
            'linear-gradient(to bottom right, #f9a8d4, #a78bfa, #93c5fd)',
            'linear-gradient(to bottom right, #fbbf24, #c084fc, #60a5fa)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-pink-300 to-transparent rounded-full opacity-60 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-300 to-transparent rounded-full opacity-40 blur-2xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <motion.p
                className="text-gray-700 text-sm mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                BERG Recruiting Message
              </motion.p>
              <motion.h1
                className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                未来を、一緒に築こう。
              </motion.h1>
            </div>

            <motion.div
              className="space-y-4 text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {['ベルクとの出会いが、新しい視点をくれた。',
                '毎日が充実し、成長を感じられる。',
                '挑戦することは大変だったけれど、',
                'ベルクの仲間たちが支えてくれた。'].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              className="border-l-4 border-gray-400 pl-6 space-y-4 text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >私たちの仕事は「革新」を生み出すことです。</motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >共に挑戦する人たちと歩むことです。</motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >新しい価値観を持つあなただから、</motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >できることがきっと見つかる。</motion.p>
            </motion.div>

            <motion.div
              className="pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <p className="text-gray-600 text-sm mb-2">創造性に満ちた、チームの笑顔が、</p>
              <p className="text-gray-600 text-sm">私たちの明日への原動力です。</p>
            </motion.div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              <h2 className="text-3xl font-light text-gray-900">理想のキャリアへの第一歩を。</h2>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden">
                <motion.div
                  className="w-full h-full relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/HappyWoman.png"
                    alt="Happy Woman - Ideal Career at BERG"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}