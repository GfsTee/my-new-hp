import MalereiEinzelansicht from '../../components/MalereiEinzelJahresansicht'
import { malerei20 } from '../../data/data'

const malerei2020 = () => {
    return (
        <MalereiEinzelansicht year={2020} yearData={malerei20} />
    );
}

export default malerei2020;