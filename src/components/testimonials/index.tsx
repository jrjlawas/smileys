import TestimonialCard from "../cards/testimonialCard";
import customerImg1 from "../../assets/images/smiley/customers1.svg";
import customerImg2 from "../../assets/images/smiley/customers2.svg";
import customerImg3 from "../../assets/images/smiley/customers3.svg";

function Testimonials() {
  return (
    <section className="customer s-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="customer-head mb-48px">
              <h2>What’s Our Customer Say</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <TestimonialCard
            img={customerImg1}
            review={`"Their sign says “best breakfast in town” and I for one would highly agree!! Large portions and cooked exactly right. The service was excellent and they were extra helpful as we had an 14 month old with us. They also had a nice and very clean high chair which was nice. I am definitely going to be back to try their pizza next - I’ve been told it’s also very good."`}
            customerName="Michael H"
            customerProfession="Tripadvisor"
          />

          <TestimonialCard
            img={customerImg3}
            review={`"we have been going to Smileys for 20 years and love the Staff best food everThe pizzas are so good Burgers are the best.We have gone to other resteraunts but keep going back to smileys Breakfast ,so good and you get everything,"`}
            customerName="Esther K"
            customerProfession="Tripadvisor"
          />
          <TestimonialCard
            img={customerImg2}
            review={`"Quick tasty food with friendly, efficient servers. Gravy with fries and roast beef sandwich was the best! It’s always hit or miss with gravy but this place knocked it out of the park. Dessert was apple pie and had a hint of freezer burn, but flavour otherwise was good. Staff was out quick with the food and our water glasses and coffee were always kept topped up."`}
            customerName="Zaboo M"
            customerProfession="Tripadvisor"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
