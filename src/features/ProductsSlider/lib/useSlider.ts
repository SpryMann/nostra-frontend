import { RefObject, useRef, useState } from 'react';

function useSlider(): [
  RefObject<HTMLDivElement>,
  number,
  (direction: 'left' | 'right') => void,
  {
    left: boolean;
    right: boolean;
  }
] {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetX, setOffsetX] = useState(0);
  const [arrowsState, setArrowsState] = useState({ left: false, right: true });

  const handleSlide = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const maxSlide = 0;
    const minSlide = -1 * (containerRef.current.scrollWidth - containerWidth);
    let newOffsetX = 0;

    if (direction === 'left') {
      newOffsetX = offsetX + containerWidth + 20;
    } else if (direction === 'right') {
      newOffsetX = offsetX - containerWidth - 20;
    }

    if (newOffsetX >= maxSlide) {
      newOffsetX = maxSlide;
    } else if (newOffsetX <= minSlide) {
      newOffsetX = minSlide;
    }

    setArrowsState({
      left: !(newOffsetX >= maxSlide),
      right: !(newOffsetX <= minSlide),
    });
    setOffsetX(newOffsetX);
  };

  return [containerRef, offsetX, handleSlide, arrowsState];
}

export default useSlider;
