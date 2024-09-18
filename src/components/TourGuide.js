import React from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css"; // Import Driver.js styles

// Custom CSS for popovers
import "./customStyles.css"; // Make sure to create this file

const TourGuide = () => {
  const startTour = () => {
    const driverObj = driver({
      showProgress: true,
      popoverClass: "my-custom-popover", // Custom class for styling
      steps: [
        {
          element: ".page-header",
          popover: {
            title: "Page Header",
            description: "This is the page header.",
          },
        },
        {
          element: ".top-nav",
          popover: {
            title: "Top Navigation",
            description: "This is the top navigation bar.",
          },
        },
        {
          element: ".sidebar",
          popover: { title: "Sidebar", description: "This is the sidebar." },
        },
        {
          element: ".footer",
          popover: { title: "Footer", description: "This is the footer." },
        },
      ],
    });

    driverObj.drive();
  };

  return (
    <button onClick={startTour} className="tour-button">
      Start Tour
    </button>
  );
};

export default TourGuide;
