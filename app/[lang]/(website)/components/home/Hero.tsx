import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa6';
import { BsTelegram } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io5';

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
    <h1 className='text-2xl lg:text-4xl font-bold mb-6'>
     طــــراح برنامه، برنامه نویس‌وب
    </h1>
    <p className='w-[min(100%,43rem)] leading-7 text-neutral-600 dark:text-neutral-400 mb-6'>
     اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های
     برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما
     (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و
     یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود.
    </p>
    <div className='flex flex-wrap gap-2 text-neutral-500 dark:text-neutral-400'>
     <Button size='icon' variant='ghost' asChild>
      <Link href='#'>
       <FaGithub className='size-6' />
      </Link>
     </Button>
     <Button size='icon' variant='ghost' asChild>
      <Link href='#'>
       <BsTelegram className='size-6' />
      </Link>
     </Button>
     <Button size='icon' variant='ghost' asChild>
      <Link href='#'>
       <IoLogoLinkedin className='size-6' />
      </Link>
     </Button>
    </div>
   </div>
  </div>
 );
}
