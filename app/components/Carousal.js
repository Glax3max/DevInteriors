'use client';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

export default function Carousel() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  // Slide content data
  const slideData = [
    {
      image: "/slide1.jpg",
      category: "BEDDING COMBO",
      title: "Twin Tones pairs best with Embellish, blending balanced tones, quilting and piping.",
      buttonText: "Shop D'Decor towel",
      buttonAction: () => console.log("Navigate to towel collection")
    },
    {
      image: "/slide2.jpg",
      category: "LIVING ROOM",
      title: "Modern comfort meets timeless elegance in our curated living spaces.",
      buttonText: "Explore Living Sets",
      buttonAction: () => console.log("Navigate to living room")
    },
    {
      image: "/slide3.jpg",
      category: "KITCHEN DESIGN",
      title: "Contemporary kitchen solutions that blend functionality with stunning aesthetics.",
      buttonText: "View Kitchen Designs",
      buttonAction: () => console.log("Navigate to kitchen designs")
    },
    {
      image: "/slide4.jpg",
      category: "BATHROOM LUXURY",
      title: "Transform your bathroom into a personal spa retreat with premium finishes.",
      buttonText: "Discover Bath Collection",
      buttonAction: () => console.log("Navigate to bathroom collection")
    },
    {
      image: "/slide5.jpg",
      category: "CURTAINS & DRAPES",
      title: "Elegant window treatments that frame your world with style and sophistication.",
      buttonText: "Browse Curtain Collection",
      buttonAction: () => console.log("Navigate to curtains")
    }
  ];

  // Autoplay workaround
  useEffect(() => {
    let interval;
    if (instanceRef.current) {
      interval = setInterval(() => {
        instanceRef.current.next();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider h-screen">
        {slideData.map((slide, index) => (
          <div key={index} className="keen-slider__slide relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover scale-100 transition-all duration-500"
            />
            
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Text overlay content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="max-w-2xl text-white">
                  {/* Category tag */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-white/20 backdrop-blur-sm rounded-full">
                      {slide.category}
                    </span>
                  </div>
                  
                  {/* Main title */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-8 max-w-lg">
                    {slide.title}
                  </h2>
                  
                  {/* CTA Button */}
                  <button
                    onClick={slide.buttonAction}
                    className="group inline-flex items-center px-8 py-3 bg-white text-gray-900 font-medium text-sm uppercase tracking-wider hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    {slide.buttonText}
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 rounded-full z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 rounded-full z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Optional: Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slideData.map((_, index) => (
          <button
            key={index}
            onClick={() => instanceRef.current?.moveToIdx(index)}
            className="w-3 h-3 rounded-full bg-white/50 hover:bg-white/70 transition-all duration-300"
          />
        ))}
      </div>


    </div>
  );
}