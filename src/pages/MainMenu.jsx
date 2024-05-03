import Diablo from '../components/Diablo'
import Fuego from '../assets/images/Fuego.png'
import { Link } from 'react-router-dom'

const MainMenu = () => {
    return (
        <div className='bg-gradient-to-t from-amber-950 to-primary to-50% w-svw h-svh overflow-hidden p-5 md:pt-[12svh]'>
            <img src={Fuego} alt="Fuego" className='w-full absolute bottom-0 right-0 xl:hidden' />
            <div className='relative md:mb-10 h-[50svh] max-w-sm mx-auto'>
                <Diablo className={"mt-5 p-2 absolute w-full z-20 top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2"} />
                <div className='mask-80 w-full aspect-square rounded-full bg-yellow-500 z-10 absolute -translate-y-1/2 top-1/2 right-1/2 translate-x-1/2'></div>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-red-800 relative z-50 w-[calc(100%-2rem)] md:w-1/2 font-black font-cinzel tracking-wide mx-auto text-4xl text-center'>Bienvenido al Infierno Guatemalteco</h1>
                <Link to="/libro" className='hover:text-yellow-500 transition text-yellow-700 relative z-50 w-[calc(100%-2rem)] md:w-1/2 font-black font-cinzel tracking-wide md:text-3xl mx-auto text-2xl text-center'>Comenzar</Link>
            </div>
        </div>
    )
}

export default MainMenu