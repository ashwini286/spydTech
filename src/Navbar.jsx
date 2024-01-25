import React, { useEffect } from 'react'
import logo22 from './logo22.png';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const[isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const HandleScroll = () => {
            if(window.screenY > 100){
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };
    window.addEventListener('scroll', HandleScroll);

    return () => {
window.addEventListener('scroll', HandleScroll);
    }
    });


    // navitems array
    const navItems = [
        {link: "Home", path: "home"},
        {link: "About", path: "about"},
        {link: "Services", path: "services"},
        {link: "Support", path: "support"},
        {link: "ContactUs", path: "contactus"},
       
    ]
  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
        <nav>
            <div>
                <a href='' className='text-2xl font-semibold flex items-center space-x-3' ><img src={logo22} alt="sorry" className='w-10 inline-block items-center'><span className='text-[#263238]'>SpD Y Technology</span></img></a>

            </div>
        </nav>

    </header>
  )
}

export default Navbar