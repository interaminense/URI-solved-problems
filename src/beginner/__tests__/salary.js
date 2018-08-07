import { salary, tmpl } from '../salary';

describe('Salary', () => {
  let employers = 0;
  let hourNumber = 0;
  let valueByHour = 0;

  it('Employers number is 25 and the salary is 550 ', () => {
    employers = 25;
    hourNumber = 100;
    valueByHour = 5.50;

    expect(salary(employers, hourNumber, valueByHour))
      .toEqual(tmpl(employers, 550));
  });

  it('Employers number is 1 and the salary is 4100 ', () => {
    employers = 1;
    hourNumber = 200;
    valueByHour = 20.50;

    expect(salary(employers, hourNumber, valueByHour))
      .toEqual(tmpl(employers, 4100));
  });

  it('Employers number is 6 and the salary is 2254.75 ', () => {
    employers = 6;
    hourNumber = 145;
    valueByHour = 15.55;

    expect(salary(employers, hourNumber, valueByHour))
      .toEqual(tmpl(employers, 2254.75));
  });
});
