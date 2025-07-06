import { PropsWithChildren } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import { type WithParams } from '@/utils/params';
import { loader } from '@/internationlization/loader';

export default async function layout({
 children,
 params,
}: PropsWithChildren & WithParams) {
 const { lang } = await params;
 const dic = await loader(lang);
 return (
  <div className='bg-neutral-200 dark:bg-black'>
   <Container>
    <Header dic={dic} />
    {children}
   </Container>
  </div>
 );
}
