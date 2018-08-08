import { difference, tmpl } from '../difference';

describe('Difference', () => {
  let A = 0;
  let B = 0;
  let C = 0;
  let D = 0;
  const result = (a, b, c, d) => difference(a, b, c, d);

  it('The differente between 5, 6, 7 and 8 is -26', () => {
    A = 5;
    B = 6;
    C = 7;
    D = 8;

    expect(result(A, B, C, D)).toEqual(tmpl(-26));
    expect(result(A, B, C, D)).toMatchSnapshot();
  });

  it('The differente between 0, 0, 7 and 8 is -56', () => {
    A = 0;
    B = 0;
    C = 7;
    D = 8;

    expect(result(A, B, C, D)).toEqual(tmpl(-56));
    expect(result(A, B, C, D)).toMatchSnapshot();
  });

  it('The differente between 5, 6, -7 and 8 is 86', () => {
    A = 5;
    B = 6;
    C = -7;
    D = 8;

    expect(result(A, B, C, D)).toEqual(tmpl(86));
    expect(result(A, B, C, D)).toMatchSnapshot();
  });
});
