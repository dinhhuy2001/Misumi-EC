import InformItem from '../../Components/InformItem';
import { InformLinks } from '../../Links/ImformLinks';

const InformBox = () => {
    return (
        <div className="mt-20 flex" style={{ gap: '60px' }}>
            {InformLinks.map((item, index) => (
                <InformItem key={index} {...item} />
            ))}
        </div>
    );
};

export default InformBox;
