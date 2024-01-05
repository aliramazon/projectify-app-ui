import { useState } from "react";
import { Button, Input } from "../../../design-system";
import { AuthWrapper } from "../../components";
import styled from "styled-components";

import brooklynBridge from "../../../assets/images/brooklyn-bridge.jpg";

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--space-20);
`;

const Signin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const signin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(password, email);
    };

    return (
        <AuthWrapper imageUrl={brooklynBridge} pageTitle="Sign In">
            <Form>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                />
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    className="sign-in__submit-button"
                >
                    Sign In
                </Button>
            </Form>
        </AuthWrapper>
    );
};

export { Signin as AdminSignin };
