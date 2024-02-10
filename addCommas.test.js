const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it should return 34,000", () => {
    expect(addCommas(34000)).toEqual("34,000");
  });
  test("it should return -34,000", () => {
    expect(addCommas(-34000)).toEqual("-34,000");
  });
  test("it should return 9876543210", () => {
    expect(addCommas(9876543210)).toEqual("9,876,543,210");
  });

  test("it should return 87", () => {
    expect(addCommas(87)).toEqual("87");
  });
  test("it should return -87", () => {
    expect(addCommas(-87)).toEqual("-87");
  });
});
