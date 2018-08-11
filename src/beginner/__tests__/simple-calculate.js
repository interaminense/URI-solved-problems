import { calculate, tmpl, valueToPay } from '../simple-calculate';

describe('Simple calculate', () => {
  let value1 = 0;
  let value2 = 0;

  const result = (a, b) => valueToPay(a, b);

  it('The calculate must be 15.5', () => {
    value1 = calculate(12, 1, 5.3);
    value2 = calculate(16, 2, 5.1);

    expect(result(value1, value2)).toEqual(tmpl('15.50'));
    expect(result(value1, value2)).toMatchSnapshot();
  });

  it('The calculate must be 51.4', () => {
    value1 = calculate(13, 2, 15.3);
    value2 = calculate(161, 4, 5.2);

    expect(result(value1, value2)).toEqual(tmpl('51.40'));
    expect(result(value1, value2)).toMatchSnapshot();
  });

  it('The calculate must be 30.2', () => {
    value1 = calculate(1, 1, 15.1);
    value2 = calculate(2, 1, 15.1);

    expect(result(value1, value2)).toEqual(tmpl('30.20'));
    expect(result(value1, value2)).toMatchSnapshot();
  });
});
