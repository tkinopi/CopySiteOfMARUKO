'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function WorkPeople() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2
            className="text-sm text-gray-600 mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Work&
          </motion.h2>
          <motion.h3
            className="text-5xl font-light text-gray-900 mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            People
          </motion.h3>
          <motion.h4
            className="text-xl text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            ベルクスタッフと、「理想のキャリア」
          </motion.h4>
          <motion.p
            className="text-gray-600 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            現在のお仕事内容や、ベルクとの出会い、ベルクの魅力について、<br />
            私たち一人ひとりの、「理想のキャリア」についてお話します。
          </motion.p>
          <motion.p
            className="text-xs text-gray-500 mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            ※取材当時
          </motion.p>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex justify-end mb-8 space-x-4">
          <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50">
            <span className="text-gray-400">‹</span>
          </button>
          <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50">
            <span className="text-gray-400">›</span>
          </button>
        </div>

        {/* Staff Profiles */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Staff Member 1 - M.O */}
          <motion.div
            className="group"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ y: -10 }}
          >
            <div className="relative mb-6">
              <motion.div
                className="aspect-[3/4] bg-white rounded-lg overflow-hidden mb-4 shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full relative">
                  <Image
                    src="/images/M.O.png"
                    alt="M.O - Staff Member"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <p className="text-sm text-gray-700 leading-relaxed">
                  創造性と向上心が<br />
                  育つ環境が魅力です。
                </p>
              </motion.div>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 text-lg">M.O</h5>
              <p className="text-gray-600 text-sm">2013年入社</p>
            </div>
          </motion.div>

          {/* Staff Member 2 - A.S */}
          <motion.div
            className="group"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ y: -10 }}
          >
            <div className="relative mb-6">
              <motion.div
                className="aspect-[3/4] bg-white rounded-lg overflow-hidden mb-4 shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full relative">
                  <Image
                    src="/images/A.S.png"
                    alt="A.S - Staff Member"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <p className="text-sm text-gray-700 leading-relaxed">
                  チームワークと<br />
                  成長できる職場です。
                </p>
              </motion.div>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 text-lg">A.S</h5>
              <p className="text-gray-600 text-sm">2015年入社</p>
            </div>
          </motion.div>

          {/* Staff Member 3 - K.T */}
          <motion.div
            className="group"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ y: -10 }}
          >
            <div className="relative mb-6">
              <motion.div
                className="aspect-[3/4] bg-white rounded-lg overflow-hidden mb-4 shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full relative">
                  <Image
                    src="/images/K.T.png"
                    alt="K.T - Staff Member"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <p className="text-sm text-gray-700 leading-relaxed">
                  自分らしさを活かせる<br />
                  やりがいのある仕事です。
                </p>
              </motion.div>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 text-lg">K.T</h5>
              <p className="text-gray-600 text-sm">2017年入社</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}