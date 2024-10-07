import React from 'react';
import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import Match from "@/app/compenment/Match";

function Heroo() {
    const play = "./player.png";
    const porto = "./porto.png";
    const tenu = "./tenu.png";
    const fans = "./fans.png";


    return (
        <div>
        <div className="mt-8 flex flex-col lg:flex-row">
            <Card className="relative w-full lg:w-[300px] h-[450px] mb-6 lg:mb-0">
                {/* Image takes full width and height */}
                <img src={play} alt="player" className="rounded-2xl h-full w-full object-cover" />

                {/* Text and button container */}
                <div className="absolute inset-0 flex flex-col justify-center items-center mt-[320px] rounded-2xl">
                    <p className="text-white text-xl font-semibold mb-4">GET YOUR THIRD KIT</p>
                    <button className="text-white border-white border-2 py-2 px-4 rounded-full text-sm font-bold">SHOP NOW</button>
                </div>
            </Card>

            <div className="flex flex-col lg:flex-row lg:ml-7">
                <Card className="relative w-full lg:w-[300px] h-[450px] mb-6 lg:mb-0">
                    {/* Image */}
                    <div className="flex-grow">
                        <img src={porto} alt="player" className="w-full h-[200px] rounded-2xl object-cover" />
                    </div>

                    {/* Text directly under the image */}
                    <div className="p-3 mt-3">
                        <h1 className="text-center text-lg font-semibold">FC Porto 3 - 3 Manchester United</h1>
                        <p className="text-sm mt-3 text-gray-600">
                            Manchester United a obtenu un point contre le FC Porto en Ligue Europa grâce à un but de Harry Maguire dans les dernières minutes d'un match captivant.
                        </p>
                    </div>

                    <CardContent className="flex justify-between mt-8">
                        <p className="text-sm text-gray-600">3h | news</p>
                        <a href="/">
                            <svg width="17" height="17" className="ml-2" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="... (SVG path here)" />
                            </svg>
                        </a>
                    </CardContent>
                </Card>

                <Card className="relative w-full lg:w-[300px] h-[450px] ml-0 lg:ml-4 mb-6 lg:mb-0">
                    {/* Similar content as above */}
                    <div className="flex-grow">
                        <img src={fans} alt="player" className="w-full h-[200px] rounded-2xl object-cover" />
                    </div>

                    <div className="p-3 mt-3">
                        <h1 className="text-center text-lg font-semibold">FC Porto 3 - 3 Manchester United</h1>
                        <p className="text-sm mt-3 text-gray-600">
                            Manchester United a obtenu un point contre le FC Porto en Ligue Europa grâce à un but de Harry Maguire dans les dernières minutes d'un match captivant.
                        </p>
                    </div>

                    <CardContent className="flex justify-between mt-8">
                        <p className="text-sm text-gray-600">3h | news</p>
                        <a href="/">
                            <svg width="17" height="17" className="ml-2" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="... (SVG path here)" />
                            </svg>
                        </a>
                    </CardContent>
                </Card>

                <Card className="relative w-full lg:w-[300px] h-[450px] ml-0 lg:ml-1">
                    {/* Similar content as above */}
                    <div className="flex-grow">
                        <img src={tenu} alt="player" className="w-full h-[200px] rounded-2xl object-cover" />
                    </div>

                    <div className="p-3 mt-3">
                        <h1 className="text-center text-lg font-semibold">FC Porto 3 - 3 Manchester United</h1>
                        <p className="text-sm mt-3 text-gray-600">
                            Manchester United a obtenu un point contre le FC Porto en Ligue Europa grâce à un but de Harry Maguire dans les dernières minutes d'un match captivant.
                        </p>
                    </div>

                    <CardContent className="flex justify-between mt-8">
                        <p className="text-sm text-gray-600">3h | news</p>
                        <a href="/">
                            <svg width="17" height="17" className="ml-2" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="... (SVG path here)" />
                            </svg>
                        </a>
                    </CardContent>
                </Card>
            </div>

        </div>
            <Match/>
        </div>
    );
}

export default Heroo;
