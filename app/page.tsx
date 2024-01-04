import Image from 'next/image'
import one from '../public/assests/one.jpg';
import two from '../public/assests/two.jpg';
import three from '../public/assests/three.jpg';
import four from '../public/assests/four.jpg';
import five from '../public/assests/five.jpg';
import six from '../public/assests/six.jpg';




export default function Home() {
  return (
    <>
      <div>
        <h1>Assignment-7</h1>
        <h1>GRID LAYOUT</h1>
      </div>
      <div className='grid sm:grid-cols-3  sm:grid-rows-3'>
        <div className='bg-orange-800  sm:col-span-2	'><Image src={one} className='w-[900px] h-[376px]' alt="Picture of the author" /></div>
        <div className='bg-slate-500  sm:row-span-2	'><Image src={five} alt='five' className='h-[750px]' /></div>
        <div className='bg-amber-400  sm:row-span-2'><Image src={five} alt='five' className='h-[750px]' /></div>
        <div className='bg-lime-600 '><Image src={four}  alt="Picture of the author" className='w-[450px] h-[375px]'/></div>
        <div className='bg-cyan-700  sm:col-span-2'><Image src={one} className='w-[900px] h-[376px]' alt="Picture of the author" /></div>
      </div>
    </>
  )
}
