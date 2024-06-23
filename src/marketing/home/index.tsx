import { TopNavigation } from "./sections/navigation/TopNavigation";
import { Hero } from "./sections/hero/Hero";
import { Clients } from "./sections/clients/Clients";

export const Home = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Clients />
        </>
    );
};
