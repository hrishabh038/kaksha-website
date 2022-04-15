import React from "react";
import "./Caricullum.css";
import SectionHeading from "../Specific Elements/SectionHeading/SectionHeading";
import CaricullumCard from "./CaricullumCard/CaricullumCard";

function Caricullum(){
    return(
        <section className="caricullum">
        <SectionHeading heading={"Caricullum"} />
        <div className="caricullum-content container">
        <CaricullumCard />
        <CaricullumCard />
        <CaricullumCard />
        <CaricullumCard />
        <CaricullumCard />
        <CaricullumCard />
        </div>
        </section>
    )
}
export default Caricullum