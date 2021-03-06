import React, { useState, useRef, useEffect } from 'react';

const SinglePainting2 = (props) => {
    const [isShown, setIsShown] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setIsShown(false));
    return (
        <figure className="main-fig">
            <div className="small-img-container" onClick={() => setIsShown(true)}></div>
            <figure className={`fullscreen ${isShown ? "show" : "hide"}`} ref={ref} >
                <div className="close">
                    <svg onClick={() => setIsShown(false)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.094l-4.157-4.104 4.1-4.141-1.849-1.849-4.105 4.159-4.156-4.102-1.833 1.834 4.161 4.12-4.104 4.157 1.834 1.832 4.118-4.159 4.143 4.102 1.848-1.849z" /></svg>
                </div>
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
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(22, 38, 38, .8);
                padding: 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                box-shadow: 10px -10px rgba(216, 147, 19, .6);
                border: 1px solid #3B5459;
                transition: opacity .5s, height .5s;
            }
            .big-img {
                max-width: 75vw;
                max-height: 75vh;
                object-fit: contain;
            }
            .big-img-container {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .hide {
                z-index: -100000;
                opacity: 0;
            }
            .hide img {
                height: 0px;
            }
            .show {
                z-index: 1000;
                opacity: 1;
                
            }
            figcaption {
                padding-top: 10px;
                color: #F2F2F2;
            }
            .close {
                width: 100%;
            }
            svg {
                position: absolute;
                right: 3px;
                top: 3px;
                cursor: pointer;
                fill: #F2F2F2;
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