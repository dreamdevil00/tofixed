require('../index');

test("expect 1.395.toFixed(2) to be '1.40'", () => {
  expect((1.395).toFixed(2)).toBe('1.40');
});

test("expect 1.394.toFixed(2) to be '1.39'", () => {
  expect((1.394).toFixed(2)).toBe('1.39');
});

test("expect -1.395.toFixed(2) to be '-1.4'", () => {
  expect((-1.395).toFixed(2)).toBe('-1.40');
});

test("expect -1.394.toFixed(2) to be '-1.39'", () => {
  expect((-1.394).toFixed(2)).toBe('-1.39');
});

test("expect NaN.toFixed(2) to be 'NaN'", () => {
  expect(NaN.toFixed(2)).toBe('NaN');
});

test("expect 1.395.toFixed(2.3) to be '1.40'", () => {
  expect((1.395).toFixed(2.3)).toBe('1.40');
});
