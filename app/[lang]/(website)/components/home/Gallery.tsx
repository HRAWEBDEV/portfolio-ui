export default function Gallery() {
 return (
  <section className='relative h-[12rem] lg:h-[20rem] mb-16'>
   <div className='absolute end-0 start-0 flex justify-center gap-6'>
    {Array.from({ length: 5 }, (_, i) => i).map((i) => {
     let rotateDirection = 1;
     if (i === 1 || i === 3) {
      rotateDirection = -1;
     }
     return (
      <div
       key={i}
       className='shrink-0'
       style={{
        transform: `rotate(${rotateDirection * 2}deg)`,
       }}
      >
       <img
        src='/images/gallery/image-1.webp'
        alt='projects-image'
        className='aspect-[9/10] h-[12rem] lg:h-[20rem] rounded-2xl'
       />
      </div>
     );
    })}
   </div>
  </section>
 );
}
