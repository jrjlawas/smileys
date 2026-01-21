import { useState } from "react";
import AccordionItem from "./accordionItem";

function Accordion() {
  const [activeAccrodion, setActiveAccrodion] = useState(
    "What type of food does Smiley’s Restaurant & Lounge serve?"
  );
  return (
    <div className="faq-main">
      <div className="accordion" id="accordionExample">
        <AccordionItem
          title="What type of food does Smiley’s Restaurant & Lounge serve?"
          summery="We offer a variety of comfort food favorites, best known for our gourmet pizzas and signature Texas-style fried chicken, along with other classic menu items."
          isActive={activeAccrodion}
          setActive={setActiveAccrodion}
        />
        <AccordionItem
          title="Is Smiley’s Restaurant & Lounge family-friendly?"
          summery="Yes. Smiley’s is a welcoming place for families, friends, and guests of all ages."
          isActive={activeAccrodion}
          setActive={setActiveAccrodion}
        />
        <AccordionItem
          title="Do you offer vegetarian options?"
          summery="Yes, we offer vegetarian-friendly menu options. Availability may vary, so feel free to ask our staff for recommendations."
          isActive={activeAccrodion}
          setActive={setActiveAccrodion}
        />
        <AccordionItem
          title="Is Smiley’s Restaurant & Lounge locally owned?"
          summery="Yes. Smiley’s is a locally owned restaurant and has been part of the Strathmore community for many years."
          isActive={activeAccrodion}
          setActive={setActiveAccrodion}
        />
      </div>
    </div>
  );
}

export default Accordion;
