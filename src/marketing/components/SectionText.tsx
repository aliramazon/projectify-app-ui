import styled from "styled-components";
import { Typography } from "design-system";

const SectionHeadingBase = styled(Typography)`
    color: var(--jaguar-700);
`;

const SectionSubHeadingBase = styled(Typography)`
    color: var(--jaguar-500);
    margin-top: var(--space-12);
`;

export const SectionHeading = (props: { children: React.ReactNode }) => {
    return (
        <SectionHeadingBase
            variant="h5"
            weight="bold"
            align="center"
            className="sectionHeading"
        >
            {props.children}
        </SectionHeadingBase>
    );
};

export const SectionSubHeading = (props: { children: React.ReactNode }) => {
    return (
        <SectionSubHeadingBase
            variant="paragraphSM"
            weight="medium"
            align="center"
            className="sectionSubHeading"
        >
            {props.children}
        </SectionSubHeadingBase>
    );
};
