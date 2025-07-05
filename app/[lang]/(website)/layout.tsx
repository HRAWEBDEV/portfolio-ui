import { PropsWithChildren } from 'react';
import Header from './components/Header';
import Container from './components/Container';

export default function layout({ children }: PropsWithChildren) {
 return (
  <div className='bg-neutral-200 dark:bg-black'>
   <Container>
    <Header />
    {children}
   </Container>
  </div>
 );
}
