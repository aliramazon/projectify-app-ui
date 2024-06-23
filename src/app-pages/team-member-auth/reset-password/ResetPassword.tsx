import { useState } from "react";
import styled from "styled-components";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button, Input } from "design-system";
import { AuthActionLink, AuthWrapper } from "app-pages/components";
import pageImg from "assets/images/auth-page.jpg";

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--space-20);
`;

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [searchParams] = useSearchParams();
    const passwordResetToken = searchParams.get("passwordResetToken");

    const navigate = useNavigate();

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const handleOnChangePasswordConfirm = (value: string) => {
        setPasswordConfirm(value);
    };

    const resetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <AuthWrapper imageUrl={pageImg} pageTitle="Reset Password" switchLayout>
            <Form onSubmit={resetPassword}>
                <Input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="password"
                    placeholder="New Password Confirmation"
                    value={passwordConfirm}
                    onChange={handleOnChangePasswordConfirm}
                    shape="rounded"
                    size="lg"
                />

                <Button color="primary" size="lg" shape="rounded">
                    Reset Password
                </Button>
            </Form>
            <AuthActionLink
                hintText="Get Instructions"
                linkText="Forget password"
                linkTo="../team-member/forget-password"
            />
        </AuthWrapper>
    );
};

export { ResetPassword as TeamMemberResetPassword };
