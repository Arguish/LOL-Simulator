import { Route, Routes } from 'react-router-dom';
import HW from '../Components/HW/HW';

const Directory = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<HW />} />
        </Routes>
    );
};

export default Directory;
