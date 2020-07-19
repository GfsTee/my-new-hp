import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <ul>
                <li><Link href=""><a>Impressum</a></Link></li>
                <li><Link href=""><a>DSGvO</a></Link></li>
            </ul>
            <style jsx>{`
        h1 {
          color: white
        }
      `}</style>
        </footer>
    );
}

export default Footer;