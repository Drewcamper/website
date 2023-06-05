import React, { useContext, useEffect, useRef, useState } from "react";
import AboutRight from "./AboutRight";
import TodoRight from "./projects/TodoRight";
import WeatherRight from "./projects/WeatherRight";
import CalculatorRight from "./projects/CalculatorRight";
import TicttRight from "./projects/TicttRight";

import ContactsRight from "./ContactsRight";
import { WebsiteContext } from "../../context/context";

function RightSide() {
  const { currentSection, setCurrentSection } = useContext(WebsiteContext);
  const [scrollThreshold, setScrollThreshold] = useState(0.7); // Percentage of section height scrolled to trigger section change

  const sectionsRef = useRef([]);
  const sectionIds = ["about", "projects", "projectTwo", "projectThree", "projectFour", "contacts"];
  const userScrollRef = useRef(false);
  const debounceTimeoutRef = useRef(null);

  const debounce = (func, delay) => {
    clearTimeout(debounceTimeoutRef.current);
    debounceTimeoutRef.current = setTimeout(func, delay);
  };
  useEffect(() => {
    const handleScroll = () => {
      debounce(() => {
        if (!userScrollRef.current) {
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;

          let visibleSectionId = "";

          for (let i = 0; i < sectionsRef.current.length; i++) {
            const sectionRef = sectionsRef.current[i];

            if (sectionRef) {
              const sectionHeight = sectionRef.offsetHeight;
              const sectionOffset = sectionRef.offsetTop;

              const sectionTop = sectionOffset - windowHeight * scrollThreshold;
              const sectionBottom =
                sectionOffset + sectionHeight - windowHeight * (1 - scrollThreshold);

              if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                visibleSectionId = sectionIds[i];
                break;
              }
            }
          }
          setCurrentSection(visibleSectionId);
        }
      }, 200); // Adjust the delay as per your preference
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(debounceTimeoutRef.current);
    };
  }, [scrollThreshold, window.scrollY]);

  useEffect(() => {
    const element = document.getElementById(currentSection);
    if (element) {
      userScrollRef.current = true;
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        userScrollRef.current = false;
      }, 1000); // Delay resetting the flag to allow smooth scrolling
    }
  }, [currentSection]);

  return (
    <div className="rightSide" id="grad1">
      <AboutRight ref={(ref) => (sectionsRef.current[0] = ref)} />
      <TodoRight ref={(ref) => (sectionsRef.current[1] = ref)} />
      <WeatherRight ref={(ref) => (sectionsRef.current[2] = ref)} />
      <CalculatorRight ref={(ref) => (sectionsRef.current[3] = ref)} />
      <TicttRight ref={(ref) => (sectionsRef.current[4] = ref)} />
      <ContactsRight ref={(ref) => (sectionsRef.current[5] = ref)} />
    </div>
  );
}

export default RightSide;
