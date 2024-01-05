import { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "../../../design-system";
import { AuthWrapper } from "../../components";
import manhattanStreet from "../../../assets/images/manhattan-street.jpg";

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--space-20);
`;

const ForgetPassword = () => {
    const [email, setEmail] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const getInstructions = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <AuthWrapper
            imageUrl={manhattanStreet}
            pageTitle="Forget Password"
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

                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    className="forget-password__submit-button"
                >
                    Get Instructions
                </Button>
            </Form>
        </AuthWrapper>
    );
};

export { ForgetPassword as AdminForgetPassword };
