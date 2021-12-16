import { calculateStepTax } from "./calculator";

describe("CalculatorComponent", () => {
  /**
   * @description
   *                Inntekt mellom 0 - 174 000 kroner         |   Ingen trinnskatt
   * Trinn 1    |   Inntekt mellom 174 000 - 245 650 kroner   |   1,9 % trinnskatt
   * Trinn 2    |   Inntekt mellom 245 650 - 617 500 kroner   |   4,2 % trinnskatt
   * Trinn 3    |   Inntekt mellom 617 500 - 964 800 kroner   |   13,2 % trinnskatt *
   * Trinn 4    |   Inntekt over 964 800 kroner               |   16,2 % trinnskatt
   *
   * *bosatte i Finnmark og Nord-Troms 11,2 %
   *
   *    --- TEST CASES ---
   *
   *          |   Salary            |   Tax
   * Test 1   |   100 000 kroner    |   0 kr
   * Test 2   |   200 000 kroner    |   494 kr
   * Test 3   |   300 000 kroner    |   3644 kr
   * Test 4   |   700 000 kroner    |   27 869 kroner
   * Test 5   |   1 100 000 kroner  |   84 725 kroner
   * Test 6   |   1 100 000 kroner  |   77 779 kroner (bosatte i Finnmark og Nord-Troms)
   *
   */

  it("calculateStepTax should return 0 when salary is 100 000 kroner", () => {
    expect(calculateStepTax(100000)).toBe(0);
  });

  //it("calculateStepTax should return 494 when salary is 200 000 kroner", () => {
  //  expect(calculateStepTax(200000)).toBe(494);
  //});

  //it("calculateStepTax should return 3644 when salary is 300 000 kroner", () => {
  //  expect(calculateStepTax(300000)).toBe(3644);
  //});

  //it("calculateStepTax should return 27 869 when salary is 700 000 kroner", () => {
  //  expect(calculateStepTax(700000)).toBe(27869);
  //});

  //it("calculateStepTax should return 84 725 when salary is 1 100 000 kroner", () => {
  //  expect(calculateStepTax(1100000)).toBe(84725);
  //});

  // it('calculateStepTax should return 77 779 when salary is 1 100 000 kroner', () => {
  //   expect(calculateStepTax(1100000, true)).toBe(77779);
  // });
});
