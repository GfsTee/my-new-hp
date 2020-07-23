import Layout from '../components/Layout'
import MalereiJahre from '../components/MalereiJahre'
import { malereiOverview } from '../data/data'
const Malerei = () => {
    return (
        <Layout title={"Malerei"}>
            <div className="malerei">
                {malereiOverview.map((ele, i) => <MalereiJahre key={i} ele={ele} />)}
            </div>
            <style jsx>{`
        .malerei {
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2vmin;
            align-items: center;
        }
      `}</style>
        </Layout>
    );
}

export default Malerei;