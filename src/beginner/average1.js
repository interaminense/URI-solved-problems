/**
 * @author Adriano Interaminense <adriano.interaminense@gmail.com>
 *
 * Read two floating points' values of double precision A and B, corresponding
 * to two student's grades. After this, calculate the student's average,
 * considering that grade A has weight 3.5 and B has weight 7.5. Each grade can
 * be from zero to ten, always with one digit after the decimal point.
 *
 * INPUT
 *
 * The input file contains 2 floating points values with one digit after the
 * decimal point.
 * @param {number} A
 * @param {number} B
 *
 * OUTPUT
 *
 * Print AVERAGE according to the following example, with 5 digits after the
 * decimal point and with a blank space before and after the equal signal.
 */

const tmpl = result => `AVERAGE = ${result}`;

const average = (A, B) => {
  const result = ((A * 3.5) + (B * 7.5)) / (3.5 + 7.5);

  return tmpl(result.toFixed(5));
};

export { average, tmpl };
