import { useState } from "react";
import styled from "styled-components";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button, Input } from "../../../design-system";
import { AuthWrapper } from "../../components";
import brooklynBridge from "../../../assets/images/brooklyn-bridge.jpg";
import { teamMemberService } from "../../../api";
import toast from "react-hot-toast";

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--space-20);
`;

const CreatePassword = () => {
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [email, setEmail] = useState("");
    const [searchParams] = useSearchParams();

    const navigate = useNavigate();

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePasswordConfirm = (value: string) => {
        setPasswordConfirm(value);
    };

    const createPassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const inviteToken = searchParams.get("inviteToken");

        teamMemberService
            .createPassword(
                { email, password, passwordConfirm },
                inviteToken as string
            )
            .then((data) => {
                toast.success("Great. Now you can sign in!");
                navigate("/team-member/sign-in");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <AuthWrapper
            imageUrl={brooklynBridge}
            pageTitle="Create Password"
            switchLayout
        >
            <Form onSubmit={createPassword}>
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="password"
                    placeholder="Password Confirmation"
                    value={passwordConfirm}
                    onChange={handleOnChangePasswordConfirm}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                />

                <Button color="primary" size="lg" shape="rounded">
                    Create Password
                </Button>
            </Form>
        </AuthWrapper>
    );
};

export { CreatePassword as TeamMemberCreatePassword };
