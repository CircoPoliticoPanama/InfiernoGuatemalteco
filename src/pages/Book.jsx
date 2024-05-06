import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import MyBook from '../components/MyBook'
import { Link } from 'react-router-dom'
import FuegoTransition from "../assets/images/FuegoTransition.png"
const Book = () => {

    const containerRef = useRef(null);
    const transitionRef = useRef(null);


    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl
                .to(transitionRef.current, {
                    y: "100%",
                    ease: "circ.in",
                    duration: 2,
                })
               

        },
        { scope: containerRef }
    );
    return (
        <div ref={containerRef} className='bg-gradient-to-t from-amber-950 to-primary to-50% w-svw h-svh overflow-hidden p-5'>
            <Link to={"/"} className='font-cinzel text-yellow-700 absolute bottom-5 lg:top-5 left-5 text-4xl font-bold hover:text-yellow-500 transition'>Volver</Link>
            <MyBook />
            <img ref={transitionRef} src={FuegoTransition} alt="" className="fixed z-[999] lg:h-auto h-[250svh] right-0 -top-[150%] w-full object-cover" />
        </div>
    )
}

export default Book