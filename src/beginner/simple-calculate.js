/**
 * In this problem, the task is to read a code of a product 1, the number of units of product 1,
 * the price for one unit of product 1, the code of a product 2, the number of units of product 2
 * and the price for one unit of product 2. After this, calculate and show the amount to be paid.
 *
 * INPUT
 *
 * The input file contains two lines of data. In each line there will be 3 values: two integers and
 * a floating value with 2 digits after the decimal point.
 * @param {number} code
 * @param {number} count
 * @param {number} value
 *
 * OUTPUT
 *
 * The output file must be a message like the following example where "Value to pay". Remember the
 * space after ":" and after "R$" symbol. The value must be presented with 2
 * digits after the point.
 */

const tmpl = result => `R$ = ${result}`;

const calculate = (code, count, value) => count * value;

const valueToPay = (value1, value2) => tmpl((value1 + value2).toFixed(2));

export { calculate, tmpl, valueToPay };
