import { useCallback, useRef } from 'react';

function useThrottle<T extends (...args: any[]) => any>(callback: T, delay: number) {
  const isThrottled = useRef<boolean>(false);
  return useCallback(
    (...args: any[]) => {
      if (isThrottled.current) {
        return;
      }
      callback(...args);
      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, delay);
    },
    [callback, delay],
  );
}

export default useThrottle;
