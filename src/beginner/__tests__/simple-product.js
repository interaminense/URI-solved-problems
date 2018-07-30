import { prod, tmpl } from '../simple-product';

describe('Simple prod', () => {
  let A = 0;
  let B = 0;

  it('The prod 3 * 9 must be 27', () => {
    A = 3;
    B = 9;

    expect(prod(A, B)).toEqual(tmpl(27));
  });

  it('The prod -30 * 10 must be -300', () => {
    A = -30;
    B = 10;

    expect(prod(A, B)).toEqual(tmpl(-300));
  });

  it('The prod 0 * 9 must be 0', () => {
    A = 0;
    B = 9;

    expect(prod(A, B)).toEqual(tmpl(0));
  });
});
