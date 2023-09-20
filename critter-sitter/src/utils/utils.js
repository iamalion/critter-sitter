import React from "react";

function generateYears() {
    const currentYear = new Date().getFullYear();
    const years: JSX.Element[] = [];
    for (let year = 1993; year <= currentYear; year++) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return years;
  }

  export { generateYears };