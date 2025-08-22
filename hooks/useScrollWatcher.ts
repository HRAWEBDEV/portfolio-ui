import { useEffect, useRef } from 'react';

type ScrollDirection = 'up' | 'down';
type ScrollChangeHandler = (params: {
 direction: ScrollDirection;
 position: number;
}) => unknown;

export function useScrollWatcher({
 threshold = 100,
 onScrollChange,
}: {
 threshold?: number;
 onScrollChange: ScrollChangeHandler;
}) {
 const watcherRef = useRef<AbortController | null>(null);
 const onScrollChangeRef = useRef(onScrollChange);
 useEffect(() => {
  let scrollPosition = 0;
  let scrollDirection: ScrollDirection = 'down';
  watcherRef.current = new AbortController();
  function watcher() {
   const bodyTopPosition = document.body.getBoundingClientRect().top;
   const scrollDiff = Math.abs(
    Math.abs(scrollPosition) - Math.abs(bodyTopPosition)
   );
   if (scrollDiff > threshold || !bodyTopPosition) {
    if (scrollPosition > bodyTopPosition && bodyTopPosition) {
     scrollDirection = 'down';
    } else {
     scrollDirection = 'up';
    }
    scrollPosition = bodyTopPosition;
    onScrollChangeRef.current({
     direction: scrollDirection,
     position: scrollPosition,
    });
   }
  }
  window.addEventListener('scroll', watcher, {
   signal: watcherRef.current.signal,
  });
  return () => {
   watcherRef.current?.abort();
  };
 }, [onScrollChangeRef, threshold]);

 return {
  abortController: watcherRef.current,
 };
}
