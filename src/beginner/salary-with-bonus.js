/**
 * Make a program that reads a seller's name, his/her fixed salary and the sale's total made by
 * himself/herself in the month (in money). Considering that this seller receives 15% over all
 * products sold, write the final salary (total) of this seller at the end of the month , with two
 * decimal places.
 *
 * INPUT
 *
 * The input file contains a text (employee's first name), and two double precision values, that
 * are the seller's salary and the total value sold by him/her.
 *
 * OUTPUT
 *
 * Print the seller's total salary, according to the given example
 */

const tmpl = salary => `TOTAL = ${salary}`;

const salary = (name, fixedSalary, salesTotal) => {
  const totalSalary = salesTotal * 0.15 + fixedSalary;

  return tmpl(totalSalary.toFixed(2));
};

export { tmpl, salary };
