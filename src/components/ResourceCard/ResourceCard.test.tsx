import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("ResourceCard", () => {
  it("renders the resource title, thumbnail, tags and duration", () => {
    const resource = {
      id: "001",
      category: "Podcasts",
      title: "Mindful Moments",
      thumbnail: "https://example.com/mindful-moments.jpg",
      tags: ["wellbeing", "mindfulness", "relaxation"],
      duration: 25,
      description:
        "A calming podcast focused on mindfulness techniques for daily life.",
      date_uploaded: "2025-07-10",
    };

    render(<ResourceCard resource={resource} />);

    expect(
      screen.getByRole("heading", { name: /mindful moments/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole("img")).toBeInTheDocument();

    expect(screen.getByText("wellbeing")).toBeInTheDocument();
    expect(screen.getByText("mindfulness")).toBeInTheDocument();
    expect(screen.getByText("relaxation")).toBeInTheDocument();

    expect(screen.getByText(/25 min/i)).toBeInTheDocument();
  });
});
