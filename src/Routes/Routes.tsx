import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login.tsx';
import Home from '../Pages/Home.tsx';

import Menu from '../Layout/Menu.tsx';

import ProtectedRoute from '../CustomHook/ProtectedRoute/ProtectedRoute.tsx';

const Directory = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route
                path="/home"
                element={
                    <ProtectedRoute>
                        <Menu />
                    </ProtectedRoute>
                }
            >
                <Route path="lobby" element={<Home />} />
            </Route>
            <Route path="*" element={<h2>404</h2>} />
        </Routes>
    );
};

export default Directory;
