import { sum, tmpl } from '../extremely-basic';

describe('Extremely basic', () => {
  let A = 0;
  let B = 0;
  const result = (a, b) => sum(a, b);

  it('The sum 10 + 9 must be 19', () => {
    A = 10;
    B = 9;

    expect(result(A, B)).toEqual(tmpl(19));
    expect(result(A, B)).toMatchSnapshot();
  });

  it('The sum -10 + 4 must be -6', () => {
    A = -10;
    B = 4;

    expect(result(A, B)).toEqual(tmpl(-6));
    expect(result(A, B)).toMatchSnapshot();
  });

  it('The sum 15 + (-7) must be 8', () => {
    A = 15;
    B = -7;

    expect(result(A, B)).toEqual(tmpl(8));
    expect(result(A, B)).toMatchSnapshot();
  });
});
