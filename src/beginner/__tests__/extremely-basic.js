import { sum, tmpl } from '../extremely-basic';

describe('Extremely basic', () => {
  let a = 0;
  let b = 0;

  it('The sum 10 + 9 must be 19', () => {
    a = 10;
    b = 9;

    expect(sum(a, b)).toEqual(tmpl(19));
  });

  it('The sum -10 + 4 must be -6', () => {
    a = -10;
    b = 4;

    expect(sum(a, b)).toEqual(tmpl(-6));
  });

  it('The sum 15 + (-7) must be 8', () => {
    a = 15;
    b = -7;

    expect(sum(a, b)).toEqual(tmpl(8));
  });
});
