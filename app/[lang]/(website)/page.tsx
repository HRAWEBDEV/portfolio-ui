import Hero from './components/home/Hero';
import Gallery from './components/home/Gallery';
import WorkOverview from './components/home/WorkOverview';
import ProjectsOverview from './components/home/ProjectsOverview';
import { loader } from '@/internationlization/loader';
import { WithParams } from '@/utils/params';

export default async function Home({ params }: WithParams) {
 const { lang } = await params;
 const dic = await loader(lang);
 return (
  <div>
   <Hero />
   <Gallery />
   <div className='lg:grid lg:gap-8 lg:grid-cols-[1fr_25rem] items-start'>
    <ProjectsOverview />
    <WorkOverview dic={dic} />
   </div>
  </div>
 );
}
