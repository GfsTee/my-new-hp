import MalereiEinzelansicht from '../../components/MalereiEinzelJahresansicht'
import { malerei19 } from '../../data/data'

const malerei2019 = () => {
    return (
        <MalereiEinzelansicht year={2019} yearData={malerei19} />
    );
}

export default malerei2019;