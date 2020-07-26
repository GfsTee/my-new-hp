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
  if (process.browser) {
    useEventListener('mousemove', handler);
  }

  return (
    <Layout title={"Malerei"}>
      <h1>

      </h1>
      <div className="pic">
        <div className="pic-inverted"></div>
      </div>
      <div className="title">
        aus der Serie <i>lys</i> V, Malerei auf Glas, LED, 20x30cm, 2019
      </div>
      <div className="small">
        <i>Normale Ansicht: Licht aus - wenn du die Maus über das Bild bewegst wird bei diesem Teil des Bilds die LEDs "eingeschaltet"</i>
      </div>
      <style jsx>{`
        .pic {
          background: url(/pictures/pic2.jpg) center / contain no-repeat;
          cursor: none;
        }
        .pic-inverted {
          background: url(/pictures/pic1.jpg) center / contain no-repeat;
          clip-path: circle(80px at ${coords.x}px ${coords.y}px);
          height: 80vh;
        }
        .title {
          padding-top: 10px;
          text-align: center;
        }
        .small {
          text-align: center;
          font-size: .8em;
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