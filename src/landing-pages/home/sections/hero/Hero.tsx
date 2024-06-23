import styled from "styled-components";
import { Button, Typography } from "design-system";
import { Container } from "landing-pages/components";
import heroImg from "assets/images/hero.png";

const HeroBase = styled.header`
    background-color: var(--primary-12);
`;

const HeroContent = styled.div`
    padding-top: var(--space-88);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeroSubtext = styled(Typography)`
    color: var(--jaguar-500);
    max-width: 70rem;
    margin-top: var(--space-20);
    margin-bottom: var(--space-30);
`;

const DemoButton = styled(Button)`
    margin-bottom: var(--space-50);
`;

const HeroImg = styled.img`
    width: 100%;
    transform: translateX(-2rem);
`;

export const Hero = () => {
    return (
        <HeroBase>
            <Container>
                <HeroContent>
                    <Typography variant="h1" align="center">
                        Unleash the Power of Projectify
                    </Typography>
                    <HeroSubtext variant="paragraphSM" align="center">
                        Projectify is your all-in-one solution, crafted to
                        simplify your project management journey and supercharge
                        your success
                    </HeroSubtext>
                    <DemoButton
                        color="primary"
                        variant="contained"
                        size="lg"
                        shape="circle"
                    >
                        Try a Demo
                    </DemoButton>
                    <HeroImg src={heroImg} alt="Projectify Kanban Board" />
                </HeroContent>
            </Container>
        </HeroBase>
    );
};
