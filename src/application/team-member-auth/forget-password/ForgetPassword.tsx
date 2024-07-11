import { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "design-system";
import { AuthActionLink, AuthWrapper } from "application/components";
import pageImg from "application/assets/images/auth-page.jpg";

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--space-20);
`;

const ForgetPassword = () => {
    const [email, setEmail] = useState("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };
    const getInstructions = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <AuthWrapper
            imageUrl={pageImg}
            pageTitle="Forget Password ?"
            switchLayout
        >
            <Form onSubmit={getInstructions}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                />

                <Button color="primary" size="lg" shape="rounded">
                    Get Instructions
                </Button>
            </Form>
            <AuthActionLink
                linkText="Sign In"
                hintText="Remember your password?"
                linkTo="../team-member/sign-in"
            />
        </AuthWrapper>
    );
};

export { ForgetPassword as TeamMemberForgetPassword };
