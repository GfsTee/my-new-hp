import Layout from '../components/Layout'
import { useState, useRef, useEffect, useCallback } from 'react';

export default function Home() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const handler = useCallback(
    ({ clientX, clientY }) => {
      // Update coordinates
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );
  useEventListener('mousemove', handler);
  return (
    <Layout title={"Malerei"}>
      <h1>
        The mouse position is ({coords.x}, {coords.y})
    </h1>
      <div className="pic">
        <div className="pic-inverted"></div>
      </div>

      <style jsx>{`
        .pic {
          background: url(/pictures/pic2.jpg) center / cover no-repeat;
        }
        .pic-inverted {
          // transition: clip-path .5s;
          background: url(/pictures/pic1.jpg) center / cover no-repeat;
          clip-path: circle(80px at ${coords.x}px ${coords.y}px);
          height: 80vh;
        }
      `}</style>


    </Layout >
  )
}





// Hook
function useEventListener(eventName, handler, element = window) {
  // Create a ref that stores handler
  const savedHandler = useRef();

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On 
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      // Create event listener that calls handler function stored in ref
      const eventListener = event => savedHandler.current(event);

      // Add event listener
      element.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
}