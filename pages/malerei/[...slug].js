import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { malerei20, malerei19, malerei18 } from '../../data/data'
import SinglePainting2 from '../../components/SinglePainting2'
// import SinglePainting from '../../components/SinglePainting.js.bak'


const MalereiJedesJahr = () => {
    const router = useRouter()
    const slug = router.query.slug || []
    const year = slug.join('/') === '2020' ?
        malerei20 : slug.join('/') === '2019' ?
            malerei19 : slug.join('/') === '2018' ?
                malerei18 : ""
    console.log(year)
    return (
        <Layout title={slug.join('/')}>
            <h2>Malerei {slug.join('/')}</h2>
            <div className="images">
                {malerei20.map((ele, i) => <SinglePainting2
                    key={i}
                    ele={ele}
                />)}
                {/* <SinglePainting2 num="1" />
                <SinglePainting2 num="2" />
                <SinglePainting2 num="3" />
                <SinglePainting2 num="4" />
                <SinglePainting2 num="5" />
                <SinglePainting2 num="6" />
                <SinglePainting2 num="7" />
                <SinglePainting2 num="8" /> */}

            </div>
            <style jsx>{`
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