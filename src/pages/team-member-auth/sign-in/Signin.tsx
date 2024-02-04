import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Input } from "../../../design-system";
import { AuthActionLink, AuthWrapper } from "../../components";
import styled from "styled-components";
import { useLocalStorage, useStore } from "../../../hooks";

import brooklynBridge from "../../../assets/images/brooklyn-bridge.jpg";
import { teamMemberService } from "../../../api";
import toast from "react-hot-toast";

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--space-20);
`;

const ActionLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
`;

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    const { setItem, getItem } = useLocalStorage();

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const saveAuthToken = (token: string) => {
        setItem("authToken", token);
    };

    const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);
            const { token } = await teamMemberService.signIn({
                email,
                password,
            });

            saveAuthToken(token);
            navigate("/team-member/platform");

            setIsFormSubmitting(false);
            setEmail("");
            setPassword("");
        } catch (e) {
            const error = e as Error;
            setIsFormSubmitting(false);
            toast.error(error.message);
        }
    };

    return (
        <AuthWrapper imageUrl={brooklynBridge} pageTitle="Sign In">
            <Form onSubmit={signIn}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                />
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    disabled={isFormSubmitting}
                >
                    Sign In
                </Button>
            </Form>
            <ActionLinks>
                <AuthActionLink
                    hintText="Forgot password? "
                    linkTo="../team-member/forget-password"
                    linkText="Get Help"
                />
            </ActionLinks>
        </AuthWrapper>
    );
};

export { Signin as TeamMemberSignin };
