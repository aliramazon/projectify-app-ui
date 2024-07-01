import styled from "styled-components";
import { Switch } from "design-system";
import {
    Container,
    SectionBase,
    SectionHeading,
    SectionSubHeading,
} from "marketing/components";
import { useState } from "react";

const PricingBase = styled(SectionBase)`
    background-color: var(--jaguar-25);

    .sectionHeading span {
        color: var(--violet-500);
    }

    .sectionSubHeading {
        margin-bottom: var(--space-28);
    }
`;

const subscriptionPlans = {
    monthly: false,
    yearly: true,
};

export const Pricing = () => {
    const [subscription, setSubscription] = useState<"monthly" | "yearly">(
        "monthly"
    );

    const handlePlanChange = (value: boolean) => {
        if (value) {
            setSubscription("yearly");
            return;
        }
        setSubscription("monthly");
    };

    return (
        <PricingBase>
            <Container>
                <SectionHeading>
                    Find the
                    <span> Right Plan </span>
                </SectionHeading>
                <SectionSubHeading>
                    Flexible pricing options for startups and big teams
                </SectionSubHeading>
                <Switch
                    checked={subscriptionPlans[subscription]}
                    id="subscription"
                    onSwitch={handlePlanChange}
                    shape="circle"
                />
            </Container>
        </PricingBase>
    );
};
