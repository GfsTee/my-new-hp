import MalereiEinzelansicht from '../../components/MalereiEinzelJahresansicht'
import { malerei17 } from '../../data/data'

const malerei2017 = () => {
    return (
        <MalereiEinzelansicht year={2017} yearData={malerei17} />
    );
}

export default malerei2017;