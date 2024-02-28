import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../Components/MenuComponents/Icon';
import DivisaMenu from '../Components/MenuComponents/DivisaMenu';
import PlayButton from '../Components/MenuComponents/PlayButton';

const DashboardContainer = styled.div`
    height: 8vh;
    padding: 5px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: solid var(--flat-border) 2px;
    border-top: solid var(--yellow-coin-dark) 2px;
`;

const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Hr = styled.hr`
    margin: 5px;
    height: 2.5em;
`;

const Dashboard: React.FC = () => {
    return (
        <>
            <DashboardContainer>
                <RowDiv>
                    <PlayButton />
                    <Icon text="info" color="var(--blue-esence)" />
                    <h2>Inicio</h2>
                </RowDiv>

                <RowDiv>
                    <Icon text="stadium" />
                    <Icon text="rewarded_ads" />
                    <Hr />
                    <Icon text="add_reaction" />
                    <Icon text="account_circle" />
                    <Icon text="business_center" />
                    <Hr />
                    <Icon text="sell" />
                    <Icon text="store" />
                    <Hr />
                    <DivisaMenu />
                    <h2>hueco</h2>
                    <h2>Avatar</h2>
                </RowDiv>
            </DashboardContainer>
            <Outlet />
        </>
    );
};

export default Dashboard;
