import { TopNavigation } from "./sections/navigation/TopNavigation";
import { Hero } from "./sections/hero/Hero";
import { Clients } from "./sections/clients/Clients";
import { Features } from "./sections/features/Features";

export const Home = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Clients />
            <Features />
        </>
    );
};
