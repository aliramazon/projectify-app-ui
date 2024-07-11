import { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import { Button, Input, Toaster } from "design-system";
import { adminService } from "api";
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

        try {
            const response = await adminService.forgetPassword(email);
            setEmail("");
            toast.success(response.message);
        } catch (e) {
            const error = e as Error;
            toast.error(error.message);
        }
    };

    return (
        <>
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

                    <Button
                        color="primary"
                        size="lg"
                        shape="rounded"
                        className="forget-password__submit-button"
                    >
                        Get Instructions
                    </Button>
                </Form>

                <AuthActionLink
                    linkText="Sign In"
                    hintText="Remember your password?"
                    linkTo="../admin/sign-in"
                />
            </AuthWrapper>
            <Toaster />
        </>
    );
};

export { ForgetPassword as AdminForgetPassword };
