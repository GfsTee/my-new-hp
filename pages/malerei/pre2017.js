import MalereiEinzelansicht from '../../components/MalereiEinzelJahresansicht'
import { malereiPre17 } from '../../data/data'

const malerei2020 = () => {
    return (
        <MalereiEinzelansicht year={"ältere"} yearData={malereiPre17} />
    );
}

export default malerei2020;