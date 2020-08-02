import Link from 'next/link'

const MalereiJahre = (props) => {
    return (
        <section style={{ gridColumn: `${props.ele.full ? "1 / span 2" : "auto"}` }}>
            <h4>{props.ele.year}</h4>
            <figure >
                <Link href={`/malerei/${props.ele.year}`}>
                    <div className="picture" style={{ height: `${props.ele.full ? "80vh" : "40vh"}`, background: `url(${props.ele.pic}) center/cover no-repeat` }}></div>
                </Link>
                <figcaption>
                    <Link href={`/malerei/${props.ele.year}`}>
                        <a>Discover more</a>
                    </Link>

                </figcaption>
            </figure>
            <style jsx>{`
            h4 {
            text-align: right;
            font-size: 8vmin;
            transform: translateY(40%);
            color: #D99414;
            -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #D99414;
            position: relative;
            z-index: 88
            }
            figcaption {
                text-align: center;
                padding: 3vh 0 5vh;
            }
            a,a:visited {
                text-decoration: none;
                color: #f2f2f2;
                padding: 10px 20px;
                background: #172626;
                border: 2px solid #97A4A6;
                display: inline-block;
                transition: box-shadow .5s, color .5s, background .5s;
            }
            a:hover {
                color: #172626;
                background: #f2f2f2;
                box-shadow: 5px -5px #D99414;

            }
            a:active {

            }
            .picture {
                transition: opacity 1s;
                cursor: pointer;
            }
            .picture:hover {
                opacity: .8;
            }

      `}</style>
        </section >
    );
}

export default MalereiJahre;