import { useState } from "react";
import { Button, Input } from "../../../design-system";
import { AuthWrapper } from "../../components";
import manhattanStreet from "../../../assets/images/manhattan-street.jpg";
import "./ForgetPassword.css";

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
        <AuthWrapper imageUrl={manhattanStreet} pageTitle="Forget Password">
            <form className="forget-password" onSubmit={getInstructions}>
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
            </form>
        </AuthWrapper>
    );
};

export { ForgetPassword };
