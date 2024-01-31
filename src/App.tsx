import { Link } from "react-router-dom";
import { DatePicker } from "./design-system";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const App = () => {
    const [date, setDate] = useState<Date>();
    return (
        <div style={{ padding: "200px" }}>
            <h1>Welcome </h1>

            <Link to="team-member/sign-in">Sign in</Link>
            <Link to="admin/sign-in">Sign in</Link>
            <Link to="admin/forget-password">Forget Password</Link>
            <Link to="admin/reset-password">Reset Password</Link>
            <div>
                <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                    placeholder="Select Deadline"
                />
            </div>
        </div>
    );
};

export { App };
