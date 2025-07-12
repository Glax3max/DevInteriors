'use client'
import React, { useRef, useState } from 'react';

// Dummy data for categories
const categoriesData = [
  {
    id: 1,
    name: 'Bath',
    imageUrl: '/bath.jpg', // Placeholder image
    overlayColor: 'bg-white',
    textColor: 'text-gray-800'
  },
  {
    id: 2,
    name: 'Cushion Covers',
    imageUrl: '/cushion.jpg', // Placeholder image
    overlayColor: 'bg-gray-800',
    textColor: 'text-white'
  },
  {
    id: 3,
    name: 'Bedding',
    imageUrl: '/room.jpg', // Placeholder image
    overlayColor: 'bg-white',
    textColor: 'text-gray-800'
  },
  {
    id: 4,
    name: 'Curtains',
    imageUrl: '/curtain.jpg', // Placeholder image
    overlayColor: 'bg-gray-800',
    textColor: 'text-white'
  },
  {
    id: 5,
    name: 'Rugs',
    imageUrl: '/rugs.jpg', // Placeholder image
    overlayColor: 'bg-white',
    textColor: 'gray-800'
  },
];

const CategoryCard = ({ category }) => {
  return (
    // Group class enables group-hover utilities on child elements
    <div className="relative flex-shrink-0 w-64 h-96 rounded-lg overflow-hidden shadow-lg group">
      {/* Category Image */}
      <img
        src={category.imageUrl}
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-550 group-hover:scale-105"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x800/cccccc/333333?text=Image+Error"; }}
      />

      {/* Overlay Box */}
      <div
        className={`absolute bottom-0 left-0 flex  text-center align-middle justify-around p-4  m-4 ${category.overlayColor} rounded-tr-lg
                   transition-all duration-550 ease-in-out
                   w-3/4 group-hover:w-full`} // Initial width and expands on hover
      >
        <p className={`text-xs font-semibold uppercase tracking-wider ${category.textColor} opacity-80 mb-1`}>
          Shop
        </p>
        <div className="flex justify-between items-center">
          <h3 className={`text-sm font-bold ${category.textColor} overflow-hidden`}>
            {category.name}
          </h3>
          {/* Arrow Icon */}
          <svg
            className={`w-5 h-5 ${category.textColor} opacity-0 group-hover:opacity-100
                       transition-opacity duration-550 ease-in-out`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const scrollContainerRef = useRef(null);

  // Function to scroll the carousel left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.offsetWidth / 2, // Scroll by half the container width
        behavior: 'smooth',
      });
    }
  };

  // Function to scroll the carousel right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.offsetWidth / 2, // Scroll by half the container width
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="font-sans antialiased bg-gray-50 min-h-full flex items-center justify-center p-4 pt-1 ">
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md
                     hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 z-10"
          aria-label="Scroll left"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        {/* Categories Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-hidden scrollbar-hide space-x-6 p-4" // scrollbar-hide is a custom utility
          style={{ scrollBehavior: 'smooth' }} // Ensures smooth scrolling for mouse wheel/trackpad
        >
          {categoriesData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md
                     hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 z-10"
          aria-label="Scroll right"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
