import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div
            className="bg-gradient-to-t from-amber-950 to-primary to-50% w-svw h-svh overflow-hidden grid place-content-center"
        >
            <div className='bg-gradient-to-t to-yellow-500 from-red-800 bg-clip-text'>
                <h1 className='text-center flex flex-col gap-2 font-cinzel font-black text-4xl  md:text-6xl text-transparent '>
                    <span className='text-6xl md:text-8xl font-bold'>404</span>
                    Pecado no encontrado
                </h1>
            </div>
            <Link to="/" className="hover:text-yellow-500 mt-5 w-fit transition text-yellow-700 relative z-50 font-black font-cinzel tracking-wide md:text-3xl mx-auto text-2xl text-center"
            >Volver</Link>
        </div>
    )
}

export default Error