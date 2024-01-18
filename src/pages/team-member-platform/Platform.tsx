import { Outlet } from "react-router-dom";
import { SideBar, SideBarLinks } from "../../design-system";
import { AppContent, AppLayout, SideBarUser } from "../components";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks";
import user from "../../assets/images/user.jpg";

const links = [
    {
        title: "Menu",
        links: [
            {
                linkText: "Stories",
                linkTo: "stories",
                iconName: "stories",
            },
            {
                linkText: "Personal Tasks",
                linkTo: "personal-tasks",
                iconName: "tasks",
            },
        ],
    },
];

const Platform = () => {
    const navigate = useNavigate();
    const { removeItem } = useLocalStorage();

    const logOut = () => {
        navigate("admin/sign-in");
    };

    return (
        <AppLayout>
            <SideBar>
                <SideBarUser
                    details={{
                        firstName: "Asil",
                        lastName: "Bek",
                        imageUrl: user,
                        email: "asilbek@gmail.com",
                    }}
                />
                <SideBarLinks links={links} logOut={logOut} />
            </SideBar>
            <AppContent>
                <Outlet />
            </AppContent>
        </AppLayout>
    );
};

export { Platform as TeamMemberPlatform };
