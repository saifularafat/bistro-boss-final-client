import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Call from "../CallSection/Call";
import CategorySwiper from "../Category/CategorySwiper";
import ChefReCommends from "../ChefReCommends/ChefReCommends";
import FeatureItems from "../FeaturedItems/FeatureItems";
import PopularMenu from "../PopularMenu/PopularMenu";
import ServiceBg from "../Service/ServiceBg";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Home
                </title>
            </Helmet>
            <Banner />
            <div className="md:max-w-6xl mx-auto">
                <CategorySwiper />
                <ServiceBg />
                <PopularMenu />
                <Call />
                <ChefReCommends />
            </div>
            <FeatureItems />
            <div className="md:max-w-6xl mx-auto">
                <Testimonials />
            </div>
        </div>
    );
};

export default Home;