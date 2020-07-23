import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { malerei20, malerei19, malerei18 } from '../../data/data'
import SinglePainting from '../../components/SinglePainting'


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
            <div className="images">
                <SinglePainting num="1" />
                <SinglePainting num="2" />
                <SinglePainting num="3" />
                <SinglePainting num="4" />
                <SinglePainting num="5" />
                <SinglePainting num="6" />
                <SinglePainting num="7" />
                <SinglePainting num="8" />

                <h1>Slug: {slug.join('/')}</h1>
            </div>
            <style jsx>{`
        .images {
            position: relative;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-auto-rows: 30vh;
            gap: 20px;
            z-index:999;
            background: #fff;
        }
      `}</style>
        </Layout>
    )
}

export default MalereiJedesJahr