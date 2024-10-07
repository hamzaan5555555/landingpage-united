"use client";
import React, { useState, useEffect } from "react";

import { CalendarIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import Scrollspy from "react-scrollspy";
import { motion } from "framer-motion";

function Navbaar() {
    const image = "./united.png"; // Image path for the logo
    const man = "./man.jpeg";
    const woman = "./woman.jpeg";

    const [isHoveredMan, setIsHoveredMan] = useState(false);
    const [isHoveredWoman, setIsHoveredWoman] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const items = [
        {
            title: "TEAM",
            content: (
                <>
                    <h4 className="text-sm font-semibold">Équipe</h4>
                    <p className="text-sm">Les joueurs de l'équipe de Old Trafford.</p>
                    <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                        <span className="text-xs text-muted-foreground">
                            Date d'ajout: Janvier 2024
                        </span>
                    </div>
                </>
            ),
        },
        {
            title: "MUTV",
            content: (
                <>
                    <h4 className="text-sm font-semibold">MUTV</h4>
                    <p className="text-sm">
                        Le service de diffusion en direct de Manchester United.
                    </p>
                    <Button className="mt-2">Regarder maintenant</Button>
                </>
            ),
        },
        {
            title: "SHOP",
            content: (
                <>
                    <h4 className="text-sm font-semibold">Boutique</h4>
                    <p className="text-sm">Boutique officielle de Manchester United.</p>
                    <p className="text-xs text-muted-foreground">
                        Découvrez nos nouveaux articles!
                    </p>
                </>
            ),
        },
        {
            title: "FIXTURES",
            content: (
                <>
                    <h4 className="text-sm font-semibold">Calendrier</h4>
                    <p className="text-sm">Le calendrier des prochains matchs.</p>
                    <p className="text-xs text-muted-foreground">
                        Consultez les horaires des matchs à venir.
                    </p>
                </>
            ),
        },
        {
            title: "TICKET",
            content: (
                <>
                    <h4 className="text-sm font-semibold">Billets</h4>
                    <p className="text-sm">Achetez vos billets pour les matchs.</p>
                    <Button className="mt-2">Acheter des billets</Button>
                </>
            ),
        },
        {
            title: "MY UNITED",
            content: (
                <>
                    <h4 className="text-sm font-semibold">Mon United</h4>
                    <p className="text-sm">Votre compte personnel pour suivre votre équipe.</p>
                </>
            ),
        },
        {
            title: "FANS",
            content: (
                <>
                    <h4 className="text-sm font-semibold">Fans</h4>
                    <p className="text-sm">La communauté des supporters de Manchester United.</p>
                </>
            ),
        },
        {
            title: "PLAYERS",
            content: (
                <Scrollspy>
                    <div>
                        <div className="">
                            <nav>
                                <ul className="flex justify-start gap-40 font-light mt-4">
                                    {["Men", "Women", "Academy", "Legend"].map(
                                        (playerType) => {
                                            const [isHovered, setIsHovered] = useState(false);

                                            return (
                                                <li
                                                    key={playerType}
                                                    className="relative"
                                                    onMouseEnter={() => setIsHovered(true)}
                                                    onMouseLeave={() => setIsHovered(false)}
                                                >
                                                    <a
                                                        className="text-black transition"
                                                        href="#"
                                                    >
                                                        {playerType}
                                                    </a>
                                                    {isHovered && (
                                                        <motion.span
                                                            layoutId="underline"
                                                            initial={{ scaleX: 0 }}
                                                            animate={{
                                                                scaleX: 1,
                                                                opacity: 1,
                                                            }}
                                                            exit={{
                                                                scaleX: 0,
                                                                opacity: 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.4,
                                                            }}
                                                            className="absolute -bottom-1 left-0 right-0 h-0.5 origin-left scale-x-0 bg-red-700"
                                                        />
                                                    )}
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </nav>
                        </div>
                        <div className="mt-6 font-bold">
                            <h1>MEET THE SQUAD</h1>
                            <div className="flex mt-3">
                                <div
                                    className="relative"
                                    onMouseEnter={() => setIsHoveredMan(true)}
                                    onMouseLeave={() => setIsHoveredMan(false)}
                                >
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        src={man}
                                        className="rounded-2xl w-[300px] h-[200px]"
                                    />
                                    <p className="absolute bottom-4 left-2 text-white font-bold text-2xl ml-3">
                                        Man
                                    </p>
                                    {isHoveredMan && (
                                        <motion.span
                                            layoutId="underline-man"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            exit={{ scaleX: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className=" absolute left-[15px] right-auto h-1 w-[70px] bg-red-700"
                                        />
                                    )}
                                </div>
                                <div className="mx-3" />
                                <div
                                    className="relative"
                                    onMouseEnter={() => setIsHoveredWoman(true)}
                                    onMouseLeave={() => setIsHoveredWoman(false)}
                                >
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        src={woman}
                                        className="rounded-2xl w-[300px] h-[200px]"
                                    />
                                    <p className="absolute bottom-4 left-2 text-white font-bold text-2xl ml-3">
                                        Woman
                                    </p>
                                    {isHoveredWoman && (
                                        <motion.span
                                            layoutId="underline-woman"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            exit={{ scaleX: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className=" absolute left-[30px] right-auto h-1 w-[70px] bg-red-700"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Scrollspy>
            ),
        },
        {
            title: "OLD TRAFFORD",
            content: (
                <>
                    <h4 className="text-sm font-semibold">Old Trafford</h4>
                    <p className="text-sm">Le stade emblématique de Manchester United.</p>
                </>
            ),
        },
        {
            title: "MORE",
            content: (
                <>
                    <h4 className="text-sm font-semibold">Plus</h4>
                    <p className="text-sm">Découvrez plus de contenus et d'actualités.</p>
                </>
            ),
        },
    ];

    // Effet pour détecter le scroll et activer la classe sticky
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`w-full h-[82px] bg-red-700 flex items-center justify-between px-3 ${
                isSticky ? "fixed top-0 left-0 z-50 w-full" : ""
            } transition-all duration-300 ease-in-out`}
        >
            <div className="flex justify-center w-full md:justify-start">
                <img
                    src={image}
                    alt="logo"
                    className="w-[52px] md:w-[72px] h-[52px] md:h-[72px] mx-auto md:mx-0"
                />
                <div className="hidden md:flex ml-3 md:ml-5 mt-4 md:mt-6 cursor-pointer gap-2 md:gap-3">
                    {items.map((item) => (
                        <HoverCard key={item.title}>
                            <HoverCardTrigger asChild>
                                <a className="text-white text-sm md:text-base font-bold" variant="link">
                                    {item.title}
                                </a>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-screen max-w-screen h-[350px]">
                                <div className="flex justify-center">
                                    <div className="w-full max-w-2xl">
                                        <div className="flex justify-between space-x-4">
                                            <div className="space-y-1">
                                                {item.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbaar;
