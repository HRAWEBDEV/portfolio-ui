import { menuItems } from '../utils/menuItems';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Footer() {
 return (
  <footer className='border-t border-neutral-300 dark:border-neutral-700 py-4'>
   <div className='flex flex-col lg:flex-row justify-between gap-4'>
    <nav>
     <ul className='flex flex-wrap justify-center lg:justify-start gap-4'>
      {menuItems
       .filter((item) => item.name !== 'home')
       .map((menu) => (
        <li key={menu.link}>
         <Button asChild variant='ghost'>
          <Link
           href={menu.link}
           className='block min-w-[4rem] text-center p-2'
          ></Link>
         </Button>
        </li>
       ))}
     </ul>
    </nav>
    <div className='text-neutral-500 dark:text-neutral-400 text-sm text-center'>
     <div className='inline-flex gap-1 me-2'>
      <span>&#169;</span>
      <span>{new Date().getFullYear()}</span>
      {/* <span>{dic.meta.businessName}</span> */}
     </div>
     {/* <span>{dic.meta.allRightsArePreserved}</span> */}
    </div>
   </div>
  </footer>
 );
}
