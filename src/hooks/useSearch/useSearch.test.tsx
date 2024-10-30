import { it, expect, describe, test } from "vitest";

import { filterRecords, isEmpty, isNotEmpty } from "./helpers";

// -----------------------------------------------------------------------------

describe("filterRecords", () => {
  it("should return all records when the search term is empty", () => {
    const fixture = [
      { name: "", desc: "findme" },
      { name: "", desc: "nope" },
    ];

    const subject = {
      fields: ["desc", "name"],
      records: [
        { name: "", desc: "findme" },
        { name: "", desc: "nope" },
      ],
      term: "",
    };

    expect(filterRecords(subject)).toEqual(fixture);
  });

  it("should return all records where fields contain the search term", () => {
    const fixture = [{ name: "", desc: "findme" }];

    const subject = {
      fields: ["desc", "name"],
      records: [
        { name: "", desc: "nope" },
        { name: "", desc: "findme" },
      ],
      term: "findme",
    };

    expect(filterRecords(subject)).toEqual(fixture);
  });

  it("is case-insensitive", () => {
    const aFixture = [{ name: "", desc: "FINDME" }];

    const aSubject = {
      fields: ["desc", "name"],
      records: [
        { name: "", desc: "nope" },
        { name: "", desc: "FINDME" },
      ],
      term: "findme",
    };

    expect(filterRecords(aSubject)).toEqual(aFixture);

    const bFixture = [{ name: "", desc: "findme" }];

    const bSubject = {
      fields: ["desc", "name"],
      records: [
        { name: "", desc: "nope" },
        { name: "", desc: "findme" },
      ],
      term: "FINDME",
    };

    expect(filterRecords(bSubject)).toEqual(bFixture);
  });
});

test("isEmpty", () => {
  expect(isEmpty("hi")).toBe(false);

  expect(isEmpty("")).toBe(true);
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(undefined)).toBe(true);
});

test("isNotEmpty", () => {
  expect(isNotEmpty("hi")).toBe(true);

  expect(isNotEmpty("")).toBe(false);
  expect(isNotEmpty(null)).toBe(false);
  expect(isNotEmpty(undefined)).toBe(false);
});
