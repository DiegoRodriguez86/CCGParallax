import pintura from '../img/pintura.jpg'
import trabajando from '../img/trabajando.jpg'
import trabajando2 from '../img/trabajando2.jpg'
import '../stylecomponents/sectiongaleria.css'
import { useState } from 'react'

export const SectionGaleria = () => {

    const [isHoveringA, setIsHoveringA] = useState(false);
    const handleMouseOverA = () => {
        setIsHoveringA(true);
    }

    const handleMouseOutA = () => {
        setIsHoveringA(false)
    }
    const [isHoveringB, setIsHoveringB] = useState(false);
    const handleMouseOverB = () => {
        setIsHoveringB(true);
    }

    const handleMouseOutB = () => {
        setIsHoveringB(false)
    }
    const [isHoveringC, setIsHoveringC] = useState(false);
    const handleMouseOverC = () => {
        setIsHoveringC(true);
    }

    const handleMouseOutC = () => {
        setIsHoveringC(false)
    }

    return (
        <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-28 lg:px-8'>
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <h2 className="mt-10 text-center text-5xl font-bold leading-9 tracking-tight text-gray-900">Services</h2>
            </div>
            <section className='flex m-auto w-[800px] h-[430px]'>
                <img onMouseOver={handleMouseOverA} onMouseOut={handleMouseOutA} className='galeria' src={pintura} />
                <img onMouseOver={handleMouseOverB} onMouseOut={handleMouseOutB} className='galeria' src={trabajando} />
                <img onMouseOver={handleMouseOverC} onMouseOut={handleMouseOutC} className='galeria' src={trabajando2} />              
            </section>
            {isHoveringA && (
                    <article className='m-auto'>
                        <h2 className='font-bold text-6xl my-6'>Service 1</h2>
                    </article>
                )}
                {isHoveringB && (
                    <article className='m-auto'>
                        <h2 className='font-bold text-6xl my-6'>Service 2</h2>
                    </article>
                )}
                {isHoveringC && (
                    <article className='m-auto'>
                        <h2 className='font-bold text-6xl my-6'>Service 3</h2>
                    </article>
                )}
        </div>
    )
}