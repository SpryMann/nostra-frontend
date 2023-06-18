import { RefObject, useEffect } from 'react';

type Handler = (event: MouseEvent) => void;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler
) {
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      const element = ref?.current;

      if (!element || element.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    window.addEventListener('click', clickHandler);

    return () => {
      window.removeEventListener('click', clickHandler);
    };
  }, [ref, handler]);
}

export default useOnClickOutside;
