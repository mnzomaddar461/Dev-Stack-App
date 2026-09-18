import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <nav className='fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm'>
            <div className='container mx-auto flex items-center justify-between p-4'>
                {/* for logo */}
                <div>
                    <img src={Logo} alt="" className='h-10 w-auto'/>
                </div>
                {/* for menu */}
                <div>
                    <ul className='flex gap-6'>
                        <li><a href="" className='text-black hover:text-[#F43098] font-semibold'>Home</a></li>
                        <li><a href="" className='text-black hover:text-[#F43098] font-semibold'>Technologies</a></li>
                        <li><a href="" className='text-black hover:text-[#F43098] font-semibold'>Projects</a></li>
                        <li><a href="" className='text-black hover:text-[#F43098] font-semibold'>About</a></li>
                        <li><a href="" className='text-black hover:text-[#F43098] font-semibold'>Contact</a></li>
                    </ul>
                </div>
                {/* for button */}
                <div className='flex gap-3'>
                    <button className='font-semibold'>Sign In</button>
                    <button className="btn btn-secondary rounded-4xl font-semibold">Sign Up</button>
                </div>
            </div>

            
        </nav>
    );
};

export default Nav;