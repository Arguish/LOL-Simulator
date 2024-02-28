import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import LoLIconFlatGold from '../../assets/LoL_Logo_Icon_Package/LoL_Icon_Flat_Gold/LoL_Icon_Flat_GOLD';

const PlayButton = (): JSX.Element => {
    return (
        <PlayButtonDiv>
            <IconContainer>
                <OverlayContainer>
                    <PositionedIcon>
                        <AnimatedIcon />
                    </PositionedIcon>
                    <PositionedIcon>
                        <StyledLoLIconFlatGold />
                    </PositionedIcon>
                </OverlayContainer>
            </IconContainer>
            <ExtraTextContainer>
                <TextContainer>
                    <strong>Jugar</strong>
                </TextContainer>
            </ExtraTextContainer>
        </PlayButtonDiv>
    );
};

export default PlayButton;

const TextContainer = styled.div`
    padding: 6px 30px;
    border: 3px solid var(--blue-play);
    background-image: linear-gradient(
        to bottom,
        var(--background),
        var(--background),
        var(--flat-border)
    );
`;
const ExtraTextContainer = styled.div`
    padding: 2px 2px 2px 10px;
    border: 1px solid var(--yellow-coin-dark);
`;

const StyledLoLIconFlatGold = styled(LoLIconFlatGold)`
    height: 50px;
    width: 50px;
    stroke: black;
    stroke-width: 20;
`;

const IconContainer = styled.div`
    margin: 0px -30px 0px 0px;
    display: flex;
`;

const IconGradient = styled(motion.div)`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-image: linear-gradient(to bottom, #0ac8b9, #0ac8b9, #005a82);
`;

const AnimatedIcon = (): JSX.Element => {
    const [active, setactive] = useState(false);
    return (
        <IconGradient
            onHoverStart={() => {
                setactive(true);
            }}
            onHoverEnd={() => {
                setactive(false);
            }}
            animate={{
                rotate: [0, 20, -20, 0],
                backgroundImage: [
                    'linear-gradient(to bottom, #0ac8b9, #0ac8b9, #005a82)',
                    'linear-gradient(to bottom, #0ac8b9, #005a82, #005a82)'
                ]
            }}
            transition={{
                duration: active,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse'
            }}
        />
    );
};

const OverlayContainer = styled.div`
    position: relative;
    height: 100px;
    width: 50px;
`;

const PositionedIcon = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PlayButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin: 0px 10px;
    position: relative;

    :before {
        content: '';
        position: absolute;
        top: 31px;
        left: 15px;
        right: 3px;
        bottom: 31px;
        z-index: -1;
        box-shadow: 0 0 8px var(--blue-play), 0 0 10px var(--blue-play),
            0 0 12px var(--blue-play);
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.9s ease-in-out;
    }

    :hover:before {
        opacity: 1;
    }
`;
