import { difference, tmpl } from '../difference';

describe('Difference', () => {
  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;

  it('The differente between 5, 6, 7 and 8 is -26', () => {
    a = 5;
    b = 6;
    c = 7;
    d = 8;

    expect(difference(a, b, c, d)).toEqual(tmpl(-26));
  });

  it('The differente between 0, 0, 7 and 8 is -56', () => {
    a = 0;
    b = 0;
    c = 7;
    d = 8;

    expect(difference(a, b, c, d)).toEqual(tmpl(-56));
  });

  it('The differente between 5, 6, -7 and 8 is 86', () => {
    a = 5;
    b = 6;
    c = -7;
    d = 8;

    expect(difference(a, b, c, d)).toEqual(tmpl(86));
  });
});
