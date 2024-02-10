import { Link } from "react-router-dom";

import { useState } from "react";

import { Badge, Checkbox, LinearProgress, Switch } from "./design-system";
import { TableBodyCell } from "./design-system/Table";

const App = () => {
    const [value, setValue] = useState(false);
    return (
        <div style={{ padding: "50px" }}>
            <h1>Welcome </h1>

            <Link to="team-member/sign-in">Team member Sign in</Link>
            <Link to="admin/sign-in">Sign in</Link>
            <Link to="admin/forget-password">Forget Password</Link>
            <Link to="admin/reset-password">Reset Password</Link>

            <div>
                <TableBodyCell align="center">Hello</TableBodyCell>
            </div>
        </div>
    );
};

export { App };
