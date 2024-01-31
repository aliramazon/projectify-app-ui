import { Link } from "react-router-dom";
import { DatePickerV1 } from "./design-system";

import { useState } from "react";

const App = () => {
    const [date, setDate] = useState<Date>();
    return (
        <div style={{ padding: "50px" }}>
            <h1>Welcome </h1>

            <Link to="team-member/sign-in">Sign in</Link>
            <Link to="admin/sign-in">Sign in</Link>
            <Link to="admin/forget-password">Forget Password</Link>
            <Link to="admin/reset-password">Reset Password</Link>
            <div>
                <DatePickerV1
                    selected={date}
                    onChange={(date) => setDate(date)}
                    placeholder="Select Deadline"
                    shape="circle"
                    inputSize="lg"
                />
            </div>
        </div>
    );
};

export { App };
