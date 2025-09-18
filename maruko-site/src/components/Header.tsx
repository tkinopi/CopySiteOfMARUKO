export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="text-blue-600 font-bold text-xl">BERG</span>
          <span className="text-gray-600 ml-2 text-sm">Recruiting Site</span>
        </div>
      </div>
    </header>
  );
}