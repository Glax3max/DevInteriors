'use client';

export default function SubNav() {
  return (
    <nav className="sticky top-20 left-0 right-0 z-20 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="font-bold text-xl">Dev INTERIOR</div>
            <div className="hidden md:flex space-x-6 text-sm">
              <button className="hover:text-gray-600 transition-colors">Bedding</button>
              <button className="hover:text-gray-600 transition-colors">Bath</button>
              <button className="hover:text-gray-600 transition-colors">Ready Made Curtains</button>
              <button className="hover:text-gray-600 transition-colors">Cushion Covers</button>
              <button className="hover:text-gray-600 transition-colors">Gifting</button>
              <button className="hover:text-gray-600 transition-colors">Kids</button>
              <button className="hover:text-gray-600 transition-colors">Decor</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}