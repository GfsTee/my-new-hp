import Layout from '../components/Layout'
import { vita, ausstellungen } from '../data/data'

const Vita = () => {
    return (
        <Layout title={"Vita"}>
            <div id="vita">
                <section className="grid">
                    <h2>Vita</h2>
                    {vita.map(ele => <><div>{ele.year}</div><div>{ele.title}</div></>)}
                    {/* style={{ borderTop: `${ele.year !== "" ? "1px solid #333" : ""}` }} */}
                    <h2>Ausstellungen (Auswahl)</h2>
                    {ausstellungen.map(ele => <><div>{ele.year}</div><div>{ele.title}</div></>)}
                </section>
                <h2>Sammlungen</h2>
                <div>Henkel AG & Co. KGaA, Düsseldorf</div>
                <div>Deutsche Apotheker und Ärztebank</div>
                <div>Verschiedene nationale und internationale private Sammlungen</div>
            </div>
            <style jsx>{`
            h2 {
                margin: 30px 0 10px;
                grid-column: 1 / -1;
            }
            .grid {
                display: inline-grid;
                grid-template-columns: 2fr 8fr;
            }
            .grid div {
                border-bottom: 1px solid rgba(150, 164, 165, .6);
            }
            div {
                padding: 5px 0;
            }
            #vita {
                width: 80%;
                margin: 0 auto;
            }
            @media screen and (max-width: 768px) {
                #vita {
                    width: 100%;
                }
            }
      `}</style>
        </Layout>
    );
}

export default Vita;