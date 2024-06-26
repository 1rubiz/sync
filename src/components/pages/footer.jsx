// import React from 'react'
import { Button } from '@/components/ui/button'

function Footer() {
  return (
    <div className='bg-[#212121] text-white flex-col items-center justify-center px-12 pb-12'>
        <div className='w-[80%] py-4'>
            <div>
                <h1 className='text-4xl'>Newsletter</h1>
                <p className='text-xs my-4 w-[45%]'>
                    Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.
                </p>
                <div className='border-2 border-white bg-[#212121] rounded-full w-[34%] my-8 flex justify-between'>
                    <input type="text" placeholder='Enter your email address' id='subscribe' className='p-2 w-[61%] rounded-full text-xs text-white bg-[#212121]'/>
                    <Button className='text-[#212121] bg-white'>Subscribe</Button>
                </div>
            </div>
        </div>
        <hr /><br />
        <div className='flex flex-col md:flex-row mb-4'>
            <div className='w-full flex flex-col md:flex-row text-xs gap-2'>
                <div className='w-full md:w-[50%]'>
                    <img src="/logo2.svg" alt="" />
                    <p>
                        SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)
                    </p>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                    <div>
                        <h1 className='font-bold mb-4'>Platforms</h1>
                        <ul className="list-none flex flex-col gap-2">
                            <li>Chekwa</li>
                            <li>InResidency</li>
                            <li>Grantty</li>
                            <li>Service Market</li>
                            <li>Grantty</li>
                            <li>Service Market</li>
                            <li>Grantty</li>
                            <li>Service Market</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-bold mb-4'>Initiatives</h1>
                        <ul className="list-none flex flex-col gap-2">
                            <li>Chekwa</li>
                            <li>InResidency</li>
                            <li>Grantty</li>
                            <li>Service Market</li>
                            <li>Grantty</li>
                            <li>Service Market</li>
                            <li>Grantty</li>
                            <li>Service Market</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-bold mb-4'>About Us</h1>
                        <ul className="list-none flex flex-col gap-2">
                            <li>Chekwa</li>
                            <li>InResidency</li>
                            <li>Grantty</li>
                            <li>Service Market</li>
                            <li>Grantty</li>
                            <li>Service Market</li>
                            <li>Grantty</li>
                            <li>Service Market</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-bold mb-4'>More</h1>
                        <ul className="list-none flex flex-col gap-2">
                            <li>Chekwa</li>
                            <li>InResidency</li>
                            <li>Grantty</li>
                            <li>Service Market</li>
                            <li>Grantty</li>
                            <li>Service Market</li>
                            <li>Grantty</li>
                            <li>Service Market</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='h-52 border-l-2'>
                <div className='text-xs flex flex-col justify-between gap-4 h-full px-2 py-2'>
                    <div >
                    <h1 className='font-bold mb-2'>Locations</h1>
                        <p>Abuja, Nigeria</p>
                        <p>Lagos, Nigeria</p>
                        <p>Philadelphia, USA</p>
                    </div>
                    <div className='flex gap-4'>     
                        <img src="/Frame 49241.png" alt="" className='w-[50%]' />
                        <img src="/Frame 48877.png" alt="" className='w-[30%]'/>
                    </div>
                </div>
            </div>
        </div><hr />
        <div className='text-xs'>
            <div className='flex my-4'>
                <p className='w-[90%]'>
                    Guaranteed 2x on your service or cash investment, usually been the first to invest. Get in early and SINC your guaranty!
                </p>
                <div className='flex'>
                    <img src="/gasus.png" alt="" />
                    <p>We are a business built on the foundation of Christian values and belief</p>
                </div>
            </div>
            <div className='my-4 flex flex-wrap justify-between items-center w-full md:flex-nowrap'>
                <p>
                    2023 SINC Partners Ltd. All rights reserved
                </p>
                <ul className="list-none flex justify-center items-center gap-2">
                    <li>Privacy Policy</li>
                    <li>Terms of service </li>
                    <li>Security</li>
                </ul>
                <ul className='list-none flex gap-2 justify-center items-center'>
                    <li><img src="/Facebook Icon.svg" alt="" /></li>
                    <li><img src="/Twitter Icon.svg" alt="" /></li>
                    <li><img src="/Instagram Icon (2).svg" alt="" /></li>
                    <li><img src="/linkedin.svg" alt="" /></li>
                    <li><img src="/medium.svg" alt="" /></li>
                    <li><img src="/youtube.png" alt="" /></li>
                    <li>
                        <img src="/msg.svg" alt="" />
                    </li>
                </ul>
            </div>
            <div className='w-full flex justify-center items-center gap-2'>
                Web in Nigeria <img src='/flag.svg'/>
            </div>
        </div>
    </div>
  )
}

export default Footer
