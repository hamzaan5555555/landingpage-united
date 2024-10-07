"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Heroo from "@/app/compenment/Heroo";

function Hero() {
    const image = "./entt.png";
    const ent = "./ent.png";

    const [isHoveredFirst, setIsHoveredFirst] = useState(false);
    const [isHoveredSecond, setIsHoveredSecond] = useState(false);

    return (
        <div className="h-[1570px] w-auto mt-[78px] bg-slate-100 relative">
            <div className="absolute mt-5 left-3">
                <hr className="bg-red-600 h-1 w-[80px]" />
                <p className="text-xl font-bold uppercase mt-5">Today on ManUtd.com</p>
                <div className="flex flex-col md:flex-row mt-4 space-y-4 md:space-y-0 md:space-x-8">
                    <Card className="w-full md:w-[600px] h-[350px] cursor-pointer flex">
                        {/* Partie photo */}
                        <div className="w-1/2 h-full">
                            <img
                                onMouseEnter={() => setIsHoveredFirst(true)}
                                onMouseLeave={() => setIsHoveredFirst(false)}
                                src={image}
                                alt="Description"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>

                        {/* Partie texte */}
                        <div className="w-1/2 p-4 flex flex-col relative"
                             onMouseEnter={() => setIsHoveredFirst(true)}
                             onMouseLeave={() => setIsHoveredFirst(false)}
                        >
                            {/* Ligne animée */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={isHoveredFirst ? { scaleX: 1 } : { scaleX: 0 }}
                                transition={{ duration: 0.4 }}
                                className="h-1 bg-red-600 mb-2"
                            />
                            <h2 className="text-2xl font-bold tracking-wider text-black mb-2">
                                HOW UNITED HAVE PREPARED FOR VILLA SHOWDOWN
                            </h2>
                            <p className="text-gray-700 font-medium">
                                The club has benefited from using Boavista's facilities in the build-up to Sunday's game.
                            </p>
                            <div className="flex justify-between mt-auto">
                                <p>
                                    <span className="text-gray-600 text-sm">3h</span> | <span className="text-gray-600 text-sm">news</span>
                                </p>
                                <a href="/">
                                    <svg
                                        width="17"
                                        height="17"
                                        className="ml-2"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 7.50003C5 8.32845 4.32843 9.00003 3.5 9.00003C2.67157 9.00003 2 8.32845 2 7.50003C2 6.6716 2.67157 6.00003 3.5 6.00003C4.32843 6.00003 5 6.6716 5 7.50003ZM5.71313 8.66388C5.29445 9.45838 4.46048 10 3.5 10C2.11929 10 1 8.88074 1 7.50003C1 6.11931 2.11929 5.00003 3.5 5.00003C4.46048 5.00003 5.29445 5.54167 5.71313 6.33616L9.10424 4.21671C9.03643 3.98968 9 3.74911 9 3.50003C9 2.11932 10.1193 1.00003 11.5 1.00003C12.8807 1.00003 14 2.11932 14 3.50003C14 4.88074 12.8807 6.00003 11.5 6.00003C10.6915 6.00003 9.97264 5.61624 9.51566 5.0209L5.9853 7.22738C5.99502 7.31692 6 7.40789 6 7.50003C6 7.59216 5.99502 7.68312 5.9853 7.77267L9.51567 9.97915C9.97265 9.38382 10.6915 9.00003 11.5 9.00003C12.8807 9.00003 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5C9 11.2509 9.03643 11.0104 9.10425 10.7833L5.71313 8.66388ZM11.5 5.00003C12.3284 5.00003 13 4.32846 13 3.50003C13 2.6716 12.3284 2.00003 11.5 2.00003C10.6716 2.00003 10 2.6716 10 3.50003C10 4.32846 10.6716 5.00003 11.5 5.00003ZM13 11.5C13 12.3285 12.3284 13 11.5 13C10.6716 13 10 12.3285 10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </Card>

                    <Card className="w-full md:w-[600px] h-[350px] cursor-pointer flex">
                        {/* Partie photo */}
                        <div className="w-1/2 h-full">
                            <img
                                onMouseEnter={() => setIsHoveredSecond(true)}
                                onMouseLeave={() => setIsHoveredSecond(false)}
                                src={ent}
                                alt="Description"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>

                        {/* Partie texte */}
                        <div className="w-1/2 p-4 flex flex-col relative"
                             onMouseEnter={() => setIsHoveredSecond(true)}
                             onMouseLeave={() => setIsHoveredSecond(false)}
                        >
                            {/* Ligne animée */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={isHoveredSecond ? { scaleX: 1 } : { scaleX: 0 }}
                                transition={{ duration: 0.4 }}
                                className="h-1 bg-red-600 mb-2"
                            />
                            <h2 className="text-2xl font-bold tracking-wider text-black mb-2">
                                HOW UNITED HAVE PREPARED FOR VILLA SHOWDOWN
                            </h2>
                            <p className="text-gray-700 font-medium">
                                The club has benefited from using Boavista's facilities in the build-up to Sunday's game.
                            </p>
                            <div className="flex justify-between mt-auto">
                                <p>
                                    <span className="text-gray-600 text-sm">3h</span> | <span className="text-gray-600 text-sm">news</span>
                                </p>
                                <a href="/">
                                    <svg
                                        width="17"
                                        height="17"
                                        className="ml-2"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 7.50003C5 8.32845 4.32843 9.00003 3.5 9.00003C2.67157 9.00003 2 8.32845 2 7.50003C2 6.6716 2.67157 6.00003 3.5 6.00003C4.32843 6.00003 5 6.6716 5 7.50003ZM5.71313 8.66388C5.29445 9.45838 4.46048 10 3.5 10C2.11929 10 1 8.88074 1 7.50003C1 6.11931 2.11929 5.00003 3.5 5.00003C4.46048 5.00003 5.29445 5.54167 5.71313 6.33616L9.10424 4.21671C9.03643 3.98968 9 3.74911 9 3.50003C9 2.11932 10.1193 1.00003 11.5 1.00003C12.8807 1.00003 14 2.11932 14 3.50003C14 4.88074 12.8807 6.00003 11.5 6.00003C10.6915 6.00003 9.97264 5.61624 9.51566 5.0209L5.9853 7.22738C5.99502 7.31692 6 7.40789 6 7.50003C6 7.59216 5.99502 7.68312 5.9853 7.77267L9.51567 9.97915C9.97265 9.38382 10.6915 9.00003 11.5 9.00003C12.8807 9.00003 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5C9 11.2509 9.03643 11.0104 9.10425 10.7833L5.71313 8.66388ZM11.5 5.00003C12.3284 5.00003 13 4.32846 13 3.50003C13 2.6716 12.3284 2.00003 11.5 2.00003C10.6716 2.00003 10 2.6716 10 3.50003C10 4.32846 10.6716 5.00003 11.5 5.00003ZM13 11.5C13 12.3285 12.3284 13 11.5 13C10.6716 13 10 12.3285 10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </Card>

                </div>
                <Heroo/>
            </div>
        </div>
    );
}

export default Hero;
