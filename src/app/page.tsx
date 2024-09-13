"use client";
import Image from "next/image";
import { addDoc, collection } from "firebase/firestore";

import { db } from "../firebaseConfig";
import ReactGA from "react-ga";
import { LaunchSoon } from "./components/launch-soon";
import logoLarge from "./Image/vector-logo.png";
import logoSmall from "./Image/logo-small.png";
import TestimonialCarousel from "./components/Carousel";
import MailIcon from "@heroicons/react/solid/MailIcon";
import { useEffect, useState } from "react";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebaseConfig";
const TRACKING_ID = "G-386RZ7TX47";
ReactGA.initialize(TRACKING_ID);

export default function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);

    // Track page view with Firebase Analytics
    if (typeof window !== "undefined" && analytics) {
      logEvent(analytics, "page_view", { page_path: window.location.pathname });
    }
  }, []);

  const [email, setEmail] = useState<string>("");

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

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
        category: "User",
        action: "Submitted Email",
        label: "Join Waitlist",
        value: 1, // Optional value, represents the number of emails submitted
      });

      // Track the successful email submission with Firebase Analytics
      if (typeof window !== "undefined" && analytics) {
        logEvent(analytics, "submit_email", {
          category: "User",
          action: "Submitted Email",
          label: "Join Waitlist",
        });
      }

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
      <div className="lg:ml-20 sm:ml-8 my-2 ">
        <div className="flex ">
          <div className="w-full ">
            <div className="md:mt-5 ml-4">
              <LaunchSoon />
            </div>

            <div className="mx-5 sm:ml-0 my-5 h-auto text-[#13072e] text-[36px] leading-[40px] sm:text-[40px] sm:leading-[44px] lg:text-[85px] lg:leading-[89px] font-medium ">
              Accelerate Your Mechanical Engineering <br />
              <span className="font-medium gradient-text ">
                {" "}
                Career to the Next Level
              </span>
            </div>
            <div className="md:w-[460px] mr-12 sm:text-[20px] text-[18px] font-normal leading-relaxed my-5 md:my-10 hidden md:block">
              Join our waitlist to access the platform on a priority basis as
              soon as we launch!
            </div>
          </div>

          <div className="flex sm:mt-[20px] w-full md:max-w-[28%] sm:max-w-[25%] max-w-[25%] items-start md:items-center justify-end">
            <div className="hidden md:block ">
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
                width={100}
                height={100}
                className="justify-end"
              />
            </div>
          </div>
        </div>
        <div className="mx-4 md:w-[460px]  sm:text-[20px] text-[20px]  font-normal leading-relaxed pb-3 md:my-10 md:hidden block">
          Join our waitlist to access the platform on a priority basis as soon
          as we launch!
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
        {/* <div className="container mx-auto px-4">
          <TestimonialCarousel />
        </div> */}

          
        
      </div>
      <div className="md:mx-auto w-full lg:w-[60%] my-16 ">
          <video controls width="100%" autoPlay muted loop>
            <source src="/videos/Promo.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      <div className="container mx-auto ">
        <TestimonialCarousel />
      </div>
    </div>
  );
}
