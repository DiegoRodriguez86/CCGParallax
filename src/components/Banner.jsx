import logo from '../img/LOGO.png'

export const Banner = () => {
    return (
        <section className='lg:h-screen flex mt-0'>
            <div className="container mx-auto">
                    <div className='flex flex-col lg:flex-row'>
                        <div className='flex-1 text-center lg:text-left'>
                            <h1 className='text-[55px] font-bold  lg:text-[110px] ml-16'>
                                Hello
                            </h1>
                            {/* <div className='mb-6 text-[36px] lg:text-[60px] font-semibold uppercase leading-[1]'>
                                <span className='mr-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                            </div> */}
                            <div className='flex max-w-max gap-x-6 items-center mb-12 ml-12'>
                                <button className='bg-gray-300 hover:bg-gray-500 text-gray-950 py-2 px-4 rounded-full'>
                                    Contact us
                                </button>
                                <button className='bg-gray-300 hover:bg-gray-500 text-gray-950 py-2 px-4 rounded-full'>
                                    Chat now
                                </button>
                            </div>
                        </div>
                        <img
                            className='w-[600px] h-[300px]'
                            alt='logo'
                            src={logo}>
                        </img>               
                    </div>
                </div>
        </section>
    )
}