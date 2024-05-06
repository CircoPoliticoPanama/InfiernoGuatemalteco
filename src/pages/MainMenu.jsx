import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Diablo from "../components/Diablo";
import Fuego from "../assets/images/Fuego.png";
import FuegoTransition from "../assets/images/FuegoTransition.png"
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
    const navigate = useNavigate()
    const containerRef = useRef(null);
    const circle = useRef(null);
    const diabloRef = useRef(null);
    const titleRef = useRef(null);
    const fuegoRef = useRef(null)
    const linkRef = useRef(null)
    const transitionRef = useRef(null)

    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl

                .from(circle.current, {
                    scale: 0,
                    ease: "back",
                    duration: 1,
                    delay: 0.5,
                })
                .from(diabloRef.current, {
                    opacity: 0,
                    duration: 1,
                    delay: 0.1,
                    ease: "power2.out",
                }, '-=0.5')
                .from([titleRef.current, linkRef.current], {
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.2,
                }, '-=0.5')
                .from(fuegoRef.current, {
                    y: "100%",
                    ease: "power2.out",
                    duration: 0.6,
                })

        },
        { scope: containerRef }
    );

    const handleTransition = () => {
        gsap.to(transitionRef.current, {
            top: "-200%",
            ease: "circ.in",
            duration: 2,
        });
        setTimeout(()=> {
            navigate("/libro")
        }, 2000)
    };

    return (
        <div
            ref={containerRef}
            className="bg-gradient-to-t from-amber-950 to-primary to-50% w-svw h-svh overflow-hidden p-5 md:pt-[12svh]"
        >
            <img
                ref={fuegoRef}
                src={Fuego}
                alt="Fuego"
                className="w-full absolute bottom-0 right-0 xl:hidden"
            />
            <div className="relative md:mb-10 h-[50svh] max-w-sm mx-auto">
                <Diablo
                    ref={diabloRef}
                    className="mt-5 p-2 absolute w-full z-20 top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2"
                />
                <div
                    ref={circle}
                    className="mask-80 w-full aspect-square rounded-full bg-yellow-500 z-10 absolute -translate-y-1/2 top-1/2 right-1/2 translate-x-1/2"
                ></div>
            </div>
            <div className="flex flex-col gap-5">
                <h1
                    ref={titleRef}
                    className="text-red-800 relative z-50 w-[calc(100%-2rem)] md:w-1/2 font-black font-cinzel tracking-wide mx-auto text-4xl text-center"
                >
                    Bienvenido al Infierno Guatemalteco
                </h1>
                <div className="w-full flex items-center" ref={linkRef}>
                    <span
                        onClick={handleTransition}
                        className="hover:text-yellow-500 cursor-pointer transition text-yellow-700 relative z-50 w-fit font-black font-cinzel tracking-wide md:text-3xl mx-auto text-2xl text-center"
                    >
                        Comenzar
                    </span>
                </div>
            </div>
            <img ref={transitionRef} src={FuegoTransition} alt="" className="fixed z-[999] lg:h-auto h-[250svh] right-0 top-full w-full object-cover" />

        </div>
    );
};

export default MainMenu;
