"use client";
import React, { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";
import Footer from "@/app/compenment/Footer"; // Ensure you have this imported correctly

function Match() {
    const pre = "./pre.svg"; // Your logo image path
    const united = "./united.png";
    const bre = "./bre.png";
    const COUNTDOWN_FROM = "2024-10-01"; // Define this in the parent scope

    return (
        <div className="relative mt-5 mr-5">
            {/* Image */}
            <img
                src="https://c1.wallpaperflare.com/preview/504/196/46/old-trafford-manchester-united-stadium-stadion.jpg"
                className="h-[500px] w-full object-cover rounded-xl"
                alt="Old Trafford Stadium"
            />

            {/* Logo and countdown overlay */}
            <div className="absolute inset-0 flex flex-col justify-start items-center pt-5">
                {/* Logo centered horizontally */}
                <img src={pre} alt="logo" className="mt-12" width={180} height={70} />

                {/* Countdown timer directly under the logo */}
                <div className="p-4 rounded-lg mt-4 bg-black bg-opacity-50">
                    <div className="flex w-full items-center justify-between">
                        <CountdownItem unit="Day" text="days" countdownFrom={COUNTDOWN_FROM} />
                        <CountdownItem unit="Hour" text="hours" countdownFrom={COUNTDOWN_FROM} />
                        <CountdownItem unit="Minute" text="minutes" countdownFrom={COUNTDOWN_FROM} />
                        <CountdownItem unit="Second" text="seconds" countdownFrom={COUNTDOWN_FROM} />
                    </div>
                </div>
                {/* Centering the VS text */}
                <div className="flex items-center mt-4 ml-[150px]">
                    <span className="text-white font-bold text-5xl">MAN UTD</span>
                    {/* Adding margin to the image */}
                    <img src={united} alt="Manchester United logo" width={100} className="ml-2" />
                    <p className="text-black font-bold text-3xl ml-4">VS</p>
                    <img src={bre} alt="Opponent logo" width={130} />
                    <span className="text-white font-bold text-5xl">BRENTFORDFC</span>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

const CountdownItem = ({ unit, text, countdownFrom }) => {
    const { ref, time } = useTimer(unit, countdownFrom);

    return (
        <div className="flex h-24 w-1/4 flex-col items-center justify-center gap-1 font-mono md:h-36 md:gap-2">
            <div className="relative w-full overflow-hidden text-center">
                <span
                    ref={ref}
                    className="block text-2xl font-medium text-white md:text-4xl lg:text-6xl xl:text-7xl"
                >
                    {time}
                </span>
            </div>
            <span className="text-xs font-light text-white md:text-sm lg:text-base">
                {text}
            </span>
        </div>
    );
};

const useTimer = (unit, countdownFrom) => {
    const [ref, animate] = useAnimate();
    const intervalRef = useRef(null);
    const timeRef = useRef(0);
    const [time, setTime] = useState(0);

    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    useEffect(() => {
        intervalRef.current = setInterval(handleCountdown, 1000);
        return () => clearInterval(intervalRef.current || undefined);
    }, []);

    const handleCountdown = async () => {
        const end = new Date(countdownFrom);
        const now = new Date();
        const distance = +end - +now;
        let newTime = 0;

        if (unit === "Day") {
            newTime = Math.floor(distance / DAY);
        } else if (unit === "Hour") {
            newTime = Math.floor((distance % DAY) / HOUR);
        } else if (unit === "Minute") {
            newTime = Math.floor((distance % HOUR) / MINUTE);
        } else {
            newTime = Math.floor((distance % MINUTE) / SECOND);
        }

        if (newTime !== timeRef.current) {
            // Exit animation
            if (ref.current) {
                await animate(
                    ref.current,
                    { y: ["0%", "-50%"], opacity: [1, 0] },
                    { duration: 0.35 }
                );
            }

            timeRef.current = newTime;
            setTime(newTime);

            // Enter animation
            if (ref.current) {
                await animate(
                    ref.current,
                    { y: ["50%", "0%"], opacity: [0, 1] },
                    { duration: 0.35 }
                );
            }
        }
    };

    return { ref, time };
};

export default Match;
