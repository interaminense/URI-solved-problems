/**
 * Read three values (variables A, B and C), which are the three student's grades. Then, calculate
 * the average, considering that grade A has weight 2, grade B has weight 3 and the grade C has
 * eight 5. Consider that each grade can go from 0 to 10.0, always with one decimal place.
 *
 * INPUT
 *
 * The input file contains 3 values of floating points with one digit after the decimal point.
 * @param {number} a
 * @param {number} b
 * @param {number} c
 *
 * OUTPUT
 *
 * Print AVERAGE according to the following example
 */

const tmpl = result => `AVERAGE = ${result}`;

const average = (a, b, c) => tmpl((a * 2 + b * 3 + c * 5) / (2 + 3 + 5));

export { average, tmpl };
