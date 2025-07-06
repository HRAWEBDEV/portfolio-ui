'use client';
import { Button } from '@/components/ui/button';
import { GrLanguage } from 'react-icons/gr';
import { useAppConfigContext } from '@/services/app-config/appConfigContext';
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
 const { changeActiveLang } = useAppConfigContext();
 return (
  <div>
   <DropdownMenu>
    <DropdownMenuTrigger asChild>
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
       <Badge className='p-[0.1rem] size-5'>فا</Badge>
      </div>
     </div>
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
  </div>
 );
}
