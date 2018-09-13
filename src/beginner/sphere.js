/**
 * @author Adriano Interaminense <adriano.interaminense@gmail.com>
 *
 * Make a program that calculates and shows the volume of a sphere being provided the value of its
 * radius (R) . The formula to calculate the volume is: (4/3) * pi * R3. Consider (assign) for pi
 * the value 3.14159.
 *
 * INPUT
 *
 * The input contains a value of floating point (double precision).
 * @param {number} radius
 *
 * OUTPUT
 *
 * The output must be a message "VOLUME" like the following example with a space before and after
 * the equal signal. The value must be presented with 3 digits after the decimal point.
 */

const tmpl = result => `VOLUME = ${result.toFixed(3)}`;

const volume = radius => tmpl((4 / 3) * 3.14159 * (radius ** 3));

export { volume, tmpl };
