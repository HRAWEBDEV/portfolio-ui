import ThemeController from '@/components/ThemeController';

export default function Header() {
 return (
  <header className='fixed top-0 start-0 end-0 h-[var(--website-header-height)] p-2'>
   <div className='container mx-auto'>
    <ThemeController />
   </div>
  </header>
 );
}
