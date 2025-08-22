'use client';
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
import Link from 'next/link';
import { IoIosClose } from 'react-icons/io';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { menuItems } from '../utils/menuItems';

export default function Nav() {
 const pathname = usePathname();
 const activePath = pathname.split('/')[2];

 const navigationList = (
  <ul className='lg:flex max-lg:[&>li:not(:last-child)_a]:border-b h-full'>
   {menuItems.map((menu) => {
    const isMenuActive = menu.link === `/${activePath || ''}`;
    return (
     <li
      data-active={isMenuActive}
      key={menu.name}
      className='relative grid group'
     >
      <Link
       href={menu.link}
       className={
        'p-4 border-neutral-300 dark:border-neutral-700 lg:border-0 lg:py-[0.63rem] hover:text-teal-700  dark:hover:text-teal-300 group-data-[active="true"]:text-teal-700 dark:group-data-[active="true"]:text-teal-300 transition-colors lg:text-center z-[2] font-medium text-[0.9rem] flex items-center justify-center'
       }
      >
       {/* <span>{websiteNavigation[menu.name]}</span> */}
      </Link>
      {isMenuActive && (
       <motion.div
        layoutId='underline'
        id='underline'
        className='hidden lg:block absolute inset-x-1 -bottom-px h-[2px] bg-linear-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0'
       />
      )}
     </li>
    );
   })}
  </ul>
 );

 return (
  <nav className='self-center order-1 lg:order-2 lg:grow lg:flex lg:justify-center min-h-[2.875rem]'>
   <Drawer>
    <DrawerTrigger className='lg:hidden' asChild>
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
      <DrawerTitle className='text-lg font-medium flex justify-between items-center'>
       <div className='basis-[4rem]'></div>
       {/* <span>{websiteNavigation.menu}</span> */}
       <div className='basis-[4rem] text-end'>
        <DrawerClose asChild>
         <Button
          variant='ghost'
          size='icon'
          className='text-red-700 dark:text-red-400'
         >
          <IoIosClose className='size-8' />
         </Button>
        </DrawerClose>
       </div>
      </DrawerTitle>
      <div className='mt-8'>{navigationList}</div>
     </DrawerHeader>
    </DrawerContent>
   </Drawer>
   <div className='hidden lg:block border border-neutral-300 rounded-full dark:border-neutral-700 relative bg-background shadow-lg px-4'>
    {navigationList}
   </div>
  </nav>
 );
}
