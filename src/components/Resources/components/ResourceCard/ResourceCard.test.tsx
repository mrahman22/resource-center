import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ResourceCard } from "./ResourceCard";

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

    render(
      <ResourceCard
        resource={resource}
        selectedResource={null}
        onViewDetails={() => {}}
      />,
    );

    expect(
      screen.getByRole("heading", { name: /mindful moments/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole("img")).toBeInTheDocument();

    expect(screen.getByText("wellbeing")).toBeInTheDocument();
    expect(screen.getByText("mindfulness")).toBeInTheDocument();
    expect(screen.getByText("relaxation")).toBeInTheDocument();

    expect(screen.getByText(/25 min/i)).toBeInTheDocument();
  });
  it("renders a maximum of three tags", () => {
    const resource = {
      id: "002",
      category: "Articles",
      title: "The Science of Sleep",
      thumbnail: "https://example.com/sleep.jpg",
      tags: ["wellbeing", "sleep", "science", "health"],
      duration: 8,
      description: "An article about sleep.",
      date_uploaded: "2025-06-22",
    };

    render(
      <ResourceCard
        resource={resource}
        selectedResource={null}
        onViewDetails={() => {}}
      />,
    );

    expect(screen.getByText("wellbeing")).toBeInTheDocument();
    expect(screen.getByText("sleep")).toBeInTheDocument();
    expect(screen.getByText("science")).toBeInTheDocument();

    expect(screen.queryByText("health")).not.toBeInTheDocument();
  });
});
