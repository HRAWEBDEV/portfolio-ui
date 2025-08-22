import ThemeController from '@/components/ThemeController';
import Nav from './Nav';
import Profile from './Profile';

export default async function Header() {
 return (
  <header className='sticky top-0 start-0 end-0 px-4 lg:px-8 z-[var(--website-header-z-index)]'>
   <div className='h-[var(--website-header-height)] flex gap-4 max-w-[var(--website-container-max-w)] mx-auto'>
    <ThemeController />
    <Nav />
    <Profile />
   </div>
  </header>
 );
}
