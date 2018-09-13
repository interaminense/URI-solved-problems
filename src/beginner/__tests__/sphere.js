import { volume, tmpl } from '../sphere';

describe('Sphere', () => {
  let radius = 0;
  const result = R => volume(R);

  it('The volumn passin 3 must be 113.097', () => {
    radius = 3;

    expect(result(radius)).toEqual(tmpl(113.097));
    expect(result(radius)).toMatchSnapshot();
  });

  it('The volumn of 15 must be 14137.155', () => {
    radius = 15;

    expect(result(radius)).toEqual(tmpl(14137.155));
    expect(result(radius)).toMatchSnapshot();
  });

  it('The volumn of 1523 must be 14797486501.627', () => {
    radius = 1523;

    expect(result(radius)).toEqual(tmpl(14797486501.627));
    expect(result(radius)).toMatchSnapshot();
  });
});
