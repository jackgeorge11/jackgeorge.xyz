import React from "react";

export default function Info({ disp }) {
  return (
    <div className="info">
      {disp && (
        <p className="warning fw-700">
          (if you're sensitive to flashing colors, please click the pallets to
          the right with caution.)
        </p>
      )}
    </div>
  );
}
