/**
 * @author Adriano Interaminense <adriano.interaminense@gmail.com>
 *
 * The formula to calculate the area of a circumference is defined as
 * A = π . R2. Considering to this problem that π = 3.14159:
 *
 * Calculate the area using the formula given in the problem description.
 *
 * INPUT
 *
 * The input contains a value of floating point (double precision), that is the
 * variable R.
 * @param {number} R
 *
 * OUTPUT
 *
 * Present the message "A = " followed by the value of the variable, as in the
 * example bellow, with four places after the decimal point.
 */

const tmpl = result => `A = ${result}`;

const areaOfCircle = (R) => {
  const PI = 3.14159;
  const A = PI * R ** 2;

  return tmpl(A.toFixed(4));
};

export { areaOfCircle, tmpl };
