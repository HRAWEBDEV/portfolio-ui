import { Button } from '@/components/ui/button';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Nav() {
 return (
  <nav className='self-center order-1'>
   <div className='inline-grid p-[2px] border border-neutral-300 rounded-full text-neutral-600 dark:border-neutral-700 dark:text-neutral-400 relative self-center bg-background shadow-lg'>
    <Button
     className='cursor-pointer'
     size='icon'
     variant='ghost'
     shape='rounded'
    >
     <RxHamburgerMenu className='size-5' />
    </Button>
   </div>
  </nav>
 );
}
