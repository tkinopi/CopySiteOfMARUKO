'use client';
import { useState } from 'react';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button - Fixed on left side */}
      <button
        className="fixed top-6 left-6 z-[100] w-12 h-12 flex flex-col justify-center items-center bg-white rounded-full shadow-lg transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${isOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      {/* Menu Overlay - Higher z-index to cover everything except header */}
      <div className={`fixed inset-0 z-[90] transition-all duration-500 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-white">
          <div className="max-w-6xl mx-auto px-4 pt-24 pb-8">
            {/* Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              {/* About Section */}
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">#01 About</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="text-sm">ベルクが目指す未来</p>
                  <p className="text-sm">会社概要</p>
                  <p className="text-sm">お仕事紹介</p>
                  <p className="text-sm">データで見るベルク</p>
                </div>
              </div>

              {/* People Section */}
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">#02 People</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="text-sm">社員紹介インタビュー</p>
                  <p className="text-sm">社員座談会</p>
                </div>
              </div>

              {/* Environment Section */}
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">#03 Environment</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="text-sm">ベルクの働き方</p>
                  <p className="text-sm">ベルクの仕事風景</p>
                </div>
              </div>

              {/* Information Section */}
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">#04 Information</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="text-sm">よくあるご質問</p>
                  <p className="text-sm">募集要項</p>
                  <p className="text-sm">個人情報の取扱いについて</p>
                </div>
              </div>
            </div>

            {/* Close Icon */}
            <div className="flex justify-start">
              <button
                onClick={() => setIsOpen(false)}
                className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-400 text-2xl">×</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}