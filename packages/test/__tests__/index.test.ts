import { message } from "@packages/test";

describe("test", () => {
  it("should work", () => {
    expect(message).toEqual("Hello world!");
  });
});
