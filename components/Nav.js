import Link from 'next/link'
import { useState, useEffect, useRef } from 'react';


const Nav = (props) => {
    const [isShown, setIsShown] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setIsShown(false));
    return (
        <nav ref={ref}>

            <h1><Link href=""><a>Georg Treitz</a></Link></h1>
            <div id="hamburger" onClick={() => setIsShown(!isShown)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={isShown ? "show" : "hide"} >
                <li><Link href="/"><a>News</a></Link></li>
                <li><Link href="/malerei"><a>Malerei</a></Link></li>
                <li><Link href="/vita"><a>Vita</a></Link></li>
                <li><Link href="/texte"><a>Texte</a></Link></li>
            </ul>

            <style jsx>{`
        nav {
            display: flex;
            justify-content: space-between;
            padding: 2vh 5%; 
            background: #172626;
            width: 100%;
            color: #f2f2f2;
            position: relative;
            background: #172626;
        }
        a,a:visited {
            color: #f2f2f2;
            text-decoration: none;
            font-size: 5vh;
            display: block;
            padding-bottom: 3px;
            border-bottom: 2px solid transparent;
            transition: border-bottom 1s;
        }
        a:hover {
            border-bottom: 2px solid #D99414;
        }
        a:active {

        }
        h1 {
            font-weight: 400;
        }
        h1 a {
            color: #f2f2f2;
            font-size: .9em;
            text-decoration: none;
        }
        ul {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            width: 80%;
            list-style-type: none;
            position: absolute;
            top: 0;
            height: 100vh;
            background: rgba(0 0 0 /.8);
            z-index: 89999;
            cursor: pointer;
            transition: right 1s; 
        }
        .hide {
            right: -100%;
        }
        .show {
            right: 0;
        }
        #hamburger {
            position: relative;
            height: 30px;
            width: 35px;
            z-index: 999999;
        }
        #hamburger span {
            position: absolute;
            width: 100%;
            background: #D99414;
            height: 2px;
            
            top: 0;
        }
        #hamburger span:nth-of-type(2){
            top: 10px;
            width: 80%;
            right: 0;
            background: #3B5459;
        }
        #hamburger span:nth-of-type(3){
            top: 20px;
        }
        
      `}</style>
        </nav >
    );
}

export default Nav;

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