// import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
function Carousel() {
  return (
    <div>
        <div className='grid grid-cols-2 bg-white'>
            <div className='flex justify-center items-center w-full h-full'>
                <motion.div 
                initial={{x: -100}}
                whileInView={{x: 0}}
                transition={{duration: 1}}
                className='p-20 gap-2'>
                    <h2 className='text-2xl font-semibold'>
                        SINC Partners is a service incubation company
                    </h2>
                    <p>
                        Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
                    </p>
                    <Button className='my-4'>
                        Sync With Us
                    </Button>
                </motion.div>
            </div>
            {/* <div> */}
                <motion.img
                 initial={{opacity: 0}}
                 whileInView={{opacity: 2}}
                 transition={{duration: 1}}
                 src='/Image.svg'
                 />
            {/* </div> */}
        </div>
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 2}}
        transition={{duration: 1}}
        className='w-full flex justify-center items-center my-8'>
            <Card className='w-[60%] bg-[#FFFFFF]'>
                <CardContent className='text-center py-4'>
                    <p className='text-base'>&quot;Nigeria and Africa has a massive network effect that have not be fully utilized. With Nigerians/Africans in every country and territory of the world, we can scale an African business to 100+ countries in few weeks&quot;</p>
                    <div className='text-sm'>
                        <p className='font-semibold py-2'>Daniel Izeghs Oratokhai</p>
                        <p>
                            Managing Partner at SINC Partners Ltd
                        </p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    </div>
  )
}

export default Carousel