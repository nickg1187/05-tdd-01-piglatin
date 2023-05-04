const translate = require("../src/piglatin.js");

describe("At least five (5) tests for words starting with different vowels.", () => {
  test(`translate("apple") → "appleway"`, () => {
    const returnValue = translate("apple");
    expect(returnValue).toBe("appleway");
  });
  test(`translate("else") → "elseway"`, () => {
    const returnValue = translate("else");
    expect(returnValue).toBe("elseway");
  });
  test(`translate("apricot") → "apricotway"`, () => {
    const returnValue = translate("apricot");
    expect(returnValue).toBe("apricotway");
  });
  test(`translate("underground") → "undergroundway"`, () => {
    const returnValue = translate("underground");
    expect(returnValue).toBe("undergroundway");
  });
  test(`translate("oboe") → "oboeway"`, () => {
    const returnValue = translate("oboe");
    expect(returnValue).toBe("oboeway");
  });
});

describe("At least two (2) tests for words starting with one consonant.", () => {
  test(`translate("giraffe") → "iraffegay"`, () => {
    const returnValue = translate("giraffe");
    expect(returnValue).toBe("iraffegay");
  });
  test(`translate("ginger") → "ingergay"`, () => {
    const returnValue = translate("ginger");
    expect(returnValue).toBe("ingergay");
  });
});

describe("At least one (1) test checking for lower case conversion.", () => {
  test(`translate("UBER") → "uberway`, () => {
    const returnValue = translate("UBER");
    expect(returnValue).toBe("uberway");
  });
});

describe("At least one (1) test for words starting with two consonants.", () => {
  test(`translate("phone") → "onephay"`, () => {
    const returnValue = translate("phone");
    expect(returnValue).toBe("onephay");
  });
});

describe("At least one (1) test for words starting with three consonants.", () => {
  test(`translate("screw") → "crewsay"`, () => {
    const returnValue = translate("screw");
    expect(returnValue).toBe("crewsay");
  });
});
