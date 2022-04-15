import React from "react";
import "./CoursesOffered.css";
import SectionHeading from "../Specific Elements/SectionHeading/SectionHeading";
import CourseCard from "../Specific Elements/CourseCard/CourseCard";

function CoursesOffered() {
  return (
    <section className="coffered">
      <SectionHeading heading={"Courses Offered"} />
      <div className="coffered-container container">
        <CourseCard
          imageLink={"https://i.postimg.cc/9FF29xjy/2.png"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis magnam labore harum aliquid dolorem veniam dolor maiores eos, ullam neque dolore assumenda perspiciatis provident, nemo velit eum dolorum architecto."
          }
          author={"Hrishabh Jain"}
          price={"999"}
          timing={"3 Months"}
        />
        <CourseCard
          imageLink={"https://i.postimg.cc/9FF29xjy/2.png"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis magnam labore harum aliquid dolorem veniam dolor maiores eos, ullam neque dolore assumenda perspiciatis provident, nemo velit eum dolorum architecto."
          }
          author={"Hrishabh Jain"}
          price={"999"}
          timing={"3 Months"}
        />{" "}
        <CourseCard
          imageLink={"https://i.postimg.cc/9FF29xjy/2.png"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis magnam labore harum aliquid dolorem veniam dolor maiores eos, ullam neque dolore assumenda perspiciatis provident, nemo velit eum dolorum architecto."
          }
          author={"Hrishabh Jain"}
          price={"999"}
          timing={"3 Months"}
        />
        <CourseCard
          imageLink={"https://i.postimg.cc/9FF29xjy/2.png"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis magnam labore harum aliquid dolorem veniam dolor maiores eos, ullam neque dolore assumenda perspiciatis provident, nemo velit eum dolorum architecto."
          }
          author={"Hrishabh Jain"}
          price={"999"}
          timing={"3 Months"}
        />
        <CourseCard
          imageLink={"https://i.postimg.cc/9FF29xjy/2.png"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis magnam labore harum aliquid dolorem veniam dolor maiores eos, ullam neque dolore assumenda perspiciatis provident, nemo velit eum dolorum architecto."
          }
          author={"Hrishabh Jain"}
          price={"999"}
          timing={"3 Months"}
        />{" "}
        <CourseCard
          imageLink={"https://i.postimg.cc/9FF29xjy/2.png"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis magnam labore harum aliquid dolorem veniam dolor maiores eos, ullam neque dolore assumenda perspiciatis provident, nemo velit eum dolorum architecto."
          }
          author={"Hrishabh Jain"}
          price={"999"}
          timing={"3 Months"}
        />
      </div>
    </section>
  );
}

export default CoursesOffered;
