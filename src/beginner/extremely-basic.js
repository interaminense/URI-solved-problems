/**
 * @author Adriano Interaminense <adriano.interaminense@gmail.com>
 * 
 * Read 2 variables, named A and B and make the sum of these two variables,
 * assigning its result to the variable X. Print X as shown below. Print
 * endline after the result otherwise you will get “Presentation Error”.
 * 
 * INPUT
 * 
 * The input file will contain 2 integer numbers.
 * @param {number} a
 * @param {number} b
 * 
 * OUTPUT
 * 
 * Print the letter X (uppercase) with a blank space before and after the equal
 * signal followed by the value of X, according to the following example.
 */
const sum = (a, b) => tmpl(a + b);

/**
 * Template definition
 * @param {string | number} result 
 */
const tmpl = result => `X = ${result}`;

export {sum, tmpl};