import Hero from './components/home/Hero';
import Gallery from './components/home/Gallery';
import WorkOverview from './components/home/WorkOverview';
import ProjectsOverview from './components/home/ProjectsOverview';

export default async function Home() {
 return (
  <div>
   <Hero />
   <Gallery />
   <div className='lg:grid lg:gap-8 lg:grid-cols-[1fr_25rem] items-start'>
    <ProjectsOverview />
    <WorkOverview />
   </div>
  </div>
 );
}
