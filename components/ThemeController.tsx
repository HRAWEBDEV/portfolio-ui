'use client';
import { Button } from './ui/button';
import { TbMoonStars } from 'react-icons/tb';
import { LuSunMedium } from 'react-icons/lu';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { useAppConfigContext } from '@/services/app-config/appConfigContext';

export default function ThemeController() {
 const { changeAppTheme } = useAppConfigContext();
 return (
  <div className='inline-block p-[2px] border border-neutral-300 rounded-full text-neutral-600 dark:border-neutral-700 dark:text-neutral-400'>
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
 );
}
