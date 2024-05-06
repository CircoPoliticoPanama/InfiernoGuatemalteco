import React from 'react'

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
        </div>
    )
}

export default Error