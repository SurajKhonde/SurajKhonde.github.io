import React from "react";
import "./Button.scss";

export default function Button({ text, className, href, newTab, download, onClick }) {
  if (href) {
    return (
      <div className={className}>
        <a
          className="main-button"
          href={href}
          {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...(download ? { download } : {})}
        >
          {text}
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      <button className="main-button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
