import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("App", () => {
  it("renders the resource centre heading", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /resource centre/i }),
    ).toBeInTheDocument();
  });

  it("renders the wellbeing tagline", () => {
    render(<App />);
    expect(
      screen.getByText(/resources for your wellbeing/i),
    ).toBeInTheDocument();
  });
});
