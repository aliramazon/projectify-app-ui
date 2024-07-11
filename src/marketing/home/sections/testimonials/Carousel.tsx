import styled, { css } from "styled-components";
import { Icon, IconButton, Typography } from "design-system";
import { data, shiftTestimonialsLeft, shiftTestimonialsRight } from "./data";
import { useState } from "react";

const CarouselBase = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: max-content 1fr max-content;
    column-gap: var(--space-32);
`;

const Avatar = styled.img<{ $isActive: boolean }>`
    height: 10rem;
    width: 10rem;
    object-fit: cover;
    opacity: 0.5;
    border-radius: 50%;

    ${(props) =>
        props.$isActive &&
        css`
            height: 17rem;
            width: 17rem;
            opacity: 1;
        `}
`;

const Avatars = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-48);
    margin-bottom: var(--space-20);
`;

const CarouselContent = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .userName {
        margin-bottom: var(--space-4);
    }

    .userPosition {
        margin-bottom: var(--space-32);
    }
`;

const Stars = styled.div`
    display: flex;
    gap: var(--space-16);
    margin-bottom: var(--space-32);

    svg {
        fill: var(--sunglow-400);
    }
`;

export const Carousel = () => {
    const [testiomonials, setTestimonials] = useState(data);

    const showPrevTestimonial = () => {
        setTestimonials((prevState) => {
            return shiftTestimonialsLeft(prevState);
        });
    };

    const showNextTestimonial = () => {
        setTestimonials((prevState) => {
            return shiftTestimonialsRight(prevState);
        });
    };
    return (
        <CarouselBase>
            <IconButton
                iconName="arrow-left"
                color="primary"
                variant="outlined"
                shape="rounded"
                size="xlg"
                onClick={showPrevTestimonial}
            />
            <CarouselContent>
                <Avatars>
                    {testiomonials.map((user, idx) => {
                        return (
                            <Avatar
                                src={user.img}
                                alt={user.position}
                                $isActive={idx === 1}
                            />
                        );
                    })}
                </Avatars>
                <Typography variant="h6" align="center" className="userName">
                    {testiomonials[1].name}
                </Typography>
                <Typography
                    variant="subtitle-lg"
                    align="center"
                    weight="medium"
                    className="userPosition"
                >
                    {testiomonials[1].position}
                </Typography>
                <Stars>
                    <Icon iconName="star-filled" />
                    <Icon iconName="star-filled" />
                    <Icon iconName="star-filled" />
                    <Icon iconName="star-filled" />
                    <Icon iconName="star-filled" />
                </Stars>
                <Typography
                    variant="paragraph-md"
                    weight="normal"
                    align="center"
                    color="neutral-strong"
                >
                    {testiomonials[1].testimonial}
                </Typography>
            </CarouselContent>
            <IconButton
                iconName="arrow-right"
                color="primary"
                shape="rounded"
                size="xlg"
                onClick={showNextTestimonial}
            />
        </CarouselBase>
    );
};
