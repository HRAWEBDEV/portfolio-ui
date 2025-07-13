import { PropsWithChildren } from 'react';

export default function Container({ children }: PropsWithChildren) {
 return (
  <div className='md:px-16 overflow-x-clip'>
   <div className='px-4 lg:px-8 max-w-[var(--website-container-max-w)] mx-auto bg-background dark:bg-neutral-900 min-h-[100dvh] border-x border-neutral-300 dark:border-neutral-700'>
    {children}
   </div>
  </div>
 );
}
