import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "./hooks";

const App = () => {
    const { counter, setCounter } = useStore();
    return (
        <div style={{ padding: "200px" }}>
            <h1>Welcome </h1>
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
            <Link to="team-member/sign-in">Sign in</Link>
            <Link to="admin/sign-in">Sign in</Link>
            <Link to="admin/forget-password">Forget Password</Link>
            <Link to="admin/reset-password">Reset Password</Link>
        </div>
    );
};
export { App };
