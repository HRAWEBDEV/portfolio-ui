'use client';
import { useState } from 'react';
import ThemeController from '@/components/ThemeController';
import Nav from './Nav';
import Profile from './Profile';
import { useScrollWatcher } from '@/hooks/useScrollWatcher';

export default function Header() {
 const [hideHeader, setHideHeader] = useState(false);
 useScrollWatcher({
  onScrollChange: ({ direction }) => {
   if (direction === 'up') {
    setHideHeader(false);
   } else {
    setHideHeader(true);
   }
  },
 });
 return (
  <header
   className={`sticky top-0 start-0 end-0 px-4 lg:px-8 z-[var(--website-header-z-index)] transition-transform ${
    hideHeader ? 'translate-y-[-5rem]' : ''
   }`}
  >
   <div className='h-[var(--website-header-height)] flex gap-4 max-w-[var(--website-container-max-w)] mx-auto'>
    <ThemeController />
    <Nav />
    <Profile />
   </div>
  </header>
 );
}
