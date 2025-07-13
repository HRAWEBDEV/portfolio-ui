import { PropsWithChildren } from 'react';

export default function Main({ children }: PropsWithChildren) {
 return <main className='py-10 px-4 lg:px-8'>{children}</main>;
}
