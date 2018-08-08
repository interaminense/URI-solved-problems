import { areaOfCircle, tmpl } from '../area-of-a-circle';

describe('Area of a circle', () => {
  let R = 0;
  const result = r => areaOfCircle(r);

  it('The raius is 2.0, so, the area of circle should be 12.5664', () => {
    R = 2.0;

    expect(result(R)).toEqual(tmpl((12.5664).toFixed(4)));
    expect(result(R)).toMatchSnapshot();
  });

  it('The raius is 100.64, so, the area of circle should be 31819.3103', () => {
    R = 100.64;

    expect(result(R)).toEqual(tmpl((31819.3103).toFixed(4)));
    expect(result(R)).toMatchSnapshot();
  });

  it('The raius is 150.0, so, the area of circle should be 70685.775', () => {
    R = 150.0;

    expect(result(R)).toEqual(tmpl((70685.775).toFixed(4)));
    expect(result(R)).toMatchSnapshot();
  });
});
