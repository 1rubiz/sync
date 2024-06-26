// import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from "@/components/ui/badge"
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
function About() {
  return (
    <div>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-semibold w-[40%] text-center mb-2'>
                Network of builders helping startup scale
            </h1>
            <div className='grid grid-cols-2 gap-4 w-[70%]'>
                <motion.div
                initial={{x: -100}}
                whileInView={{x: 0}}
                transition={{duration: 1}}
                >
                    <Card>
                    <CardContent className='flex flex-col justify-between items-start h-full'>
                        <div>
                            <h4 className='text-base font-semibold py-2'>
                                Work with Service Incubators to expedite your time-to-market
                            </h4>
                            <p className='text-xs'>
                                Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.
                                For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.
                            </p>
                        </div>
                        <h4 className='text-xs py-4 font-semibold flex gap-2 justify-start items-center underline'>
                            Learn More <FaArrowRight/>
                        </h4>
                    </CardContent>
                </Card>
                </motion.div>

                <motion.div
                initial={{x: 100}}
                whileInView={{x: 0}}
                transition={{duration: 1}}
                className='h-full'
                >
                    <Card className='h-full'>
                    <CardContent className='flex flex-col justify-between items-start h-full'>
                        <div>
                            <h4 className='text-base font-semibold py-2'>
                                Access funding after your mvp is validated 
                            </h4>
                            <p className='text-xs'>
                                Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.
                                Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months 
                            </p>
                        </div>
                        <h4 className='text-xs py-4 font-semibold flex gap-2 justify-center items-center underline'>
                            Learn More <FaArrowRight/>
                        </h4>
                    </CardContent>
                </Card>
                </motion.div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center my-8'>
            <h1 className='text-3xl font-semibold w-[40%] text-center'>
                Our Area of Focus
            </h1>
            <p className='text-center text-xs w-[40%] my-6'>
                In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab
            </p>
            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 2}}
            transition={{duration: 1}}
            className='text-white w-[80%] flex justify-center items-center'>
                <div className='flex flex-col justify-between bg-[#303030] h-[160px] w-60 py-8 px-4'>
                    <p>01</p>
                    <p>Business Support & Incubation</p>
                </div>
                <div className='flex flex-col justify-between bg-[#F47733] h-[160px] w-60 py-8 px-4'>
                    <p>02</p>
                    <p>On-Demand & As-A-Service</p>
                </div>
                <div className='flex flex-col justify-between bg-[#FF78BF] h-[160px] w-60 py-8 px-4'>
                    <p>03</p>
                    <p>Marketplace & Crowdsourcing</p>
                </div>
                <div className='flex flex-col justify-between bg-[#20888F] h-[160px] w-60 py-8 px-4'>
                    <p>04</p>
                    <p>Aggregation & Shared Economy</p>
                </div>
                <div className='flex flex-col justify-between bg-[#FF78BF] h-[160px] w-60 py-8 px-4'>
                    <p>05</p>
                    <p>Decentralized Economy & Digital Assets</p>
                </div>
            </motion.div>
        </div>
        <div className='flex flex-col items-center justify-center my-8'>
            <h1 className='text-3xl font-semibold w-[40%] text-center'>
                Our Concept Innovations
            </h1>
            <p className='text-center text-xs w-[70%] my-6'>
                We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;
            </p>
            <motion.div 
            initial={{x: -100}}
            whileInView={{x: 0}}
            transition={{duration: 1}}
            className='text-white w-[80%] grid grid-cols-3 justify-center items-center gap-4'>
                <Card>
                    <CardContent className='h-40'>
                            <h4 className='text-base font-semibold py-2'>
                                Service Incubator
                            </h4>
                            <p className='text-xs'>
                                A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP
                            </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className='h-40'>
                        <div>
                            <h4 className='text-base font-semibold py-2'>
                                Virtualting
                            </h4>
                            <p className='text-xs'>
                            A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className='h-40'>
                        <div>
                            <h4 className='text-base font-semibold py-2'>
                                Diiming 
                            </h4>
                            <p className='text-xs'>
                                A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
        <div className='flex flex-col items-center justify-center my-8'>
            <h1 className='text-3xl font-semibold w-[40%] text-center'>
                Our Service Incubation Model
            </h1>
            <p className='text-center text-xs w-[70%] my-6'>
                The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 - 24 months as been first to invest.
            </p>
            <div className='text-left w-[80%] mb-8'>
                <h1 className='font-semibold'>Hypothesis</h1>
                <p className='text-xs'>
                    Just a few reasons we know its time for this model within the ecosystem
                </p>
            </div>
            <motion.div 
            initial={{x: 100}}
            whileInView={{x: 0}}
            transition={{duration: 1}}
            className='text-white w-[80%] grid grid-cols-3 justify-center items-center gap-4'>
                <Card>
                    <CardContent className='h-40'>
                        <div>
                            <img src='/Polygon 2.svg' className='h-6 my-2'/>
                            <p className='text-xs'>
                                Most early-stage companies and pre-product startups cannot afford professional services especially those who don&#39;t have family and friends&#39; network that can support
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className='h-40'>
                        <div>
                            <img src='/Polygon 1.svg' className='h-6 my-2'/>
                            <p className='text-xs'>
                                If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className='h-40'>
                        <div>
                            <img src='/Polygon 3.svg' className='h-6 my-2'/>
                            <p className='text-xs'>
                                Young professionals who don&#39;t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
            <motion.div
            initial={{y: 100}}
            whileInView={{y: 0}}
            transition={{duration: 1}}
            className='text-left w-[80%] my-8'>
                <h1 className='font-semibold'>Case Study</h1>
                <p className='text-xs'>
                    See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time
                </p>
                <div className='my-8'>
                    <Badge variant='outline'>Service Incubator Equity</Badge>
                    <Badge variant='outline'>SEEQ Maths Equation</Badge>
                    <Badge variant='outline'>Value of my Equity Over Time</Badge>
                </div>
                <div className=' my-4 w-full flex justify-center gap-2 text-xs items-center underline'>
                    Become A Service Incubator <FaArrowRight/>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About