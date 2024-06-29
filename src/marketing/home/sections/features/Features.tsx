import styled from "styled-components";
import { Typography } from "design-system";

import { Container, Card } from "marketing/components";
import { data } from "./data";

const FeaturesBase = styled.section`
    background-color: var(--white);
    padding: var(--space-96) var(--space-32);

    .sectionSubText {
        color: var(--jaguar-500);
        margin-bottom: var(--space-48);
    }
`;

const FeatureCards = styled.div`
    display: flex;
    gap: var(--space-32);
    flex-wrap: wrap;

    .featureCard {
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: calc((100% - var(--space-64)) / 3);
    }
`;

export const Features = () => {
    return (
        <FeaturesBase>
            <Container>
                <Typography variant="h5" weight="bold" align="center">
                    Get the best for your team
                </Typography>
                <Typography
                    variant="paragraphSM"
                    weight="medium"
                    align="center"
                    className="sectionSubText"
                >
                    Our solution provides simple yet effective project
                    management.
                </Typography>
                <FeatureCards>
                    {data.map((item) => {
                        return (
                            <Card
                                iconName={item.iconName}
                                color={item.color}
                                title={item.data.title}
                                text={item.data.text}
                                className="featureCard"
                            />
                        );
                    })}
                </FeatureCards>
            </Container>
        </FeaturesBase>
    );
};
