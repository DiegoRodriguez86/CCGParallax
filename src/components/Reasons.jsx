import { PhoneIcon, ArrowSmallRightIcon } from '@heroicons/react/24/solid'
import { LifebuoyIcon, CpuChipIcon } from '@heroicons/react/24/solid'

export const Reasons = () => {
    return (
        <div className='w-full mt-24'>

            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-3xl pt-8 text-black uppercase text-center'>Reasons We Are No. 1</h2>
                    <h3 className='text-5xl font-bold py-6 text-center text-[#bea347]'>Finding the right team</h3>
                    <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <PhoneIcon className='w-16 p-4 bg-[#bea347] text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Sales</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      {/* <p className='flex items-center text-[#bea347]'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2' /></p> */}
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <LifebuoyIcon className='w-16 p-4 bg-[#bea347] text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      {/* <p className='flex items-center text-[#bea347]'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2' /></p> */}
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <CpuChipIcon className='w-16 p-4 bg-[#bea347] text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      {/* <p className='flex items-center text-[#bea347]'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2' /></p> */}
                  </div>
              </div>
                </div>
            </div>
        </div>
    )
}