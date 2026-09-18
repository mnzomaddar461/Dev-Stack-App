import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Logo from '../assets/logo-text.png'
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            {/* main div */}
            <div className='container mx-auto pl-4 pr-4 pt-10 pb-10 grid grid-cols-4 gap-4'>
                {/* 1st div */}
                <div className='flex flex-col gap-2'>
                    <img src={Logo} alt="" className='w-35 h-auto'/>
                    <p className='text-[12px] font-normal text-[#64748B]'>Curated tools, technologies, and resources for developers building
                        modern software.
                    </p>
                    <div className='flex gap-4 mt-4'>
                        <span className='flex items-center gap-[2px] text-[14px] text-black font-normal transition-all duration-200 hover:text-pink-500'><FaGithub /> GitHub</span>
                        <span className='flex items-center gap-[2px] text-[14px] text-black font-normal transition-all duration-200 hover:text-pink-500'><FaSquareXTwitter /> Twitter</span>
                        <span className='flex items-center gap-[2px] text-[14px] text-black font-normal transition-all duration-200 hover:text-pink-500'><FaLinkedin /> Linkedin</span>
                    </div>
                </div>

                {/* 2nd div */}
                <div>
                    <h2 className='text-[16px] font-bold text-black'>PRODUCT</h2>
                    <div className='flex flex-col gap-[4px] mt-3'>
                        <a href="" className='text-[#64748B] text-[16px] font-normal transition-all duration-200 hover:text-pink-600'>Home</a>
                        <a href="" className='text-[#64748B] text-[16px] font-normal transition-all duration-200 hover:text-pink-600'>Technologies</a>
                        <a href="" className='text-[#64748B] text-[16px] font-normal transition-all duration-200 hover:text-pink-600'>Projects</a>
                    </div>
                </div>

                {/* 3rd div */}
                <div>
                    <h2 className='text-[16px] font-bold text-black'>COMPANY</h2>
                    <div className='flex flex-col gap-[4px] mt-3'>
                        <a href="" className='text-[#64748B] text-[16px] font-normal transition-all duration-200 hover:text-pink-600'>About</a>
                        <a href="" className='text-[#64748B] text-[16px] font-normal transition-all duration-200 hover:text-pink-600'>Contact</a>
                        <a href="" className='text-[#64748B] text-[16px] font-normal transition-all duration-200 hover:text-pink-600'>Careers</a>
                    </div>
                </div>

                {/* 4th */}
                <div>
                    <h2 className='text-[16px] font-bold text-black'>LEGAL</h2>
                    <div className='flex flex-col gap-[4px] mt-3'>
                        <a href="" className='text-[#64748B] text-[16px] font-normal transition-all duration-200 hover:text-pink-600'>Privacy Policy</a>
                        <a href="" className='text-[#64748B] text-[16px] font-normal transition-all duration-200 hover:text-pink-600'>Terms of Service</a>
                    </div>
                </div>
            </div>
            {/* copyright div */}
            <div className='container mx-auto flex justify-between border-t-2 border-gray-100 p-4'>
                <div>
                    <h2 className='text-[16px] text-[#94A3B8] font-normal'>© 2026 Dev Stack. All rights reserved.</h2>
                </div>
                <div className='flex gap-[10px] mt-3'>
                        <a href="" className='text-[#64748B] text-[16px] font-normal transition-all duration-200 hover:text-pink-600'>Policy</a>
                        <a href="" className='text-[#64748B] text-[16px] font-normal transition-all duration-200 hover:text-pink-600'>Terms</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;