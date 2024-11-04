
import hero from '../assets/banner.jpg'
const Hero = () => {
    return (
        <>
        <div className=' absolute lg:-bottom-[44rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-9/12 md:h-[500px] lg:h-[650px] backdrop-blur-md p-6 border mx-auto rounded-3xl'>
            <img className='w-full h-full object-cover' src={hero} alt="" />
        </div>
     
        </>
    );
};

export default Hero;