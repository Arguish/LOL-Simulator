import styled from 'styled-components';
import Divisa from './Divisa';

const DivisaMenu = (): JSX.Element => {
    return (
        <RowDiv>
            <ColumnDiv>
                <Divisa type={2} amount={1000} />
                <Divisa type={3} amount={1000} />
            </ColumnDiv>
            <ColumnDiv>
                <Divisa type={0} amount={1000} />
                <Divisa type={1} amount={1000} />
            </ColumnDiv>
        </RowDiv>
    );
};

export default DivisaMenu;

const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;
const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding: 5px;
    margin: 10px;
    gap: 10px;
`;
