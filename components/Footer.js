import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <ul>
                <li><Link href="/impressum"><a>Impressum</a></Link></li>
                <li><Link href="/dsgvo"><a>DSGvO</a></Link></li>
            </ul>
            <style jsx>{`
        footer {
            font-weight: 300;
            padding: 1vh 0;
            background: #172626;
        }
        ul {
            display: flex;
            justify-content: space-evenly;
            list-style-type: none;
        }
        a, a:visited {
            color: #f2f2f2;
            text-decoration: none;
            display: block;
            padding-bottom: 2px;
            border-bottom: 1px solid transparent;
            transition: border-bottom 1s;
        }
        a:hover {
            border-bottom: 1px solid #D99414;
        }
      `}</style>
        </footer>
    );
}

export default Footer;