'use client';

import Image from 'next/image';
import React from 'react';

const services = [
  { title: 'Sales of all types of Interior Articles', img2: '/curtain.png' },
  { title: 'Installation and setup of all types of Interior Articles', img2: '/blind.png' },
  { title: 'Kids and creator friendly rooms setups', img2: '/child.png' },
];

export default function ServiceSection() {
  return (
    <section className=" w-full">
      {/* Background Image */}
      <div className="bg-[url(/worker.jpg)] bg-no-repeat bg-cover bg-center w-full py-16 flex items-center justify-center relative">
        {/* Overlay for better contrast on smaller screens (optional) */}
        <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>

        {/* Services Cards */}
        <div className="relative z-10 w-full max-w-7xl px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="w-full sm:w-64 md:w-64 lg:w-64 bg-white rounded-2xl h-60 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col items-center justify-center relative"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gray-100 rounded-full border border-b-black flex items-center justify-center absolute -top-6">
                  <Image
                    src={service.img2}
                    alt="Service Icon"
                    width={30}
                    height={30}
                  />
                </div>

                {/* Spacer */}
                <div className="mt-10"></div>

                {/* Title */}
                <h3 className="font-extrabold text-lg text-center px-4">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
