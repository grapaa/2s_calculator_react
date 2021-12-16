import React, { useState } from "react";
/**
 * @description
 * TRINNSKATT 2019
 *
 * Trinnskatten for personlige skattytere beregnes i
 * den enkeltes persons lønnsinntekt og tilsvarende
 * inntekter som erstatter lønnsinntekt, f.eks. sykepenger,
 * arbeidsavklaringspenger, uføretrygd og pensjon.
 * Trinnskatten består av fire trinn. For de første
 * 174 000 kroner av personinntekten din skal du ikke betale trinnskatt.
 *
 *                Inntekt mellom 0 - 174 000 kroner         |   Ingen trinnskatt
 * Trinn 1    |   Inntekt mellom 174 000 - 245 650 kroner   |   1,9 % trinnskatt
 * Trinn 2    |   Inntekt mellom 245 650 - 617 500 kroner   |   4,2 % trinnskatt
 * Trinn 3    |   Inntekt mellom 617 500 - 964 800 kroner   |   13,2 % trinnskatt *
 * Trinn 4    |   Inntekt over 964 800 kroner               |   16,2 % trinnskatt
 *
 * *bosatte i Finnmark og Nord-Troms 11,2 %
 *
 */
import "./styles.css";
const taxSteps = [
  { pct: 1.9, min: 174000, max: 245650 },
  { pct: 4.2, min: 245650, max: 617500 },
  { pct: 13.2, min: 617500, max: 964800 },
  { pct: 16.2, min: 964800, max: Number.MAX_SAFE_INTEGER }
];

export function calculateStepTax(salary) {
  let totalStepTax = 0;

  taxSteps.forEach((step, index) => {
    if (salary >= step.min) {
      const stepMax = salary <= step.max ? salary : step.max;
      const stepTax = (stepMax - step.min) * (step.pct / 100);
      console.log(index, stepTax);
      totalStepTax += Math.round(stepTax);
    }
  });

  return totalStepTax;
}

export function Calculator() {
  const [tax, setTax] = useState("ikke beregnet");
  const [salaryFormatted, setSalary] = useState(0);

  const handleChange = (event) => {
    setSalary(Number(event.target.value).toLocaleString());
    const calculatedTax = calculateStepTax(event.target.value);

    setTax(calculatedTax);
  };

  return (
    <div>
      <h3>Skriv inn din inntekt</h3>
      <br />
      <input type="number" onChange={handleChange} />
      <br />
      <br />
      <p>Trinnskatt for inntekt {salaryFormatted}</p>
      <br />
      <h3>Din trinnskatt er: {tax}</h3>
    </div>
  );
}

export default Calculator;
