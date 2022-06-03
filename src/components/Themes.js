import React from "react";

export default function Themes({ themes, color, colorList }) {
  return (
    <div className="themes">
      {colorList.map((c) => (
        <div
          className={themes[c] ? `theme ${c} is--active` : `theme ${c}`}
          onClick={() => color(c)}
        >
          <div className="half"></div>
          <div className="half second"></div>
        </div>
      ))}
    </div>
  );
}
