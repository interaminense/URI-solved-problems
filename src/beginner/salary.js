/**
 * Write a program that reads an employee's number, his/her worked hours number in a month and the
 * amount he received per hour. Print the employee's number and salary that he/she will receive at
 * end of the month, with two decimal places.
 *
 * Don’t forget the space before and after the equal signal and after the U$.
 *
 * INPUT
 *
 * The input file contains 2 integer numbers and 1 value of floating point, representing the number,
 * worked hours amount and the amount the employee receives per worked hour.
 *
 * OUTPUT
 *
 * Print the number and the employee's salary, according to the given example, with a blank space
 * before and after the equal signal.
 */

const tmpl = (employers, salary) => `NUMBER = ${employers}\nSALARY = U$ ${salary}`;

const salary = (employers, hourNumber, valueByHour) => {
  const calcSalary = hourNumber * valueByHour;

  return tmpl(employers, calcSalary);
};

export { tmpl, salary };
