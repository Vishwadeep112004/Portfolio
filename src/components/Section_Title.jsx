import React from "react";

function Section_Title({ title }) {
  const firstLetter = title.charAt(0);
  const rest = title.slice(1);

  return (
    <div className="section-title">
      <span className="title-first">{firstLetter}</span>
      <span className="title-rest">{rest}</span>
    </div>
  );
}

export default Section_Title;
