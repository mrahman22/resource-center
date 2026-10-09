import { render, screen, within, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { IResource } from "../../interfaces/resource";
import { Resources } from "./Resources";

const resources: IResource[] = [
  {
    id: "001",
    category: "Podcasts",
    title: "Mindful Moments",
    thumbnail: "https://example.com/mindful-moments.jpg",
    tags: ["wellbeing", "mindfulness", "relaxation"],
    duration: 25,
    description: "A calming mindfulness podcast.",
    date_uploaded: "2025-07-10",
  },
  {
    id: "002",
    category: "Articles",
    title: "The Science of Sleep",
    thumbnail: "https://example.com/sleep.jpg",
    tags: ["wellbeing", "sleep", "science"],
    duration: 8,
    description: "An article about sleep.",
    date_uploaded: "2025-06-22",
  },
];

describe("Resources", () => {
  it("renders the supplied resources", () => {
    render(<Resources resources={resources} />);

    expect(
      screen.getByRole("heading", { name: /mindful moments/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /the science of sleep/i }),
    ).toBeInTheDocument();
  });
  it("displays a message when there are no resources", () => {
    render(<Resources resources={[]} />);

    expect(screen.getByText(/no resources available/i)).toBeInTheDocument();
  });
  it("groups resources by category", () => {
    render(<Resources resources={resources} />);

    const podcastsGroup = screen.getByRole("region", {
      name: /podcasts/i,
    });

    const articlesGroup = screen.getByRole("region", {
      name: /articles/i,
    });

    expect(
      within(podcastsGroup).getByText(/mindful moments/i),
    ).toBeInTheDocument();

    expect(
      within(articlesGroup).getByText(/the science of sleep/i),
    ).toBeInTheDocument();
  });
  it("filters resources by title", () => {
    render(<Resources resources={resources} />);

    const searchInput = screen.getByRole("searchbox");

    fireEvent.change(searchInput, {
      target: { value: "Mindful Moments" },
    });

    expect(
      screen.getByRole("heading", { name: /mindful moments/i }),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("heading", { name: /the science of sleep/i }),
    ).not.toBeInTheDocument();
  });
  it("filters resources by tag", () => {
    render(<Resources resources={resources} />);

    const searchInput = screen.getByRole("searchbox");

    fireEvent.change(searchInput, {
      target: { value: "wellbeing" },
    });

    expect(
      screen.getByRole("heading", { name: /mindful moments/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /the science of sleep/i }),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("heading", { name: /energy boost smoothie/i }),
    ).not.toBeInTheDocument();
  });
  it("sorts resources by newest date uploaded", () => {
    render(<Resources resources={resources} />);

    const sortSelect = screen.getByRole("combobox");

    fireEvent.change(sortSelect, {
      target: { value: "newest" },
    });

    const resourceHeadings = screen.getAllByRole("heading", {
      level: 3,
    });

    expect(resourceHeadings[0]).toHaveTextContent("10-Minute Morning Stretch");

    expect(resourceHeadings[1]).toHaveTextContent("Wellness Weekly");
  });
});
