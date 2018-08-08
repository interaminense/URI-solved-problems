import { prod, tmpl } from '../simple-product';

describe('Simple prod', () => {
  let A = 0;
  let B = 0;
  const result = (a, b) => prod(a, b);

  it('The prod 3 * 9 must be 27', () => {
    A = 3;
    B = 9;

    expect(result(A, B)).toEqual(tmpl(27));
    expect(result(A, B)).toMatchSnapshot();
  });

  it('The prod -30 * 10 must be -300', () => {
    A = -30;
    B = 10;

    expect(result(A, B)).toEqual(tmpl(-300));
    expect(result(A, B)).toMatchSnapshot();
  });

  it('The prod 0 * 9 must be 0', () => {
    A = 0;
    B = 9;

    expect(result(A, B)).toEqual(tmpl(0));
    expect(result(A, B)).toMatchSnapshot();
  });
});
