import Header from "../components/header";
import HeroV2 from "../components/heros/heroV2";
import CategoriesV2 from "../components/categories/categoriesV2";
import FeaturedFood from "../components/featuredFood";
import PromotionsV2 from "../components/promotions/promotionsV2";
import ProcessV2 from "../components/Process/processV2";
import FoodGrid from "../components/foodGrid";
import Faq from "../components/faq";
import Testimonials from "../components/testimonials";
import Blogs from "../components/blog";
import Footer from "../components/footer";
import AppPart from "../components/app-part";

function HomeTwo() {
  return (
    <div>
      <Header />
      <main>
        <HeroV2 />
        <CategoriesV2 />
        <FeaturedFood />
        <PromotionsV2 />
        <ProcessV2 />
        <FoodGrid />
        <Faq />
        <Testimonials />
        <Blogs />
        <AppPart />
      </main>
      <Footer />
    </div>
  );
}

export default HomeTwo;
