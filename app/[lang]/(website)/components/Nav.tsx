import { Button } from '@/components/ui/button';
import { RxHamburgerMenu } from 'react-icons/rx';
import {
 Drawer,
 DrawerClose,
 DrawerContent,
 DrawerHeader,
 DrawerTitle,
 DrawerTrigger,
} from '@/components/ui/drawer';
import { type WithDictionary } from '@/internationlization/loader';
import Link from 'next/link';

export default async function Nav({
 dic: { websiteNavigation },
}: WithDictionary) {
 const anchorClasses =
  'block p-4 border-b border-neutral-300 dark:border-neutral-700 lg:border-0 lg:py-[0.63rem]';
 const navigationList = (
  <ul className='lg:flex'>
   <li>
    <Link href='/' className={anchorClasses}>
     <span>{websiteNavigation.home}</span>
    </Link>
   </li>
   <li>
    <Link href='/about' className={anchorClasses}>
     <span>{websiteNavigation.about}</span>
    </Link>
   </li>
   <li>
    <Link href='/projects' className={anchorClasses}>
     <span>{websiteNavigation.projects}</span>
    </Link>
   </li>
   <li>
    <Link href='articles' className={anchorClasses}>
     <span>{websiteNavigation.articles}</span>
    </Link>
   </li>
   <li>
    <Link href='uses' className={anchorClasses}>
     <span>{websiteNavigation.uses}</span>
    </Link>
   </li>
  </ul>
 );

 return (
  <nav className='self-center order-1 lg:order-2 lg:grow lg:flex lg:justify-center'>
   <Drawer>
    <DrawerTrigger className='lg:hidden'>
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
    </DrawerTrigger>
    <DrawerContent>
     <DrawerHeader>
      <DrawerTitle className='text-center text-lg font-semibold'>
       {websiteNavigation.menu}
      </DrawerTitle>
      <div className='mt-8'>{navigationList}</div>
      <DrawerClose className='absolute top-2 end-2' />
     </DrawerHeader>
    </DrawerContent>
   </Drawer>
   <div className='hidden lg:block border border-neutral-300 rounded-full dark:border-neutral-700 relative bg-background shadow-lg px-4'>
    {navigationList}
   </div>
  </nav>
 );
}
