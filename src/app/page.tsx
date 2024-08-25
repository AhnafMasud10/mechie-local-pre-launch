'use client'
import Image from "next/image";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import {  db } from '.././firebaseConfig';
import { LaunchSoon } from "./components/launch-soon";
import logoLarge from "./Image/vector-logo.png"
import logoSmall from "./Image/logo-small.png"

import TestimonialCarousel from "./components/Carousel";
import MailIcon from "@heroicons/react/solid/MailIcon";
import { useRef, useState } from "react";







export default function Home() {
  const [email, setEmail] = useState<string>("");
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();  // Prevent default form submission behavior
  
    // console.log("Email value before Firestore:", email);  // Log the email value

    // Basic email validation using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    try {
      // Add the email to Firestore
      const docRef = await addDoc(collection(db, "messages"), {
        email: email,
      });
  
      // console.log("Document written with ID: ", docRef.id);
  
      // Clear the email input after successful submission
      setEmail("");
      alert("Thanks for joining the waitlist. ");
  
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed.");
    }
  };
  
  



  return (
    <div className="">
      
      <div className="md:ml-20 ml-4 sm:ml-4 my-2 ">
        <div className="flex "> 
        
        <div className="w-full "> 
          <div className="md:mt-5"><LaunchSoon /></div>
          
          <div className="my-5 md:my-10 h-auto text-[#13072e] text-[50px] sm:text-[60px] sm:leading-[64px] md:text-[85px] md:leading-[89px] font-medium {`${roboto.className} text-lg`} leading-[54px]">
            Accelerate Your Mechanical Engineering
            <span className="font-medium font-['Inter'] gradient-text"> Career to the Next Level</span>
          </div>
          <div className=" md:w-[460px] mr-12 sm:text-[20px] text-[15px] font-normal font-['Inter'] leading-relaxed my-5 md:my-10"> 
          Join our waitlist to access the platform on a priority basis as soon as we launch!
          </div>
          {/* <Email></Email> */}
        </div>
        


        


          <div className="flex sm:mt-[20px] w-full md:max-w-[28%] sm:max-w-[15%] max-w-[30%]">

            <div className=" hidden md:block">
                <Image
                    src={logoLarge}// Image for medium and larger screen
                    alt="logo"
                    width={500} 
                    height={500} 
                    className="justify-end"
                  />
              </div>
              <div className="block md:hidden">
                <Image
                    src={logoSmall}// Replace with your image path
                    alt="logo"
                    objectFit="contain"
                    className="justify-end"
                  />
              </div>

          </div>
          


        </div> 
        <div className="flex justify-center lg:justify-start sm:flex  mb-12 ">
          {/* <Email ></Email>*/}

          
          {/* email start */}
          <div className="my-1 justify-center md:w-[540px] md:h-auto sm:w-[450px] w-[400px] h-14 sm:pl-4 pl-2 pr-2 py-1  rounded-3xl border border-[#3e1993]/10 flex items-center">
            <div className="flex-grow flex items-center gap-4">
              {/* Icon Container */}
              <div className="md:h-12 md:w-12 sm:w-10 sm:h-10 h-10 w-10 bg-white rounded-xl border border-[#3f1993]/10 flex items-center justify-center">
                <MailIcon className="md:w-6 md:h-6 w-5 h-5  text-[#6f41d2]" />
              </div>
              
              {/* Input Placeholder */}
              <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email..."
                      className="md:w-10 sm:w-8 w-6 flex-grow bg-transparent text-[#13072e]/60 sm:text-base sm:font-medium text-sm font-['Inter'] leading-normal focus:outline-none"
                    />
            </div>
            {/* Button */}
            <div >
              <button onClick={handleClick} className="hover:bg-[#a576ff] md:px-6 md:py-4 sm:px-3 sm:py-3 px-2 py-3 bg-[#6f41d2] rounded-tr-xl rounded-br-xl shadow-inner border border-[#a576ff] flex items-center justify-center text-white text-base font-medium font-['Inter']"  >
                Join Waitlist
              </button>
            </div>
          </div>
          {/* email end */}


        </div>
        {/* <TestimonialCarousel></TestimonialCarousel> */}
    </div> 
        <div className="container mx-auto px-4">
            <TestimonialCarousel />
        </div>
      
    </div>
  );
}

function setEmail(arg0: string) {
  throw new Error("Function not implemented.");
}
