import Link from 'next/link'

const Nav = () => {
    return (
        <nav>
            <h1>Georg Treitz<span> | Malerei</span></h1>
            <ul>
                <li><Link href=""><a>News</a></Link></li>
                <li><Link href=""><a>Malerei</a></Link></li>
                <li><Link href=""><a>Papierarbeiten</a></Link></li>
                <li><Link href=""><a>Vita</a></Link></li>
                <li><Link href=""><a>Texte</a></Link></li>
            </ul>
            <style jsx>{`
        nav {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            padding: 0 5%; 
            background: #333;
            min-height: 5vh;
            color: #fff;
        }
        a {
            color: #fff;
            text-decoration: none;
        }
        ul {
            display: flex;
            justify-content: space-between;
            width: 60%;
            list-style-type: none;
        }
        
        h1 span {
            color: #fff;
            -webkit-text-fill-color: #333; /* Will override color (regardless of order) */
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #fff;
        }
      `}</style>
        </nav>
    );
}

export default Nav;