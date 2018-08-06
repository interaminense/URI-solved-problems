/**
 * Read four integer values named A, B, C and D. Calculate and print the difference of product A
 * and B by the product of C and D (A * B - C * D).
 *
 * INPUT
 *
 * The input file contains 4 integer values.
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * OUTPUT
 *
 * Print DIFFERENCE with all the capital letters, according to the following example, with a blank
 * space before and after the equal signal.
 */

const tmpl = result => `DIFFERENCE = ${result}`;

const difference = (a, b, c, d) => tmpl((a * b - c * d));

export { difference, tmpl };
