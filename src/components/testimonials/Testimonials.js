import React, { useState } from "react";
import "./Testimonials.css";
import user1 from "../../assets/img/user-1.jpg";
import user2 from "../../assets/img/user-2.jpg";
import user3 from "../../assets/img/user-3.jpg";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Update this value based on the total number of slides

  const goToPrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlides - 1); // Go to the last slide
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentSlide === totalSlides - 1) {
      setCurrentSlide(0); // Go back to the first slide
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <section className="section" id="section--3">
      <div className="slider">
        <div className={`slide ${currentSlide === 0 ? "active" : ""}`}>
          <div className="testimonial">
            <h5 className="testimonial__header">
              Best financial decision ever!
            </h5>
            <blockquote className="testimonial__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium quas quisquam non? Quas voluptate nulla minima
              deleniti optio ullam nesciunt, numquam corporis et asperiores
              laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus
              id alias reiciendis, perferendis facere pariatur dolore veniam
              autem esse non voluptatem saepe provident nihil molestiae.
            </blockquote>
            <address className="testimonial__author">
              <img src={user1} alt="" className="testimonial__photo" />
              <h6 className="testimonial__name">Aarav Lynn</h6>
              <p className="testimonial__location">San Francisco, USA</p>
            </address>
          </div>
        </div>

        <div className={`slide ${currentSlide === 1 ? "active" : ""}`}>
          <div className="testimonial">
            <h5 className="testimonial__header">
              The last step to becoming a complete minimalist
            </h5>
            <blockquote className="testimonial__text">
              Quisquam itaque deserunt ullam, quia ea repellendus provident,
              ducimus neque ipsam modi voluptatibus doloremque, corrupti
              laborum. Incidunt numquam perferendis veritatis neque repellendus.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              deserunt exercitationem deleniti.
            </blockquote>
            <address className="testimonial__author">
              <img src={user2} alt="" className="testimonial__photo" />
              <h6 className="testimonial__name">Miyah Miles</h6>
              <p className="testimonial__location">London, UK</p>
            </address>
          </div>
        </div>

        <div className={`slide ${currentSlide === 2 ? "active" : ""}`}>
          <div className="testimonial">
            <h5 className="testimonial__header">
              Finally free from old-school banks
            </h5>
            <blockquote className="testimonial__text">
              Debitis, nihil sit minus suscipit magni aperiam vel tenetur
              incidunt commodi architecto numquam omnis nulla autem,
              necessitatibus blanditiis modi similique quidem. Odio aliquam
              culpa dicta beatae quod maiores ipsa minus consequatur error sunt,
              deleniti saepe aliquid quos inventore sequi. Necessitatibus id
              alias reiciendis, perferendis facere.
            </blockquote>
            <address className="testimonial__author">
              <img src={user3} alt="" className="testimonial__photo" />
              <h6 className="testimonial__name">Francisco Gomes</h6>
              <p className="testimonial__location">Lisbon, Portugal</p>
            </address>
          </div>
        </div>

        {/* Left button */}
        <button
          className="slider__btn slider__btn--left"
          onClick={goToPrevSlide}
        >
          &larr;
        </button>
        {/* Right button */}
        <button
          className="slider__btn slider__btn--right"
          onClick={goToNextSlide}
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
