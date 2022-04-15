import React from "react";
import "./CaricullumCard.css";

function CaricullumCard() {
  return (
    <div className="cc">
      <div className="cc-heading">
        <div className="cc-icon">
            <span><i class='bx bxs-video-recording' ></i></span>
        </div>
        <div className="cc-text">
            <span>Caricullum Name</span>
        </div>
      </div>
      <div className="cc-para">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          harum, in illo quod fugiat repellat minus deleniti ut laudantium
          quaerat odio libero expedita dicta doloremque earum iusto, assumenda
          ipsum maxime.
        </p>
      </div>
    </div>
  );
}
export default CaricullumCard;
