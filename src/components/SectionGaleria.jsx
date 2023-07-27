import pintura from '../img/pintura.jpg'
import trabajando from '../img/trabajando.jpg'
import trabajando2 from '../img/trabajando2.jpg'
import '../stylecomponents/sectiongaleria.css'

export const SectionGaleria = () => {
    return (
        <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <h2 className="mt-10 text-center text-5xl font-bold leading-9 tracking-tight text-gray-900">Services</h2>
            </div>
            {/* <section className='flex m-auto w-[800px] h-[430px]'>
                <img src={pintura} />
                <img src={trabajando} />
                <img src={trabajando2} />
            </section> */}
            <section className='flex m-auto w-[800px] h-[430px]'>
                <article>
                    <img src={pintura} />
                    <h2 className='text-7xl font-sans tracking-widest drop-shadow-2xl text-white'>Service 1</h2>
                </article>
                <article>
                    <img src={trabajando} />
                    <h2 className='text-7xl font-sans tracking-widest drop-shadow-2xl text-white'>Service 2</h2>
                </article>
                <article>
                    <img src={trabajando2} />
                    <h2 className='text-7xl font-sans tracking-widest drop-shadow-2xl text-white'>Service 3</h2>
                </article>
            </section>
        </div>
    )
}