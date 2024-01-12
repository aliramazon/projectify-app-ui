import React, {
    useState,
    createContext,
    useContext,
    Dispatch,
    SetStateAction,
} from "react";
import { Link } from "react-router-dom";

type AppContextType = {
    counter: number;
    setCounter: Dispatch<SetStateAction<number>>;
};

export const AppContext = createContext<AppContextType>({
    counter: 0,
    setCounter: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [counter, setCounter] = useState(0);
    return (
        <AppContext.Provider value={{ counter, setCounter }}>
            {children}
        </AppContext.Provider>
    );
};

const App = () => {
    const { counter, setCounter } = useContext(AppContext);

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
