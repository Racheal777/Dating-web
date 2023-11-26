import React from 'react'
import bgImage from '../assets/bg.png'
import Image from 'next/image'

export default function AppContainer() {
  return (
    <div className='md:container md:mx-auto mx-auto px-4'>
        <div>
            <Image src={bgImage}
            width={500}
            height={500}
            alt="Picture of the author"/>
            
        </div>

        <div>
            
        </div>
       
    </div>
  )
}
