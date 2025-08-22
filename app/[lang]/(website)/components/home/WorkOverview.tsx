import { MdWorkHistory } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import { FaDownload } from 'react-icons/fa6';
import Link from 'next/link';

export default function WorkOverview() {
 return (
  <section className='p-4 border border-neutral-300 dark:border-neutral-700 rounded-xl bg-neutral-100 dark:bg-background'>
   <div>
    <div className='flex flex-wrap gap-3 items-center font-medium mb-4'>
     <MdWorkHistory className='size-6 text-neutral-500 dark:text-neutral-400' />
     <span>کـــارها</span>
    </div>
    <div className='mb-4'>
     <ul>
      {Array.from({ length: 2 }, (_, i) => i).map((i) => (
       <li key={i} className='mb-2'>
        <Link
         href='#'
         className='block p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all'
        >
         <div className='flex justify-between items-end'>
          <div className='flex gap-2'>
           <div className='size-10 rounded-full bg-red-600'></div>
           <div>
            <h4 className='font-medium'>شرکت آلین</h4>
            <p className='text-neutral-600 dark:text-neutral-400 text-[0.8rem] font-light'>
             سرپرست تیم فرانت‌اند
            </p>
           </div>
          </div>
          <div className='flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-[0.8rem]'>
           <span>2014</span>
           <span>-</span>
           <span>2015</span>
          </div>
         </div>
        </Link>
       </li>
      ))}
     </ul>
    </div>
    <Button className='w-full' size='lg'>
     <FaDownload />
     <span>دانلود رزرومه</span>
    </Button>
   </div>
  </section>
 );
}
