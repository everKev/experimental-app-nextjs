'use client'
import CustomButton from './CustomButton'
import Image from 'next/image'




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
                containerStyles='bg-amber-500 text-white rounded-full mt-10'
                handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container' >
            <div className='hero__image' >
                <Image src='/air.png' alt='hero' className='object-contain' fill />
                <div className='hero__image-overlay' />
            </div>
        </div> 
    </div>
  )
}

export default Hero