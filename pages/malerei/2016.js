import MalereiEinzelansicht from '../../components/MalereiEinzelJahresansicht'
import { malereiPre17 } from '../../data/data'

const pre2017 = () => {
    return (
        <MalereiEinzelansicht year={"2016+"} yearData={malereiPre17} />
    );
}

export default pre2017;