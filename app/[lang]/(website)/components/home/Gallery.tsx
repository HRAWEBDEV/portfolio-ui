export default function Gallery() {
 return (
  <section className='relative'>
   <div className='absolute -start-[26rem] lg:-start-[18rem] flex gap-4'>
    {Array.from({ length: 5 }, (_, i) => i).map((i) => (
     <div key={i} className='shrink-0'>
      <img
       src='/images/gallery/image-1.webp'
       alt='projects-image'
       className='size-[15rem] lg:size-[20rem] rounded-2xl'
      />
     </div>
    ))}
   </div>
  </section>
 );
}
