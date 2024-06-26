import { FaArrowRight } from 'react-icons/fa'
import { Card, CardContent } from '@/components/ui/card'
import {motion} from 'framer-motion'
function Portfolio() {
  const imgs = [
    '1.svg',
    '2.svg',
    '3.svg',
    '4.svg',
    '5.svg',
    '6.svg',
    '7.svg',
    '8.svg',
  ]
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center my-8'>
            <h1 className='text-3xl font-semibold w-full text-center'>
                Our Studio Portfolio
            </h1>
            <p className='text-center text-xs w-full my-6'>
                Our 2024 Service Incubator Portfolio Companies
            </p>
      </div>
      <div className='w-[80%] gap-5 grid grid-cols-8'>
        {
          imgs.map((item, key)=>{
            return (
              <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 2}}
              transition={{duration: 1}}
              key={key} className='border-2 bg-white rounded-lg w-24 h-12 p-2'><img src={'/'+item} className='h-full w-full'/></motion.div>
            ) 
          })
        }
        {
          imgs.map((item, key)=>{
            return (
              <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 2}}
              transition={{duration: 1}}
              key={key} className='border-2 bg-white rounded-lg w-24 h-12 p-2'><img src={'/'+item} className='h-full w-full'/></motion.div>
            ) 
          })
        }
        {
          imgs.map((item, key)=>{
            return (
              <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 2}}
              transition={{duration: 1}}
              key={key} className='border-2 bg-white rounded-lg w-24 h-12 p-2'><img src={'/'+item} className='h-full w-full'/></motion.div>
            ) 
          })
        }
        {
          imgs.map((item, key)=>{
            return (
              <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 2}}
              transition={{duration: 1}}
              key={key} className='border-2 bg-white rounded-lg w-24 h-12 p-2'><img src={'/'+item} className='h-full w-full'/></motion.div>
            ) 
          })
        }
      </div>
      <div className=' my-4 w-full flex justify-center gap-2 text-xs items-center underline'>
         View More Companies <FaArrowRight/>
      </div>
      <div className='flex flex-col items-center justify-center my-8'>
            <h1 className='text-3xl font-semibold w-[40%] text-center'>
                Co-found With Us
            </h1>
            <p className='text-center text-xs w-[70%] my-6'>
              We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed
            </p>
            <motion.div 
              initial={{x: -100}}
              whileInView={{x: 0}}
              transition={{duration: 1}}
            className='text-white w-[80%] grid grid-cols-3 justify-center items-center gap-4'>
                <Card>
                    <CardContent className='h-60'>
                            <div className='mt-2 w-10 h-10 rounded-3xl flex justify-center items-center bg-[#303030] text-white'>1</div>
                            <h4 className='text-base font-semibold py-2'>
                                We Ideate
                            </h4>
                            <p className='text-xs'>
                              We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.
                            </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className='h-60'>
                        <div>
                            <div className='mt-2 w-10 h-10 rounded-3xl flex justify-center items-center bg-[#F47733] text-white'>2</div>
                            <h4 className='text-base font-semibold py-2'>
                                You Validate
                            </h4>
                            <p className='text-xs'>
                              You join our 3 months inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className='h-60'>
                        {/* <div> */}
                            <div className='mt-2 w-10 h-10 rounded-3xl flex justify-center items-center bg-[#FF78BF] text-white'>3</div>
                            <h4 className='text-base font-semibold py-2'>
                               You Co-own
                            </h4>
                            <p className='text-xs'>
                            After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.
                            </p>
                        {/* </div> */}
                    </CardContent>
                </Card>
            </motion.div>
            <div className=' my-4 w-full flex justify-center gap-2 text-xs items-center underline'>
              Build your dream <FaArrowRight/>
            </div>
        </div>
    </div>
  )
}

export default Portfolio