import ThemeController from '@/components/ThemeController';
import Nav from './Nav';
import Profile from './Profile';

export default function Header() {
 return (
  <header className='sticky top-0 start-0 end-0'>
   <div className='h-[var(--website-header-height)] flex gap-4 max-w-[var(--website-container-max-w)] mx-auto'>
    <ThemeController />
    <Nav />
    <Profile />
   </div>
  </header>
 );
}
