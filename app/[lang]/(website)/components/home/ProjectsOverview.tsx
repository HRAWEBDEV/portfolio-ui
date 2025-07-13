import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MdKeyboardArrowLeft } from 'react-icons/md';

export default function ProjectsOverview() {
 return (
  <section>
   <ul>
    {Array.from({ length: 3 }, (_, i) => i).map((i) => (
     <li key={i} className='mb-4'>
      <Link href='#' className='block'>
       <h3 className='text-xl font-medium mb-2'>بازبینی سیستم هتل‌داری</h3>
       <p className='text-[0.8rem] leading-6 w-[min(100%,33rem)] mb-1'>
        اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های
        برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما
        (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان
        فونت
       </p>
       <Button variant='ghost' className='text-teal-700 dark:text-teal-300'>
        <span>مشاهده</span>
        <MdKeyboardArrowLeft />
       </Button>
      </Link>
     </li>
    ))}
   </ul>
  </section>
 );
}
