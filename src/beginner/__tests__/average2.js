import { average, tmpl } from '../average2';

describe('Average 2', () => {
  let A = 0;
  let B = 0;
  let C = 0;
  const result = (a, b, c) => average(a, b, c);

  it('The average for 5, 6 and 7 must be 6.3', () => {
    A = 5;
    B = 6;
    C = 7;

    expect(result(A, B, C)).toEqual(tmpl(6.3));
    expect(result(A, B, C)).toMatchSnapshot();
  });

  it('The average for 5, 10 and 10 must be 9', () => {
    A = 5;
    B = 10;
    C = 10;

    expect(result(A, B, C)).toEqual(tmpl(9));
    expect(result(A, B, C)).toMatchSnapshot();
  });

  it('The average 10, 10 and 5 must be 10', () => {
    A = 10;
    B = 10;
    C = 5;

    expect(result(A, B, C)).toEqual(tmpl(7.5));
    expect(result(A, B, C)).toMatchSnapshot();
  });
});
