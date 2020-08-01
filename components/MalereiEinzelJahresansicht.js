import Layout from './Layout'
import SinglePainting from './SinglePainting'
import Link from 'next/link'

const MalereiEinezansicht = (props) => {
    return (
        <Layout title={props.year}>
            <div className="title">
                <Link href="/malerei">
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z" /></svg>
                    </a>
                </Link>
                <h2>Malerei {props.year}</h2>
            </div>
            <div className="images">
                {props.yearData.map((ele, i) => <SinglePainting key={i} ele={ele} />)}
            </div>
            <style jsx>{`
            .title {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
            }
            .title svg {
                transform: rotate(180deg);
                fill: rgba(58, 83, 89, 1);
                transition: transform .5s;
            }
            .title svg:hover {
                opacity: .8;
                transform: scale(1.1) rotate(180deg);
            }
            h2 {
                margin-bottom: 2vh;
                font-size: 8vh;
                color: rgba(58, 83, 89, 1);
            -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: rgba(58, 83, 89, 1);
            text-align: end;
            }
        .images {
            position: relative;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-auto-rows: 40vh;
            gap: 20px;
            z-index:999;
            background: #fff;
        }
      `}</style>
        </Layout>
    )
}

export default MalereiEinezansicht