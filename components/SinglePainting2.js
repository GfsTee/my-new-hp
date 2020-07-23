import React, { useState, useEffect, useRef } from 'react';


const SinglePainting2 = (props) => {
    const [isShown, setIsShown] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setIsShown(false));

    return (
        <figure className="main-fig">
            <div className="small-img-container" onClick={() => setIsShown(true)}></div>
            <figure className={`fullscreen ${isShown ? "show" : "hide"}`} ref={ref} >
                <div className="big-img-container">
                    <img className="big-img" src={`${props.ele.picUrl}`} alt="" />
                </div>
                <figcaption>
                    {props.ele.title}
                </figcaption>
            </figure>
            <style jsx>{`
            .small-img-container {
                height: 100%;
                background: url(${props.ele.picUrl}) center center / cover no-repeat;
            }
            .small-img-container:hover {
                opacity: .8;
            }
            .fullscreen {
                position: absolute;
                top: 10%;
                left: 10%;
                bottom: 10%;
                right: 10%;
                background: rgba(255 255 255 / .7);
                padding: 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                box-shadow: 10px -10px rgba(216, 147, 19, .8);
                border: 1px solid #3B5459;
            }
            .big-img-container {
                height: 100%
            }
            .fullscreen img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
            }
            .hide {
                z-index: -100000;
                opacity: 0;
            }
            .show {
                z-index: 1000;
                opacity: 1;
            }
      `}</style>
        </figure >
    );
}

export default SinglePainting2;

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