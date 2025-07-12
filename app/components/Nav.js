import { Heart, User, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex flex-col">
          <span className="text-2xl font-semibold">Dev Interiors</span>
          <span className="text-sm text-gray-500 -mt-1">Serene elegance</span>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex space-x-4 border border-black rounded-full px-6 py-2 font-medium text-sm items-center">
          <a href="#" className="font-bold">Shop</a>
          <a href="#" className="text-gray-600 hover:text-black">Blog</a>
          <a href="#" className="text-gray-600 hover:text-black">Style Expert</a>
          <a href="#" className="text-gray-600 hover:text-black">Store Location</a>
        </nav>

        {/* Icon Buttons */}
        <div className="flex items-center space-x-4">
          <button className="hover:text-black text-gray-600">
            <Heart size={20} />
          </button>

          {/* Dealer Contact */}
          <a href="tel:+919999999999" className="flex items-center gap-1 text-gray-600 hover:text-black">
            <Phone size={18} />
            <span className="text-sm">Contact</span>
          </a>

          <button className="hover:text-black text-gray-600">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
