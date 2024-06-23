import styled from "styled-components";
import { Container } from "../../../components";

const HeroBase = styled.header`
    background-color: var(--primary-12);
`;

const HeroContent = styled.div`
    padding-top: var(--space-88);
`;

export const Hero = () => {
    return (
        <HeroBase>
            <Container></Container>
        </HeroBase>
    );
};
