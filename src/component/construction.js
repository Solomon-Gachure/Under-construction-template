import React, {useEffect} from 'react'
import logo from '../assets/kitech.b16202fbd4c4f4118922.png'
import { MdMail } from "react-icons/md";
import { FaSquarePhone, FaLinkedin,FaXTwitter  } from "react-icons/fa6";
import { FaFacebook,FaInstagram  } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css';
const Construction = () => {
    useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='h-screen text-lg font-semibold font-mono md:text-xl'>
        {/**content for the page */}
        <div className='flex flex-col justify-center items-center pt-8 p-1' >

{/**image for construction */}
<div className='w-[270px] h-[270px]'>
    <img className='w-full h-full object-cover'
    src="https://img.freepik.com/free-photo/construction-worker-with-adjustable-wrench_1048-1697.jpg?size=626&ext=jpg&uid=R114683630&ga=GA1.2.134876288.1693412887&semt=ais"
     alt="" />
</div>
{/**message for the construction */}
<div>
    <p className='p-2 text-center max-w-md md:max-w-4xl '>Hey there! We're busy crafting an amazing website for you.<br/>
Stay tuned for a brand new online experience!</p>
</div>
{/**logo placeholder */}
<div className='w-[50px] h-[50px] mt-2'>
    <a href="https://kitech.rw/" target='blank'>
        <img className='w-full h-full hover:scale-110 duration-300 cursor-pointer'
    src={logo}
     alt="kitech logo" />
    </a>
</div>
{/**contacts for the company */}
<div>
    <h1>However, you can reach us through:</h1>
{/**contacts */}
<div className='flex flex-col items-center p-2 gap-2'>
    <div className='flex justify-between gap-4 items-center'>
        <a href="mailto:info@kitech.rw/" target='blank'><MdMail className='text-blue-500' size={30} /></a>
        <p>info@kitech.rw</p>
    </div>
    <div className='flex justify-between gap-10 items-center'>
        <FaSquarePhone className='text-blue-500' size={30} />
        <p>0784 826 428</p>
    </div>
</div>
{/**social links */}
<div className='flex justify-center items-center gap-4 p-2'>
    <a href="https://www.linkedin.com/company/kitechrw" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className='hover:scale-125 duration-300 hover:text-blue-500' size={30} />
        </a>
    <a href="https://twitter.com/kitechrw" target="_blank" rel="noopener noreferrer">
        <FaXTwitter className='hover:scale-125 duration-300 hover:text-blue-500' size={30} />
        </a>
    <a href="https://facebook.com/kitechrw" target="_blank" rel="noopener noreferrer">
        <FaFacebook className='hover:scale-125 duration-300 hover:text-blue-500' size={30} />
        </a>
    <a href="https://www.instagram.com/kitechrw/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className='hover:scale-125 duration-300 hover:text-blue-500' size={30} />
        </a>
</div>
</div>
        </div>
        </div>
  )
}

export default Construction