import React from 'react'
import MyBook from '../components/MyBook'
import { Link } from 'react-router-dom'

const Book = () => {
    return (
        <div className='bg-gradient-to-t from-amber-950 to-primary to-50% w-svw h-svh overflow-hidden p-5'>
            <Link to={"/"} className='font-cinzel text-yellow-700 absolute bottom-5 md:top-5 left-5 text-4xl font-bold hover:text-yellow-500 transition'>Volver</Link>
            <MyBook />
        </div>
    )
}

export default Book