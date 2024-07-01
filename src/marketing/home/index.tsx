import { TopNavigation } from "./sections/navigation/TopNavigation";
import { Hero } from "./sections/hero/Hero";
import { Clients } from "./sections/clients/Clients";
import { Features } from "./sections/features/Features";
import { Pricing } from "./sections/pricing/Pricing";

export const Home = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Clients />
            <Features />
            <Pricing />
        </>
    );
};
