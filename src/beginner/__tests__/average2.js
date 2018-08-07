import { average, tmpl } from '../average2';

describe('Average 2', () => {
  let a = 0;
  let b = 0;
  let c = 0;

  it('The average for 5, 6 and 7 must be 6.3', () => {
    a = 5;
    b = 6;
    c = 7;

    expect(average(a, b, c)).toEqual(tmpl(6.3));
  });

  it('The average for 5, 10 and 10 must be 9', () => {
    a = 5;
    b = 10;
    c = 10;

    expect(average(a, b, c)).toEqual(tmpl(9));
  });

  it('The average 10, 10 and 5 must be 10', () => {
    a = 10;
    b = 10;
    c = 5;

    expect(average(a, b, c)).toEqual(tmpl(7.5));
  });
});
