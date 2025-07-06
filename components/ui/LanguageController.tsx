'use client';
import { Button } from '@/components/ui/button';
import { GrLanguage } from 'react-icons/gr';
import { useAppConfigContext } from '@/services/app-config/appConfigContext';
import {
 Drawer,
 DrawerClose,
 DrawerContent,
 DrawerHeader,
 DrawerTitle,
 DrawerTrigger,
} from '@/components/ui/drawer';
import { IoIosClose } from 'react-icons/io';
// import {
//  Drawer,
//  DrawerClose,
//  DrawerContent,
//  DrawerHeader,
//  DrawerTitle,
//  DrawerTrigger,
// } from '@/components/ui/drawer';
// import Link from 'next/link';
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { localesInfo } from '@/internationlization/locales';
import { Badge } from '@/components/ui/badge';

export default function LanguageController() {
 const { activeLangInfo, changeActiveLang } = useAppConfigContext();

 const languageControllerButton = (
  <div className='inline-grid p-[2px] border border-neutral-300 rounded-full text-neutral-600 dark:border-neutral-700 dark:text-neutral-400 relative self-center bg-background shadow-lg'>
   <Button
    className='cursor-pointer'
    size='icon'
    variant='ghost'
    shape='rounded'
   >
    <GrLanguage className='size-5' />
   </Button>
   <div className='absolute end-0 top-0 pointer-events-none'>
    <Badge className='p-[0.1rem] size-5 uppercase'>
     {activeLangInfo.shortName}
    </Badge>
   </div>
  </div>
 );

 return (
  <div>
   <DropdownMenu>
    <DropdownMenuTrigger asChild>
     <div className='hidden lg:block'>{languageControllerButton}</div>
    </DropdownMenuTrigger>
    <DropdownMenuContent align='start'>
     {Object.values(localesInfo).map((locale) => (
      <DropdownMenuItem
       key={locale.locale}
       onClick={() => changeActiveLang(locale.locale)}
      >
       {locale.name}
      </DropdownMenuItem>
     ))}
    </DropdownMenuContent>
   </DropdownMenu>
   {/* for mobile */}
   <Drawer>
    <DrawerTrigger asChild>
     <div className='lg:hidden'>{languageControllerButton}</div>
    </DrawerTrigger>
    <DrawerContent>
     <DrawerHeader>
      <DrawerTitle className='text-lg font-medium flex justify-between items-center'>
       <div className='basis-[4rem]'></div>
       <span></span>
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
     </DrawerHeader>
     <ul className='text-center [&>li:not(:last-child)_button]:border-b pb-4'>
      {Object.values(localesInfo).map((locale) => (
       <li key={locale.locale}>
        <Button
         className='block w-full text-center py-4 h-auto border-neutral-300 dark:border-neutral-700'
         variant='ghost'
         onClick={() => changeActiveLang(locale.locale)}
        >
         {locale.name}
        </Button>
       </li>
      ))}
     </ul>
    </DrawerContent>
   </Drawer>
  </div>
 );
}
