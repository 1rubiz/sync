// import React from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

function Network() {
  return (
    <div>
        <div className='flex flex-col items-center justify-center my-8'>
            <h1 className='text-3xl font-semibold w-[70%] text-center'>
                Join Our Entrepreneur In Residence (EIR) Program
            </h1>
            <p className='text-center text-xs w-[70%] my-6'>
                Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.
            </p>
            <div className='text-white w-full min-h-72 flex overflow-x-scroll pl-28'>
                <div className='flex justify-end items-center gap-4'>
                    <Card>
                        <CardContent className='h-72 w-72'>
                                <div className='mt-2 w-10 h-10 rounded-3xl flex justify-center items-center bg-[#4E4E4E] text-white p-2'><img src="/Vector (1).svg" alt="" /></div>
                                <h4 className='text-base font-semibold py-2'>
                                    Application and Selection
                                </h4>
                                <p className='text-xs'>
                                    Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies. Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.
                                </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='h-72 w-72'>
                            <div>
                                <div className='mt-2 w-10 h-10 rounded-3xl flex justify-center items-center bg-[#4E4E4E] text-white p-2'><img src="/vector2.svg" alt="" /></div>
                                <h4 className='text-base font-semibold py-2'>
                                    Alignment Meeting and Proposal Submission
                                </h4>
                                <p className='text-xs'>
                                    If your application stands out, we&#39;ll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies. Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='h-72 w-72'>
                            <div className='mt-2 w-10 h-10 rounded-3xl flex justify-center items-center bg-[#4E4E4E] text-white p-2'><img src="/vetor3.svg" alt="" /></div>
                            <h4 className='text-base font-semibold py-2'>
                                Negotiation and Agreement
                            </h4>
                            <p className='text-xs'>
                                Upon successful alignment and proposal review, we&#39;ll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements. Once terms are agreed upon, we&#39;ll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='h-72 w-72'>
                            <div className='mt-2 w-10 h-10 rounded-3xl flex justify-center items-center bg-[#4E4E4E] text-white p-2'><img src="/vector4.svg" alt="" /></div>
                            <h4 className='text-base font-semibold py-2'>
                                Onboarding and Integration
                            </h4>
                            <p className='text-xs'>
                                Congratulations! As an accepted EIR, you&#39;ll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members. Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className=' my-4 w-full flex justify-center gap-2 text-xs items-center underline'>
                Support the Future <FaArrowRight/>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <div className='mt-2 w-10 h-10 rounded-3xl flex justify-center items-center border-2 border-gray-400 text-white'><FaArrowLeft className='text-gray-400'/></div>
                <div className='mt-2 w-10 h-10 rounded-3xl flex justify-center items-center border-2 border-gray-400 text-white'><FaArrowRight className='text-gray-400'/></div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center my-8'>
            <h1 className='text-3xl font-semibold w-[70%] text-center'>
                SINC Investors Network
            </h1>
            <p className='text-center text-xs w-[70%] my-6'>
            Our deals are structured not just to take in investments but to onboard owners passionate about our solutions. Our portfolio companies are valued at $50k at start, with these low valuation, you are guaranteed at least 2x-5x, usually been the first to invest. <br/><span className='font-bold'>Disclaimer:</span> These deal flows is a statement of our projections and may differ from stage to stage and from venture to venture and the guarantee is for deal 1, usually the first to invest
            </p>
            <div className='w-[80%]'>
            <p className='text-xs my-4'>
                <span className='font-bold'>Micro Angel Investors & Service incubators</span> (Invest from $500 & above)
            </p>
            <div className='text-black text-xs w-full grid grid-cols-4'>
                <div className='border-2 border-gray-600 py-2 px-4 w-full'>
                    <h1>Deal 1</h1>
                    <div>
                    ✓ Idea Stage: $5k for 5% Equity<br/>
                    ✓ Expected Revenue at This Stage: $0/mth<br/>
                    ✓ Duration of Raise: 1mth <br/>
                    ✓ Who Can Invest: People with Domain Expertise and Advisors
                    </div>
                </div>
                <div className='border-2 border-gray-600 py-2 w-full'>
                    <h1>Deal 2</h1>
                    <div>
                    ✓ Idea Stage: $5k for 5% Equity<br/>
                    ✓ Expected Revenue at This Stage: $0/mth<br/>
                    ✓ Duration of Raise: 1mth <br/>
                    ✓ Who Can Invest: People with Domain Expertise and Advisors
                    </div>
                </div>
                <div className='border-2 border-gray-600 py-2 w-full'>
                    <h1>Deal 3</h1>
                    <div>
                    ✓ Idea Stage: $5k for 5% Equity<br/>
                    ✓ Expected Revenue at This Stage: $0/mth<br/>
                    ✓ Duration of Raise: 1mth <br/>
                    ✓ Who Can Invest: People with Domain Expertise and Advisors
                    </div>
                </div>
                <div className='border-2 border-gray-600 py-2 w-full'>
                    <h1>Deal 4</h1>
                    <div>
                    ✓ Idea Stage: $5k for 5% Equity<br/>
                    ✓ Expected Revenue at This Stage: $0/mth<br/>
                    ✓ Duration of Raise: 1mth <br/>
                    ✓ Who Can Invest: People with Domain Expertise and Advisors
                    </div>
                </div>
            </div>
            </div>
            <div className='w-[80%] my-4'>
            <p className='text-xs my-4'>
                <span className='font-bold'>Angel Investors & Venture Capital</span> (Invest from $500 & above)
            </p>
            <div className='text-black text-xs w-full grid grid-cols-4'>
                <div className='border-2 border-gray-600 py-2 w-full'>
                    <h1>Deal 5</h1>
                    <div>
                    ✓ Idea Stage: $5k for 5% Equity<br/>
                    ✓ Expected Revenue at This Stage: $0/mth<br/>
                    ✓ Duration of Raise: 1mth <br/>
                    ✓ Who Can Invest: People with Domain Expertise and Advisors
                    </div>
                </div>
                <div className='border-2 border-gray-600 py-2 w-full'>
                    <h1>Deal 6</h1>
                    <div>
                    ✓ Idea Stage: $5k for 5% Equity<br/>
                    ✓ Expected Revenue at This Stage: $0/mth<br/>
                    ✓ Duration of Raise: 1mth <br/>
                    ✓ Who Can Invest: People with Domain Expertise and Advisors
                    </div>
                </div>
                <div className='border-2 border-gray-600 py-2 px-4 w-full'>
                    <h1>Deal 7</h1>
                    <div>
                    ✓ Idea Stage: $5k for 5% Equity<br/>
                    ✓ Expected Revenue at This Stage: $0/mth<br/>
                    ✓ Duration of Raise: 1mth <br/>
                    ✓ Who Can Invest: People with Domain Expertise and Advisors
                    </div>
                </div>
                <div className='border-2 border-gray-600 p-2 w-full'>
                    <div className='bg-black text-white h-full w-full flex flex-col justify-center items-center p-2 text-center'>
                        Work with Service Incubators (SINC) to expedite your time to market
                        <Button>Join SINC Network</Button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center my-8'>
            <h1 className='text-3xl font-semibold w-[40%] text-center'>
                Equity Jobs
            </h1>
            <p className='text-center text-xs w-[70%] my-6'>
            See companies and startups offering equity or a mix of cash and equity for very important position in their company
            </p>
            <div className='text-white w-[80%] grid grid-cols-4 justify-center items-center gap-4'>
                <Card className='h-68'>
                    <CardContent className='flex flex-col gap-2 justify-center items-center'>
                            <img src="/job1.png" alt="" />
                            <Button>View Details</Button>
                    </CardContent>
                </Card>
                <Card className='h-68'>
                    <CardContent className='flex flex-col gap-2 justify-center items-center'>
                        <img src="/job2.png" alt="" />
                        <Button>View Details</Button>
                    </CardContent>
                </Card>
                <Card className='h-68'>
                    <CardContent className='flex flex-col gap-2 justify-center items-center'>
                        <img src="/job3.png" alt="" />
                        <Button>View Details</Button>
                    </CardContent>
                </Card>
                <Card className='h-68'>
                    <CardContent className='flex flex-col gap-2 justify-center items-center'>
                        <img src="/job4.png" alt="" />
                        <Button>View Details</Button>
                    </CardContent>
                </Card>
            </div>
            <div className=' my-4 w-full flex justify-center gap-2 text-xs items-center underline'>
                See More Equity Jobs <FaArrowRight/>
            </div>
        </div>
    </div>
  )
}

export default Network