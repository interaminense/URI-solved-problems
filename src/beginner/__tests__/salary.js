import { salary, tmpl } from '../salary';

describe('Salary', () => {
  let employers = 0;
  let hourNumber = 0;
  let valueByHour = 0;
  const result = (a, b, c) => salary(a, b, c);

  it('Employers number is 25 and the salary is 550 ', () => {
    employers = 25;
    hourNumber = 100;
    valueByHour = 5.5;

    expect(result(employers, hourNumber, valueByHour)).toEqual(tmpl(employers, 550));
    expect(result(employers, hourNumber, valueByHour)).toMatchSnapshot();
  });

  it('Employers number is 1 and the salary is 4100 ', () => {
    employers = 1;
    hourNumber = 200;
    valueByHour = 20.5;

    expect(result(employers, hourNumber, valueByHour)).toEqual(tmpl(employers, 4100));
    expect(result(employers, hourNumber, valueByHour)).toMatchSnapshot();
  });

  it('Employers number is 6 and the salary is 2254.75 ', () => {
    employers = 6;
    hourNumber = 145;
    valueByHour = 15.55;

    expect(result(employers, hourNumber, valueByHour)).toEqual(tmpl(employers, 2254.75));
    expect(result(employers, hourNumber, valueByHour)).toMatchSnapshot();
  });
});
