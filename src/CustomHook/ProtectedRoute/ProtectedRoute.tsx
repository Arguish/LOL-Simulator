import { Navigate } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }: Props) => {
    const isAuthenticated = localStorage.getItem('authToken');

    if (isAuthenticated == null) {
        return <Navigate to="/" />;
    }
    return children;
};

export default ProtectedRoute;
