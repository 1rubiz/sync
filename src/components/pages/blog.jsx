// import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
function Blog() {
  return (
    <div>
        <motion.div
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 2, y: 0}}
        transition={{duration: 1}}
        className='flex flex-col items-center justify-center my-8'>
            <h1 className='text-3xl font-semibold w-[40%] my-8 text-center'>
                Blogs & Resources
            </h1>
            <div 
            className='text-black text-xs w-[80%] grid grid-cols-3 justify-center items-center gap-4'>
                <div>
                    <div>
                        <img src="/Frame 49268.png" alt="" />
                        <div className='flex justify-center items-center my-4'>
                            <div>
                                <h1 className='font-bold'>Top Ten Most Powerful Startup</h1>
                                <p>
                            Top     Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup
                            </p>
                            </div>
                            <img src='/Frame 49275.png' className='w-12 h-12'/>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="/Frame 49268.png" alt="" />
                        <div className='flex justify-center items-center my-4'>
                            <div>
                                <h1 className='font-bold'>Top Ten Most Powerful Startup</h1>
                                <p>
                                    Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup
                            </p>
                            </div>
                            <img src='/Frame 49275.png' className='w-12 h-12'/>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="/Frame 49268.png" alt="" />
                        <div className='flex justify-center items-center my-4'>
                             <div>
                                <h1 className='font-bold'>Top Ten Most Powerful Startup</h1>
                                <p>
                                    Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup
                            </p>
                             </div>
                             <img src='/Frame 49275.png' className='w-12 h-12'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' my-4 w-full flex justify-center gap-2 text-xs items-center underline'>
                See More Blogs & Resources  <FaArrowRight/>
            </div>
        </motion.div>
        <div className='w-full'>
            <div className='text-xl w-full font-semibold text-center my-4'>
                As Featured In
            </div>
            <div className='flex overflow-x-scroll h-54'>
                <img src='/Ontecx.png'/>
                <img src='/The Guardian.png'/>
                <img src='Buj.png'/>
                <img src='punch.png'/>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <div className='w-[70%] my-4'>
                <h1 className='text-4xl text-center'>
                    Let&#39;s build companies that help everyone succeed
                </h1>
                <motion.div
                initial={{opacity: 0, y: 80}}
                whileInView={{opacity: 2, y: 0}}
                transition={{duration: 1}}
                className='flex gap-4 justify-center items-center my-8'>
                    <Button variant='outline'>
                        Sync With Us
                    </Button>
                    <Button>
                        Apply to SIP 1.0
                    </Button>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Blog