import { longestCommonPrefix } from "./longestCommonPrefix";

describe("longestCommonPrefix", () => {
  test("Example 1", () => {
    const strs = ["flower", "flow", "flight"];
    expect(longestCommonPrefix(strs)).toBe("fl");
  });

  test("Example 2", () => {
    const strs = ["dog", "racecar", "car"];
    expect(longestCommonPrefix(strs)).toBe("");
  });

  test("All strings are the same", () => {
    const strs = ["test", "test", "test"];
    expect(longestCommonPrefix(strs)).toBe("test");
  });

  test("No common prefix", () => {
    const strs = ["abc", "def", "ghi"];
    expect(longestCommonPrefix(strs)).toBe("");
  });

  test("Single character common prefix", () => {
    const strs = ["ab", "ac", "ad"];
    expect(longestCommonPrefix(strs)).toBe("a");
  });

  test("Empty array", () => {
    const strs: string[] = [];
    expect(longestCommonPrefix(strs)).toBe("");
  });

  test("Array with one string", () => {
    const strs = ["single"];
    expect(longestCommonPrefix(strs)).toBe("single");
  });

  test("Common prefix is the entire first string", () => {
    const strs = ["prefix", "prefixmatch", "prefixislong"];
    expect(longestCommonPrefix(strs)).toBe("prefix");
  });

  test("Common prefix is empty string", () => {
    const strs = ["", "b", "c"];
    expect(longestCommonPrefix(strs)).toBe("");
  });

  test("Mixed empty and non-empty strings", () => {
    const strs = ["", "test", "testing"];
    expect(longestCommonPrefix(strs)).toBe("");
  });
});
