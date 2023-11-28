import { outputMessage } from "@services/test/nested";

describe("nested", () => {
  it("should output a message", () => {
    expect(outputMessage()).toEqual("Hello world!");
  });
});
