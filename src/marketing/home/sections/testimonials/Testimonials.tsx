import styled from "styled-components";
import { SectionBase, SectionHeading, Container } from "marketing/components";
import { Carousel } from "./Carousel";

const TestimonialsBase = styled(SectionBase)`
    .sectionHeading {
        margin-bottom: var(--space-48);
    }
`;

export const Testimonials = () => {
    return (
        <TestimonialsBase>
            <Container>
                <SectionHeading>Trust our clients</SectionHeading>
                <Carousel />
            </Container>
        </TestimonialsBase>
    );
};
