import { sum, tmpl } from '../simple-sum';

describe('Simple sum', () => {
  let A = 0;
  let B = 0;

  it('The sum 30 + 10 must be 40', () => {
    A = 30;
    B = 10;

    expect(sum(A, B)).toEqual(tmpl(40));
  });

  it('The sum -30 + 10 must be -20', () => {
    A = -30;
    B = 10;

    expect(sum(A, B)).toEqual(tmpl(-20));
  });

  it('The sum 0 + 0 must be 0', () => {
    A = 0;
    B = 0;

    expect(sum(A, B)).toEqual(tmpl(0));
  });
});
