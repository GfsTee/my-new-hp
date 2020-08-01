import MalereiEinzelansicht from '../../components/MalereiEinzelJahresansicht'
import { malerei18 } from '../../data/data'

const malerei2020 = () => {
    return (
        <MalereiEinzelansicht year={2018} yearData={malerei18} />
    );
}

export default malerei2020;