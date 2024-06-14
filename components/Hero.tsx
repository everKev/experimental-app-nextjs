'use client'
import CustomButton from './CustomButton'



const Hero = () => {
    const handleScroll = () => {

    }

  return (
    <div className='hero' >
        <div className='flex-1 pt-36 padding-x' >
            <h1 className='hero__title' >
                Find, learn, or share ideas - quickly and easily with<span className='text-amber-500' > Spotlight!</span> 
            </h1>
            <p className='hero__subtitle'>
                Streamline your calls with information at your fingertips.
            </p>
            <CustomButton
                title='Explore Promos'
                containerStyles='bg-primary-blue text-white rounded-full mt-10'
                handleClick={handleScroll}
            />
        </div>
    </div>
  )
}

export default Hero