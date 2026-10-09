import { describe, expect, it } from "vitest";
import { resources } from "../../../data/resources";
import { sortResources } from "./resources";

describe("sortResources", () => {
  it("sorts resources by newest date uploaded", () => {
    const result = sortResources(resources, "newest");

    expect(result.map((resource) => resource.title)).toEqual([
      "10-Minute Morning Stretch",
      "Guided Meditation for Stress Relief",
      "Energy Boost Smoothie",
      "Mindful Moments",
      "Wellness Weekly",
      "The Science of Sleep",
    ]);
  });

  it("sorts resources by oldest date uploaded", () => {
    const result = sortResources(resources, "oldest");

    expect(result.map((resource) => resource.title)).toEqual([
      "The Science of Sleep",
      "Wellness Weekly",
      "Mindful Moments",
      "Energy Boost Smoothie",
      "Guided Meditation for Stress Relief",
      "10-Minute Morning Stretch",
    ]);
  });

  it("sorts resources alphabetically by category", () => {
    const result = sortResources(resources, "category");

    expect(result.map((resource) => resource.category)).toEqual([
      "Articles",
      "Fitness",
      "Meditation",
      "Newsletters",
      "Podcasts",
      "Recipes",
    ]);
  });
});
