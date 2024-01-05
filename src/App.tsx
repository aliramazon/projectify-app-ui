import { Link } from "react-router-dom";

const App = () => {
    return (
        <>
            <h1>You are at home </h1>
            <Link to="admin/sign-up">Sign up</Link>
            <Link to="admin/sign-in">Sign in</Link>
            <Link to="admin/forget-password">Forget Password</Link>
            <Link to="admin/reset-password">Reset Password</Link>
        </>
    );
};
export { App };
