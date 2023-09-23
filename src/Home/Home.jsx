import Banner from "../Components/Banner/Banner";
import CategoryList from "../Components/CategoryList/CategoryList";
import FeaturedJobs from "../Components/FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div className="pt-1">
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;

