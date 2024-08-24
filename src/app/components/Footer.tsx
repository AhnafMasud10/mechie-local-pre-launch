import React, {useState, useEffect} from "react";
import { FunctionComponent } from 'react';

import logo from "../Image/Group 2.svg"
import companyName from "../Image/mechie.svg"
import Image from "next/image"


const Footer:FunctionComponent = () =>{
    return(
        <footer className="border py-10">
            <div className="flex items-center justify-center mb-5">

                <div className="w-[120.5px] h-6  flex items-center">
                    <div className="relative h-full w-full flex items-center justify-between">
                        <Image
                        className="h-full w-auto"
                        alt="company logo"
                        src={logo}
                        />
                        <Image
                        className="h-[80%] w-auto"
                        alt="company name"
                        src={companyName}
                        />
                    </div>
                </div>
                


                
            </div>
            <div className="flex justify-center items-center mb-4 pt-0 w-full text-center text-[#13072e] text-base font-normal font-['Inter']">
                <div className="w-[309px]">
                    Sign up to get access to the platform on a priority basis as soon as we launch!
                </div>
            </div>
            <div className="flex justify-center items-center h-5 gap-6 my-10">
            <div className="text-center text-[#13072e]/60 text-base font-normal font-['Inter'] leading-tight">
                <a href="https://www.youtube.com/@TamerShaheen" target="_blank" rel="noopener noreferrer" className="hover:text-[#13072e]">
                    YouTube
                </a>
            </div>
            <div className="text-center text-[#13072e]/60 text-base font-normal font-['Inter'] leading-tight">
                <a href="https://www.instagram.com/tamerxi/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-[#13072e]">
                    Instagram
                </a>
            </div>
            <div className="text-center text-[#13072e]/60 text-base font-normal font-['Inter'] leading-tight">
                <a href="https://x.com/tamerxi?lang=en" target="_blank" rel="noopener noreferrer" className="hover:text-[#13072e]">
                    Twitter
                </a>
            </div>

                </div>

            <div className="flex justify-center items-center my-10">
                <div className=" text-[#13072e]/60 text-sm font-normal font-['Inter'] leading-tight">© 2024 | Mechie. All rights reserved.</div>

            </div>
        </footer>
    );
};


export default Footer