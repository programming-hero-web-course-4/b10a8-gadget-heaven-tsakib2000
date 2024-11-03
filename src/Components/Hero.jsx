
import hero from '../assets/banner.jpg'
const Hero = () => {
    return (
        <div className='relative w-9/12 mdh-[500px] lg:h-[650px] backdrop-blur-sm bottom-32 md:bottom-56  p-6 border mx-auto rounded-3xl'>
            <img className='w-full h-full object-cover' src={hero} alt="" />
        </div>
    );
};

export default Hero;