import { Link } from "react-router-dom";

import { useState } from "react";
import { Select } from "./design-system/Select";

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
                <Select
                    options={[
                        { label: "Option1", value: "option1" },
                        { label: "Option2", value: "option2" },
                        { label: "Option3", value: "option3" },
                        { label: "Option4", value: "option4" },
                        { label: "Option5", value: "option5" },
                        { label: "Option6", value: "option6" },
                    ]}
                    value="option2"
                    headerPlaceholder="Select Option"
                    onSelect={(value) => {}}
                    size="md"
                    shape="rounded"
                />
            </div>
        </div>
    );
};

export { App };
