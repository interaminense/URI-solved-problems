/**
 * @author Adriano Interaminense <adriano.interaminense@gmail.com>
 * Read two integer values. After this, calculate the product between them and
 * store the result in a variable named PROD.
 * 
 * INPUT
 * 
 * The input file contains 2 integer numbers.
 * @param {number} A
 * @param {number} B
 * 
 * OUTPUT
 * 
 * Print PROD according to the following example, with a blank space before and
 * after the equal signal.
 */
const prod = (A, B) => tmpl(A * B);

/**
 * Template definition
 * @param {string | number} result 
 */
const tmpl = result => `PROD = ${result}`;

export {prod, tmpl};