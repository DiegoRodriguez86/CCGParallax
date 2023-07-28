import { useState } from 'react'
import logo from '../img/LOGO.png'
// import { ButtonNav } from './ButtonNav'

export const NavBar = () => {

    let Links = [
        {name:'Home', link:'/'},
        {name:'Services', link:'/'},
        {name:'Why Choose Us?', link:'/'},
        {name:'Login', link:'/login'},
    ]

    let [open, setOpen]=useState(false)

    return (
        <>
            <div className='shadow-md w-full fixed top-0 left-0'>
                <div className='md:flex items-center justify-between bg-[#bea347] py-4 md:px-10 px-7'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-950'>
                        <span>
                            <img className='w-36 h-16'
                                alt="Logo"
                                src={logo}>
                            </img>
                        </span>
                    </div>
                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <ion-icon name={open ? 'close':'menu'}></ion-icon>
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#bea347] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                    <a href={link.link} className='text-gray-950 hover:text-gray-500 duration-500'>{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}