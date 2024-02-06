import { Link } from "react-router-dom";

import { useState } from "react";

import { Checkbox, Switch } from "./design-system";

const App = () => {
    const [value, setValue] = useState(false);
    return (
        <div style={{ padding: "50px" }}>
            <h1>Welcome </h1>

            <Link to="team-member/sign-in">Sign in</Link>
            <Link to="admin/sign-in">Sign in</Link>
            <Link to="admin/forget-password">Forget Password</Link>
            <Link to="admin/reset-password">Reset Password</Link>
            <div>
                <Checkbox
                    label="Hello world"
                    id="checkbox"
                    checked={value}
                    onChange={(value) => setValue(value)}
                    shape="rounded"
                />

                <Switch
                    checked={value}
                    onSwitch={(value) => setValue(value)}
                    shape="circle"
                    id="switch"
                    position="end"
                />
            </div>
        </div>
    );
};

export { App };
