import React from 'react';
import { MailIcon } from '@heroicons/react/solid'; // Import the Mail icon from Heroicons

export default function EmailNotification() {
  return (
    
    <div className="my-1 justify-center md:w-[540px] md:h-auto sm:w-[450px] w-[400px] h-14 sm:pl-4 pl-2 pr-2 py-1  rounded-3xl border border-[#3e1993]/10 flex items-center">
      <div className="flex-grow flex items-center gap-4">
        {/* Icon Container */}
        <div className="md:h-12 md:w-12 sm:w-10 sm:h-10 h-10 w-10 bg-white rounded-xl border border-[#3f1993]/10 flex items-center justify-center">
          <MailIcon className="md:w-6 md:h-6 w-5 h-5  text-[#6f41d2]" />
        </div>
        
        {/* Input Placeholder */}
        <input
                type="email"
                placeholder="Enter your email..."
                className="md:w-10 sm:w-8 w-6 flex-grow bg-transparent text-[#13072e]/60 sm:text-base sm:font-medium text-sm font-['Inter'] leading-normal focus:outline-none"
              />
      </div>
      {/* Button */}
      <div className="hover:bg-[#a576ff]  md:px-6 md:py-4 sm:px-3 sm:py-3 px-2 py-3 bg-[#6f41d2] rounded-tr-xl rounded-br-xl shadow-inner border border-[#a576ff] flex items-center">
        <button className="text-white text-base font-medium font-['Inter']">
          Join Waitlist
        </button>
      </div>
    </div>
  );
}
