import { Link } from "react-router-dom";
import { Badge, Icon } from "./design-system";

const App = () => {
    return (
        <div style={{ padding: "200px" }}>
            <h1>Welcome </h1>

            <Link to="team-member/sign-in">Sign in</Link>
            <Link to="admin/sign-in">Sign in</Link>
            <Link to="admin/forget-password">Forget Password</Link>
            <Link to="admin/reset-password">Reset Password</Link>

            <div>
                <Badge label="Badge" color="gray" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="gray"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="gray"
                    icon={<Icon iconName="flag" />}
                />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="contained"
                    color="gray"
                    status
                />
            </div>
            <div>
                <Badge label="Badge" color="violet" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="violet"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="violet"
                    icon={<Icon iconName="flag" />}
                />
            </div>
            <div>
                <Badge label="Badge" color="orange" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="orange"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="orange"
                    icon={<Icon iconName="flag" />}
                />
            </div>
            <div>
                <Badge label="Badge" color="blue" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="blue"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="blue"
                    icon={<Icon iconName="flag" />}
                />
            </div>
            <div>
                <Badge label="Badge" color="red" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="red"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="red"
                    icon={<Icon iconName="flag" />}
                />
            </div>
            <div>
                <Badge label="Badge" color="purple" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="purple"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="purple"
                    icon={<Icon iconName="flag" />}
                />
            </div>
            <div>
                <Badge label="Badge" color="green" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="green"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="green"
                    icon={<Icon iconName="flag" />}
                />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="contained"
                    color="green"
                />
            </div>
        </div>
    );
};
export { App };
