import styled from 'styled-components';

const LoginDiv = styled.div`
    display: flex;
`;

const Login: React.FC = () => {
    return (
        <LoginDiv>
            {' '}
            Login
            <button
                onClick={() => {
                    localStorage.setItem('authToken', 'WTF');
                }}
            >
                Login To Loco
            </button>
        </LoginDiv>
    );
};

export default Login;
