import HeroI from '../assets/banner-stack.png'
const Hero = () => {
    return (
        <div>
            <div className='container mx-auto pt-30 flex gap-10 pl-4 pr-4 pb-4 items-center justify-between'>
                {/* for left side div */}
                <div className='flex flex-col flex-1/2 gap-6'>
                    <h2 className='text-5xl font-bold text-black'>Build Your Ideal <br></br>
                        <span className='bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent'>
                            Development Stack
                        </span>
                    </h2>
                    <p className='text-[#475569] font-normal text-[18px]'>Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>
                    <div className='flex gap-4'>
                        <button className='p-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-box text-white font-semibold text-[14px]'>Explore Technologies</button>
                        <button className='pl-5 pr-5 pt-2 pb-2 bg-none border border-gray-400 rounded-box text-black font-semibold text-[14px]'>Learn More</button>
                    </div>
                </div>

                {/* for right side div */}
                <div className='flex flex-1/2 justify-end'>
                    <img src={HeroI} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;