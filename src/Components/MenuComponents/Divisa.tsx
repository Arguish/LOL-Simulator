import styled from 'styled-components';
import Icon from './Icon';

interface DivisaProps {
    type: number;
    amount: number;
}

interface IconType {
    icon: string;
    color: string;
}

const Divisa = ({ type, amount }: DivisaProps): JSX.Element => {
    type = type < 4 ? type : 4;

    const iconType: IconType[] = [
        { icon: 'Diamond', color: 'var(--orange-esence)' },
        { icon: 'Token', color: 'var(--mythic-esence-dark)' },
        { icon: 'Hive', color: 'var(--yellow-coin)' },
        { icon: 'Hexagon', color: 'var(--blue-esence)' },
        { icon: 'Gpp Bad', color: 'red' }
    ];
    return (
        <DivisaDiv>
            <div>
                <Icon
                    text={iconType[type].icon}
                    color={iconType[type].color}
                    size={20}
                />
            </div>
            <DivisaP>{`${amount}`}</DivisaP>
        </DivisaDiv>
    );
};

export default Divisa;

const DivisaDiv = styled.div`
    display: flex;
    padding: 0px 5px;
    padding-right: 15px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 50px;
    border: 1px solid var(--flat-border);
`;

const DivisaP = styled.p`
    padding: 0%;
    margin: 0%;
    font-family: 'Spiegel', sans-serif;
    font-weight: bold;
    color: var(--white);
`;
