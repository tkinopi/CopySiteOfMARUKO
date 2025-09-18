export default function RequirementsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 min-h-[60vh]">
          {/* Requirements */}
          <div className="flex flex-col justify-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-12 shadow-lg">
              <h3 className="text-gray-700 text-sm font-semibold mb-2">募集要項</h3>
              <h2 className="text-4xl font-light text-white mb-8">Requirements</h2>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-gray-400 text-lg">→</span>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="flex flex-col justify-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-12 shadow-lg">
              <h3 className="text-gray-700 text-sm font-semibold mb-2">よくあるご質問</h3>
              <h2 className="text-4xl font-light text-gray-800 mb-8">FAQ</h2>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-orange-400 text-lg">→</span>
                </div>
              </div>
              <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                <div className="text-red-400 text-6xl font-light opacity-20 rotate-12">
                  BERG
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}