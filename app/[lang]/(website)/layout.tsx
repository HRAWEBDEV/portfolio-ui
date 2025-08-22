import { PropsWithChildren } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import { type WithParams } from '@/utils/params';
import Main from './components/Main';
import Footer from './components/Footer';

export default async function layout({
 children,
}: PropsWithChildren & WithParams) {
 return (
  <div className='bg-neutral-200 dark:bg-black'>
   <Container>
    <Header />
    <Main>{children}</Main>
    <Footer />
   </Container>
  </div>
 );
}
