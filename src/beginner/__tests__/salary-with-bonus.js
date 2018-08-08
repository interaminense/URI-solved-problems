import { salary, tmpl } from '../salary-with-bonus';

describe('Salary with bonus', () => {
  let name = '';
  let fixedSalary = 0;
  let salesTotal = 0;
  const result = (a, b, c) => salary(a, b, c);

  it('The fixed salary of JOAO is 500 and sallers total is 1230.30, his bonus is 684.54', () => {
    name = 'JOAO';
    fixedSalary = 500;
    salesTotal = 1230.30;

    expect(result(name, fixedSalary, salesTotal)).toEqual(tmpl(684.54));
    expect(result(name, fixedSalary, salesTotal)).toMatchSnapshot();
  });

  it('The fixed salary of PEDRO is 700.00 and sallers total is 0, his bonus is 700', () => {
    name = 'PEDRO';
    fixedSalary = 700;
    salesTotal = 0;

    expect(result(name, fixedSalary, salesTotal)).toEqual(tmpl('700.00'));
    expect(result(name, fixedSalary, salesTotal)).toMatchSnapshot();
  });

  it('The fixed salary of MANGOJATA is 1700 and sallers total is 1230.50, his bonus is 1884.58', () => {
    name = 'MANGOJATA';
    fixedSalary = 1700;
    salesTotal = 1230.50;

    expect(result(name, fixedSalary, salesTotal)).toEqual(tmpl(1884.58));
    expect(result(name, fixedSalary, salesTotal)).toMatchSnapshot();
  });
});
