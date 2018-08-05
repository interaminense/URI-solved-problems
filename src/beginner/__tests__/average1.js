import { average, tmpl } from '../average1';

describe('Average 1', () => {
  let A = 0;
  let B = 0;

  it('The average for 5.0 and 7.1 must be 6.43182', () => {
    A = 5.0;
    B = 7.1;

    expect(average(A, B)).toEqual(tmpl((6.43182).toFixed(5)));
  });

  it('The average for 0.0 and 7.1 must be 4.84091', () => {
    A = 0.0;
    B = 7.1;

    expect(average(A, B)).toEqual(tmpl((4.84091).toFixed(5)));
  });

  it('The average 10.0 + 10.0 must be 10.0', () => {
    A = 10.0;
    B = 10.0;

    expect(average(A, B)).toEqual(tmpl((10.0).toFixed(5)));
  });
});
