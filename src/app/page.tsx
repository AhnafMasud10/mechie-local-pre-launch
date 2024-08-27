'use client'
import Image from "next/image";
import { addDoc, collection } from "firebase/firestore";

import { db } from '../firebaseConfig';
import { LaunchSoon } from "./components/launch-soon";
import logoLarge from "./Image/vector-logo.png";
import logoSmall from "./Image/logo-small.png";
import ReactGA from "react-ga";
import TestimonialCarousel from "./components/Carousel";
import MailIcon from "@heroicons/react/solid/MailIcon";
import { useEffect, useState } from "react";


const TRACKING_ID = 'G-8Y2PCC9JRT';
ReactGA.initialize(TRACKING_ID);

export default function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const [email, setEmail] = useState<string>("");

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();  // Prevent default form submission behavior

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      // Add the email to Firestore
      await addDoc(collection(db, "messages"), { email });

      // Track the successful email submission
      ReactGA.event({
        category: 'User',
        action: 'Submitted Email',
        label: 'Join Waitlist',
        value: 1, // Optional value, represents the number of emails submitted
      });

      // Clear the email input after successful submission
      setEmail("");
      alert("Thanks for joining the waitlist.");
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

            <div className="my-5 md:my-10 h-auto text-[#13072e] text-[50px] sm:text-[60px] sm:leading-[64px] md:text-[85px] md:leading-[89px] font-medium leading-[54px]">
              Accelerate Your Mechanical Engineering <br />
              <span className="font-medium gradient-text"> Career to the Next Level</span>
            </div>
            <div className="md:w-[460px] mr-12 sm:text-[20px] text-[15px] font-normal leading-relaxed my-5 md:my-10">
              Join our waitlist to access the platform on a priority basis as soon as we launch!
            </div>
          </div>

          <div className="flex sm:mt-[20px] w-full md:max-w-[28%] sm:max-w-[15%] max-w-[30%] items-center justify-end">
            <div className="hidden md:block">
              <Image
                src={logoLarge}
                alt="logo"
                width={500}
                height={500}
                className="justify-end"
              />
            </div>
            <div className="block md:hidden">
              <Image
                src={logoSmall}
                alt="logo"
                width={200}
                height={200}
                className="justify-end"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start sm:flex mb-12">
          <div className="my-1 justify-center md:w-[540px] sm:w-[450px] w-[400px] h-14 sm:pl-4 pl-2 pr-2 py-1 rounded-3xl border border-[#3e1993]/10 flex items-center">
            <div className="flex-grow flex items-center gap-4">
              <div className="md:h-12 md:w-12 sm:w-10 sm:h-10 h-10 w-10 bg-white rounded-xl border border-[#3f1993]/10 flex items-center justify-center">
                <MailIcon className="md:w-6 md:h-6 w-5 h-5 text-[#6f41d2]" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="flex-grow bg-transparent text-[#13072e]/60 sm:text-base text-sm focus:outline-none"
              />
            </div>
            <button
              onClick={handleClick}
              className="hover:bg-[#a576ff] md:px-6 md:py-4 sm:px-3 sm:py-3 px-2 py-3 bg-[#6f41d2] rounded-tr-xl rounded-br-xl shadow-inner border border-[#a576ff] flex items-center justify-center text-white text-base font-medium"
            >
              Join Waitlist
            </button>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
}
