import React, { useState, useEffect, useRef } from 'react';


const SinglePainting = (props) => {
    const [isShown, setIsShown] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setIsShown(false));

    return (
        <figure className="main-fig">
            <div>
                <img className="small-img" src={`https://source.unsplash.com/random?${props.num}`} alt="" onClick={() => setIsShown(true)} />
            </div>
            <figcaption>
                Lorem ipsum dolor sit amet.
            </figcaption>
            <figure className={`fullscreen ${isShown ? "show" : "hide"}`} ref={ref} >
                <div>
                    <img className="big-img" src={`https://source.unsplash.com/random?${props.num}`} alt="" />
                </div>
                <figcaption>
                    Lorem ipsum dolor sit amet.
                </figcaption>
            </figure>
            <style jsx>{`
            .main-fig {
                align-self: end;
            }
            .small-img {
                max-width: fill-available;
                max-height: fill-available;
                object-fit: contain;
            }
            figure {
                width: 100%;
            }
            .fullscreen {
                position: absolute;
                // max-height: 80%;
                max-width: 80%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                transition: opacity .5s;
                // padding: 3vmin;
                background #fff;
                border: 3px solid #172626;
                padding: 5px;
                text-align: center;

            }
            .big-img {
                max-width: fill-available;
                max-height: fill-available;
                // width: auto;
                // height: auto;
                object-fit: contain;
               
            }
            .hide {
                z-index: -1000${Math.floor(Math.random() * 100)};
                opacity: 0;
            }
            .show {
                z-index: 10${Math.floor(Math.random() * 100)};
                opacity: 1;
            }
            .fullscreen figcaption {
                height: 4%;
                background: #fff;
                display: flex;
                align-items: center;
            }
      `}</style>
        </figure >
    );
}

export default SinglePainting;

function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = event => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }

                handler(event);
            };

            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);

            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler]
    );
}