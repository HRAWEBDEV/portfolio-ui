'use client';
import { Button } from './ui/button';
import { TbMoonStars } from 'react-icons/tb';
import { LuSunMedium } from 'react-icons/lu';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { useAppConfigContext } from '@/services/app-config/appConfigContext';
import { motion } from 'motion/react';

export default function ThemeController() {
 const { appTheme, changeAppTheme } = useAppConfigContext();
 let flexJustify = 'justify-start';

 if (appTheme === 'system') {
  flexJustify = 'justify-center';
 } else if (appTheme === 'light') {
  flexJustify = 'justify-end';
 }

 return (
  <div className='self-center lg:basis-[9rem] order-2 lg:order-1'>
   <div className='inline-grid p-[2px] border border-neutral-300 rounded-full text-neutral-600 dark:border-neutral-700 dark:text-neutral-400 relative bg-background shadow-lg'>
    <div
     className={`absolute inset-0 p-[2px] rounded-full flex items-center ${flexJustify} z-[0]`}
    >
     <motion.div
      layout
      className='rounded-full flex bg-neutral-200 dark:bg-neutral-800'
     >
      <Button className='opacity-0' size='icon' variant='ghost' shape='rounded'>
       <TbMoonStars className='size-5' />
      </Button>
     </motion.div>
    </div>
    <div className='flex items-center z-[1]'>
     <Button
      className='cursor-pointer'
      size='icon'
      variant='ghost'
      shape='rounded'
      onClick={() => changeAppTheme('dark')}
     >
      <TbMoonStars className='size-5' />
     </Button>
     <Button
      className='cursor-pointer'
      size='icon'
      variant='ghost'
      shape='rounded'
      onClick={() => changeAppTheme('system')}
     >
      <HiOutlineComputerDesktop className='size-5' />
     </Button>
     <Button
      className='cursor-pointer'
      size='icon'
      variant='ghost'
      shape='rounded'
      onClick={() => changeAppTheme('light')}
     >
      <LuSunMedium className='size-5' />
     </Button>
    </div>
   </div>
  </div>
 );
}
