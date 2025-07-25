import Link from 'next/link';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import LanguageController from '@/components/ui/LanguageController';

export default function Profile() {
 return (
  <div className='order-3 grow lg:grow-0 flex justify-end self-center lg:basis-[9rem] gap-2'>
   <LanguageController />
   <Link
    href='/'
    className='border border-neutral-300 rounded-full text-neutral-600 dark:border-neutral-700 dark:text-neutral-400'
   >
    <Avatar className='size-11'>
     {/* <AvatarImage src='https://github.com/shadcn.png' /> */}
     <AvatarFallback>HRA</AvatarFallback>
    </Avatar>
   </Link>
  </div>
 );
}
