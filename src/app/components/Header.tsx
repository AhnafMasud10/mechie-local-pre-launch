import React, { FunctionComponent } from "react";
import Image from "next/image";
import logo from "../Image/Group 2.svg";
import companyName from "../Image/mechie.svg";
import line from "../Image/line.png"
const Header: FunctionComponent = () => {
    return (
        <nav className="mr-1 w-full relative border-[#f9fafb] border-b-1 border-solid box-border h-20 overflow-hidden shrink-0 py-2 md:px-12 px-6 flex items-center justify-start text-left text-sm text-[#09090b] font-roboto">
            <div className="flex items-center ">
                <Image src={logo} alt="logo" className="h-6 w-auto mx-3" />
                <Image src={companyName} alt="company name" className="h-6 w-auto" />
            </div>
            <div className="flex items-center mr-2 ">
                <Image src={line} alt="line" className="h-7 w-auto mx-2" />
            </div>
            <div className="flex items-center mr-2">
                <div className="text-sm font-normal text-purple-900 font-sans w-26" style={{ lineHeight: '1.1' }}>
                    leetcode for mechanical <br /> engineers
                </div>
                {/* Uncomment the following block if you want to add a button */}
                {/* <div className="h-11 px-5 py-2 bg-[#6f41d2] hover:bg-[#a576ff] rounded-xl shadow-inner border border-[#a576ff] flex items-center justify-center ml-5">
                    <div className="relative leading-[20px] font-medium text-white text-sm font-['Inter'] text-center">
                        Join Waitlist
                    </div>
                </div> */}
            </div>
        </nav>
    );
};

export default Header;
