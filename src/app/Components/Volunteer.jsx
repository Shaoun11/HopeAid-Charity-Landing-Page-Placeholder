import React from 'react';
import Image from 'next/image'
import volunteer_image from '../../../public/Volunteer_Image/e6921a030d27f7e6446984e167252983.svg'
const Volunteer = () => {
    return (
        // HoperAid Volunteer Section Code Start
        <div id='volunteer' className='max-w-7xl mx-auto lg:ml-40 md:ml-6 md:mr-6 ml-0 pt-[60px] flex md:flex-row flex-col-reverse lg:gap-32 md:gap-3 gap-16 mb-[60px]'>
            {/* HoperAid Volunteer Section Text */}
               <div className='lg:ml-0 ml-4 lg:mr-0 mr-4'>
                <h1 className='lg:text-[40px] md:text-[30px] text-[24px] font-semibold text-[#171717] '>
                Our Objective Changing <span className='md:block '></span> Lives via Fundraising for <span className='md:block '></span> Charities
                </h1>
                <p className='mt-3  text-[#525252] font-medium lg:text-[15px] md:text-[13px] text-sm md:hidden lg:block'>
                Our goal at HopeAid is to use our committed charity fundraising efforts to <span className='md:block '></span> improve lives and leave a lasting legacy. We think that everyone should have <span className='md:block '></span> access to possibilities for a better future, basic necessities, healthcare, and <span className='md:block '></span>education. We work to improve the lives of people and communities in need with <span className='md:block '></span> the help of an enthusiastic group of volunteers and donors. Learn about our <span className='md:block '></span> mission, core principles, and the revolutionary work we do to create a more just <span className='md:block '></span> and compassionate society.
                </p>
                <p className='mt-3 md:block lg:hidden hidden  text-[#525252] font-medium lg:text-[15px] md:text-[14px] text-sm '>
                Our goal at HopeAid is to use our committed charity <br /> fundraising efforts to improve lives and leave a lasting <br /> legacy. We think that  everyone should have access to <br />possibilities for a better future,  basic necessities,<br /> healthcare,  and education. We work to improve the <br /> lives of people  and  communities in need with the help <br /> of an enthusiastic group of volunteers and donors.<br />Learn about our mission, core principles,  and the <br /> revolutionary work we do to create a more just and <br /> compassionate society.
                </p>
                <div className='mt-12'>
                <button className="bg-[#068278] hover:border-[#068278] hover:border text-[#FFF] hover:bg-[#FFF] btn rounded-3xl px-12 py-4 hover:text-[#068278] border-transparent">
                    Join Now
                </button>
            </div>
            </div>
            {/* HoperAid Volunteer Section Image */}
            <div>
           <Image className='lg:w-[471px] lg:h-[512px] w-[350px] h-[380px] object-cover rounded-3xl mx-auto' src={volunteer_image} alt='volunteer_image' />
            </div>
        </div>
        // HoperAid Volunteer Section Code End
    );
};

export default Volunteer;