import React, { useContext } from "react";
import "./Testimonial.scss";
import TestimonialCard from "../../components/testimonialCard/TestimonialCard";
import { testimonialSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Testimonial() {
  const { isDark } = useContext(StyleContext);

  if (!testimonialSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={`testimonial-container ${isDark ? "dark-mode" : ""}`} id="testimonials">
        <div className="testimonial-header">
          <h1 className={isDark ? "dark-mode testimonial-heading" : "testimonial-heading"}>
            {testimonialSection.title}
          </h1>
          <p className={isDark ? "dark-mode testimonial-subtitle" : "testimonial-subtitle"}>
            {testimonialSection.subtitle}
          </p>
        </div>
        <div className="testimonial-cards">
          {testimonialSection.testimonialCards.map((card, i) => {
            return (
                <TestimonialCard
                key={i}
                isDark={isDark}
                cardInfo={{
                  title: card.title,
                  description: card.description,      // ✅ map subtitle -> description
                  image: card.image,
                  imageAlt: card.imageAlt || "Testimonial Image",
                  footer: card.footer
                }}
              />
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
