import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { malerei20, malerei19, malerei18, malerei17, malerei16, malerei15 } from '../../data/data'
import SinglePainting2 from '../../components/SinglePainting2'
import Link from 'next/link'
// import SinglePainting from '../../components/SinglePainting.js.bak'


const MalereiJedesJahr = () => {
    const router = useRouter()
    const slug = router.query.slug || []
    const year = slug.join('/') === '2020' ?
        malerei20.map((ele, i) => <SinglePainting2
            key={i}
            ele={ele}
        />) : slug.join('/') === '2019' ?
            malerei19.map((ele, i) => <SinglePainting2
                key={i}
                ele={ele}
            />) : slug.join('/') === '2018' ?
                malerei18.map((ele, i) => <SinglePainting2
                    key={i}
                    ele={ele}
                />) : slug.join('/') === '2017' ?
                    malerei17.map((ele, i) => <SinglePainting2
                        key={i}
                        ele={ele}
                    />) : slug.join('/') === '2016' ?
                        malerei16.map((ele, i) => <SinglePainting2
                            key={i}
                            ele={ele}
                        />) : slug.join('/') === '2015' ?
                            malerei15.map((ele, i) => <SinglePainting2
                                key={i}
                                ele={ele}
                            />) : "Year not found"
    console.log(year)
    return (
        <Layout title={slug.join('/')}>
            <div className="title">
                <h2>Malerei {slug.join('/')}</h2>
                <Link href="/malerei">
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z" /></svg>
                    </a>
                </Link>
            </div>
            <div className="images">
                {year}
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
            }
            .title svg:hover {
                opacity: .8;
            }
            h2 {
                margin-bottom: 2vh;
                font-size: 8vh;
                color: rgba(58, 83, 89, 1);
            -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: rgba(58, 83, 89, 1);
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

export default MalereiJedesJahr