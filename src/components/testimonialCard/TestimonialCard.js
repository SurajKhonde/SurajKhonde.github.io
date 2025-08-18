import React from "react";
import "./TestimonialCard.scss";


export default function TestimonialCard({ cardInfo, isDark }) {
  // Open URL in a new tab (like LinkedIn or personal page)
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode testimonial-card" : "testimonial-card"}>
      <div className="testimonial-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Testimonial Thumbnail"}
          className="testimonial-image"
        />
      </div>
      <div className="testimonial-detail-div">
        <h5 className={isDark ? "dark-mode testimonial-title" : "testimonial-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode testimonial-description" : "testimonial-description"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="testimonial-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={isDark ? "dark-mode testimonial-tag" : "testimonial-tag"}
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
