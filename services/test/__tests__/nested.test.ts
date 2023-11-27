import { outputMessage } from "../src/nested";

describe("nested", () => {
  it("should output a message", () => {
    expect(outputMessage()).toEqual("Hello, World!");
  });
});
