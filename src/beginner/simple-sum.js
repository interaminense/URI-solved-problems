/**
 * @author Adriano Interaminense <adriano.interaminense@gmail.com>
 *
 * Read two integer values, in this case, the variables A and B. After this,
 * calculate the sum between them and assign it to the variable SOMA. Write the
 * value of this variable.
 *
 * INPUT
 *
 * The input file contains 2 integer numbers.
 * @param {number} A
 * @param {number} B
 *
 * OUTPUT
 *
 * Print the variable SUM with all the capital letters, with a blank space before
 * and after the equal signal followed by the corresponding value to the sum of A and B.
 */

const tmpl = result => `SUM = ${result}`;

const sum = (A, B) => tmpl(A + B);

export { sum, tmpl };
