import React, {useEffect} from 'react'
import logo from '../assets/kitech.b16202fbd4c4f4118922.png'
import AOS from 'aos'
import 'aos/dist/aos.css';
const Construction = () => {
    useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='h-screen'>
        {/**content for the page */}
        <div className='flex flex-col justify-center items-center pt-20' >
{/**logo placeholder */}
<div className='w-[100px] h-[100px]'>
    <img className='w-full h-full'
    src={logo}
     alt="kitech logo" />
</div>
{/**message for the construction */}
<div>
    
</div>
        </div>
        </div>
  )
}

export default Construction