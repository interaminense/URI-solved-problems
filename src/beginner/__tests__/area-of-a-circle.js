import { areaOfCircle, tmpl } from '../area-of-a-circle';

describe('Area of a circle', () => {
  let R = 0;

  it('The raius is 2.00, so, the area of circle should be 12.5664', () => {
    R = 2.00;

    expect(areaOfCircle(R)).toEqual(tmpl((12.5664).toFixed(4)));
  });

  it('The raius is 100.64, so, the area of circle should be 31819.3103', () => {
    R = 100.64;

    expect(areaOfCircle(R)).toEqual(tmpl((31819.3103).toFixed(4)));
  });

  it('The raius is 150.00, so, the area of circle should be 70685.7750', () => {
    R = 150.00;

    expect(areaOfCircle(R)).toEqual(tmpl((70685.7750).toFixed(4)));
  });
});
