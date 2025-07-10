import Link from 'next/link';
export default function Hero() {
 return (
  <div>
   <Link href='/' className='block size-24 rounded-full overflow-hidden mb-6'>
    <img
     src='/images/resume-image.jpg'
     alt='hero image'
     className='w-full h-full object-center object-cover max-w-full ltr:rotate-y-180'
    />
   </Link>
   <div>
    <h1 className='text-2xl lg:text-4xl font-bold'>
     طــــراح برنامه، برنامه نویس‌وب
    </h1>
   </div>
  </div>
 );
}
