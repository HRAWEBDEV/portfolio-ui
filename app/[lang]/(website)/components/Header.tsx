import ThemeController from '@/components/ThemeController';
import Nav from './Nav';
import Profile from './Profile';
import { type WithDictionary } from '@/internationlization/loader';

export default async function Header({ dic }: WithDictionary) {
 return (
  <header className='sticky top-0 start-0 end-0'>
   <div className='h-[var(--website-header-height)] flex gap-4 max-w-[var(--website-container-max-w)] mx-auto'>
    <ThemeController />
    <Nav dic={dic} />
    <Profile />
   </div>
  </header>
 );
}
